import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { db } from '../config/firebase';
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from 'firebase/firestore';
import { MessageSquare, Send, User, Clock } from 'lucide-react';

const Comments = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    // Realtime Listener
    const q = query(collection(db, 'comments'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const docs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setComments(docs);
      setFetching(false);
    }, (error) => {
      console.error("Firestore Error:", error);
      setFetching(false);
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setLoading(true);
    try {
      await addDoc(collection(db, 'comments'), {
        name: name.trim(),
        message: message.trim(),
        createdAt: serverTimestamp(),
      });
      setName('');
      setMessage('');
    } catch (err) {
      console.error("Error adding comment: ", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="comments" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h3 className="text-3xl font-extrabold text-slate-100">
            comments My portfolio 
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Form */}
          <div className="lg:col-span-5 bg-slate-900/40 border border-slate-800 p-6 rounded-3xl h-fit">
            <h4 className="text-sm font-bold text-slate-200 mb-4 flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-sky-400" />
              <span>Tinggalkan Pesan</span>
            </h4>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">Nama</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nama Anda..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-200 outline-none focus:border-sky-500 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-1">Pesan Komentar</label>
                <textarea
                  required
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tulis pesan atau masukan..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-slate-200 outline-none focus:border-sky-500 transition resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs rounded-xl transition flex items-center justify-center gap-2"
              >
                {loading ? (
                  <span>Mengirim...</span>
                ) : (
                  <>
                    <span>Kirim Komentar</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Comments Feed */}
          {/* Diubah dari space-y-4 menjadi flex flex-col gap-4 agar layout animation framer-motion lebih mulus */}
          <div className="lg:col-span-7 flex flex-col gap-4 max-h-[420px] overflow-y-auto pr-2">
            {fetching ? (
              <div className="text-center py-8 text-xs text-slate-500">Memuat komentar...</div>
            ) : comments.length === 0 ? (
              <div className="text-center py-8 text-xs text-slate-500">Belum ada komentar. Jadilah yang pertama!</div>
            ) : (
              // Menambahkan AnimatePresence untuk mendeteksi item baru yang masuk
              <AnimatePresence initial={false}>
                {comments.map((item) => {
                  const date = item.createdAt?.toDate ? item.createdAt.toDate().toLocaleDateString('id-ID', {
                    day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit'
                  }) : 'Baru saja';

                  return (
                    <motion.div
                      key={item.id}
                      layout // Prop ini yang membuat komentar lama otomatis tergeser turun dengan mulus
                      initial={{ opacity: 0, y: -40, scale: 0.95 }} // Memulai dari atas (y negatif) dan sedikit lebih kecil
                      animate={{ opacity: 1, y: 0, scale: 1 }} // Turun ke posisi awal
                      transition={{ 
                        type: "spring", 
                        stiffness: 300, 
                        damping: 25, 
                        mass: 0.8 
                      }}
                      className="bg-slate-900/40 border border-slate-800/80 p-4 rounded-2xl shrink-0"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <div className="p-1.5 rounded-full bg-slate-800 text-sky-400">
                            <User className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-xs font-bold text-slate-200">{item.name}</span>
                        </div>
                        <div className="flex items-center gap-1 text-[10px] text-slate-500">
                          <Clock className="w-3 h-3" />
                          <span>{date}</span>
                        </div>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed pl-7">{item.message}</p>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Comments;