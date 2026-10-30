import { QuestionData } from '../types/cbt';

export const EXAM_QUESTIONS: QuestionData[] = [
  // =========================================================================
  // BAGIAN 1: 40 SOAL PILIHAN GANDA (5 OPSI A-E) DENGAN TIPE LITERASI
  // Termasuk 20 Soal Level HOTS (C4-C5)
  // =========================================================================

  // --- Materi: Keterkaitan Antarsila dalam Pancasila (Hal 4-8) ---
  {
    id: 1,
    type: 'single_choice',
    topic: 'Keterkaitan Antarsila Pancasila',
    subtopic: 'Sifat Kesatuan Organis',
    sourcePageRef: 'Buku Siswa Hal. 4-5',
    cognitiveLevel: 'C4',
    stimulus: 'Dalam buku "Uraian Pancasila" (1984), Mohammad Hatta bersama empat tokoh pendiri bangsa lainnya (Achmad Soebardjo, A.A. Maramis, Sunarjo, dan A.G. Pringgodigdo) menegaskan bahwa kelima sila Pancasila merupakan satu kesatuan utuh yang saling berkait dan tidak dapat dipisah-pisahkan.',
    question: 'Berdasarkan pandangan Mohammad Hatta tersebut, konsekuensi logis jika seseorang berupaya menerapkan sila kedua (Kemanusiaan yang Adil dan Beradab) tanpa menghubungkannya dengan sila pertama (Ketuhanan Yang Maha Esa) adalah...',
    options: [
      { key: 'A', text: 'Kemanusiaan kehilangan landasan moral religius dan mudah bergeser menjadi sekuleristik yang mengabaikan nilai spiritual bangsa' },
      { key: 'B', text: 'Tindakan kemanusiaan tersebut secara otomatis melanggar pasal 33 UUD NRI Tahun 1945 tentang perekonomian' },
      { key: 'C', text: 'Kedaulatan rakyat akan serta merta runtuh karena sila kedua tidak mengatur sistem perwakilan kenegaraan' },
      { key: 'D', text: 'Pancasila akan berganti bentuk menjadi ideologi tertutup yang membatasi musyawarah mufakat di masyarakat' },
      { key: 'E', text: 'Pemerintah berhak membubarkan seluruh organisasi kemasyarakatan yang tidak terdaftar di kementerian' }
    ],
    correctAnswer: 'A',
    explanation: 'Menurut Hatta, sila pertama Ketuhanan Yang Maha Esa menjiwai dan membimbing seluruh sila lainnya. Tanpa landasan Ketuhanan, pemahaman kemanusiaan kehilangan dimensi etika ketuhanan dan martabat suci manusia sebagai ciptaan Tuhan.'
  },
  {
    id: 2,
    type: 'single_choice',
    topic: 'Keterkaitan Antarsila Pancasila',
    subtopic: 'Hubungan Sila Pertama dan Sila Kedua',
    sourcePageRef: 'Buku Siswa Hal. 5',
    cognitiveLevel: 'C4',
    stimulus: 'Perhatikan teks buku hal. 5: "Pancasila tidak hanya menghendaki setiap orang yang menjadi bagian dari bangsa Indonesia meyakini dan menjalankan ajaran agama yang dipeluknya, tetapi juga mengamalkan ajaran tersebut dalam bentuk kasih sayang kepada sesama manusia sebagai makhluk Tuhan."',
    question: 'Bentuk aktualisasi yang paling mencerminkan hubungan timbal balik antara sila pertama dan sila kedua dalam kehidupan di sekolah kejuruan/teknik adalah...',
    options: [
      { key: 'A', text: 'Hanya mau berkelompok praktikum dengan teman yang satu keyakinan ibadah demi menjaga kekhusyukan' },
      { key: 'B', text: 'Membantu rekan yang mengalami kecelakaan kerja di bengkel praktik tanpa memandang latar belakang agama sebagai wujud ibadah nyata' },
      { key: 'C', text: 'Menolak aturan keselamatan kerja karena beranggapan takdir keselamatan sepenuhnya telah ditentukan' },
      { key: 'D', text: 'Mewajibkan seluruh anggota kelas mengikuti ritual keagamaan mayoritas sebelum memulai pembelajaran' },
      { key: 'E', text: 'Menyerahkan penyelesaian masalah kelas semata-mata kepada pihak kepolisian tanpa musyawarah' }
    ],
    correctAnswer: 'B',
    explanation: 'Keterkaitan sila 1 dan 2 menuntut agar keimanan kepada Tuhan mewujud dalam kasih sayang, tolong-menolong, dan empati tanpa diskriminasi kepada sesama ciptaan-Nya.'
  },
  {
    id: 3,
    type: 'single_choice',
    topic: 'Keterkaitan Antarsila Pancasila',
    subtopic: 'Hubungan Sila Kedua dan Sila Ketiga (Sukarno)',
    sourcePageRef: 'Buku Siswa Hal. 6',
    cognitiveLevel: 'C5',
    stimulus: 'Dalam Pidato 1 Juni 1945, Sukarno menyampaikan bahwa nasionalisme Indonesia bukanlah "chauvinisme" yang mengagungkan bangsa sendiri sambil merendahkan bangsa lain. Nasionalisme Indonesia hidup di dalam tamansarinya internasionalisme kemanusiaan.',
    question: 'Evaluasi kritis terhadap perilaku seorang warga negara yang mengkampanyekan kebencian terhadap warga negara asing dengan dalih "cinta tanah air ekstrem" menurut relasi Sila ke-2 dan Sila ke-3 adalah...',
    options: [
      { key: 'A', text: 'Sikap tersebut tepat karena membela bangsa Indonesia harus menempatkan bangsa lain sebagai ancaman' },
      { key: 'B', text: 'Sikap tersebut keliru karena nasionalisme Indonesia berakar pada perikemanusiaan universal dan memandang derajat seluruh bangsa setara' },
      { key: 'C', text: 'Sikap tersebut sah asalkan dilakukan di ruang digital dan tidak dilaporkan ke pihak berwajib' },
      { key: 'D', text: 'Sikap tersebut sesuai dengan doktrin pertahanan rakyat semesta yang menolak diplomasi luar negeri' },
      { key: 'E', text: 'Sikap tersebut merupakan pelaksanaan hak asasi manusia dalam berserikat dan berkumpul' }
    ],
    correctAnswer: 'B',
    explanation: 'Sila ke-3 (Persatuan Indonesia) harus diimbangi dengan Sila ke-2 (Kemanusiaan yang Adil dan Beradab). Bangsa Indonesia bukan bangsa yang menganggap dirinya lebih tinggi dari bangsa lain, melainkan bagian dari umat manusia universal yang cinta perdamaian.'
  },
  {
    id: 4,
    type: 'single_choice',
    topic: 'Keterkaitan Antarsila Pancasila',
    subtopic: 'Hubungan Sila Ketiga dan Sila Keempat',
    sourcePageRef: 'Buku Siswa Hal. 6-7',
    cognitiveLevel: 'C4',
    stimulus: 'Buku Siswa hal. 6 menegaskan: "Seluruh upaya yang dilakukan negara ataupun masyarakat dengan mengatasnamakan bangsa Indonesia, tidak boleh bertentangan dengan keberadaan hak-hak asasi manusia yang tertanam dalam prinsip demokrasi. Semua orang yang menjadi bagian bangsa harus dilihat dalam posisi setara."',
    question: 'Analisis paling tepat terhadap kebijakan publik yang diputuskan demi "kepentingan persatuan" namun mengabaikan proses musyawarah dan hak berpendapat warga minoritas adalah...',
    options: [
      { key: 'A', text: 'Kebijakan tersebut cacat secara filosofi Pancasila karena persatuan yang sejati dibangun di atas pondasi kedaulatan rakyat dan penghormatan HAM' },
      { key: 'B', text: 'Kebijakan tersebut sudah tepat karena dalam keadaan darurat demokrasi dapat dihapuskan sepenuhnya' },
      { key: 'C', text: 'Kebijakan tersebut sah menurut pasal 1 ayat 2 UUD 1945 sebelum dilakukan amandemen' },
      { key: 'D', text: 'Kebijakan tersebut mencerminkan ajaran monarki konstitusional yang mengutamakan keputusan penguasa' },
      { key: 'E', text: 'Kebijakan tersebut sesuai dengan prinsip demokrasi lima puluh plus satu' }
    ],
    correctAnswer: 'A',
    explanation: 'Keterkaitan sila ke-3 dan sila ke-4 mensyaratkan persatuan kebangsaan tidak boleh dibentuk secara otoriter, melainkan melalui prinsip kedaulatan rakyat, kesetaraan kedudukan, dan musyawarah.'
  },
  {
    id: 5,
    type: 'single_choice',
    topic: 'Keterkaitan Antarsila Pancasila',
    subtopic: 'Hubungan Sila Keempat dan Sila Kelima',
    sourcePageRef: 'Buku Siswa Hal. 7',
    cognitiveLevel: 'C5',
    stimulus: 'Pelaksanaan demokrasi menurut Pancasila tidak boleh hanya dimaknai sempit dalam aspek politik prosedural (seperti pemilu lima tahunan), tetapi harus bermuara pada demokrasi ekonomi dan keadilan sosial (Buku hal. 7).',
    question: 'Jika suatu negara telah berhasil menggelar pemilu berkala secara tertib namun jurang kemiskinan dan ketimpangan ekonomi masyarakatnya kian melebar secara ekstrem, maka kritik filosofis berdasarkan hubungan Sila ke-4 dan Sila ke-5 adalah...',
    options: [
      { key: 'A', text: 'Demokrasi tersebut baru berjalan sebatas prosedural politik dan belum mewujudkan substansi keadilan sosial ekonomi bagi seluruh rakyat' },
      { key: 'B', text: 'Sistem pemilihan umum harus segera diganti menjadi sistem penunjukan langsung oleh presiden seumur hidup' },
      { key: 'C', text: 'Konstitusi negara harus kembali ke masa Konstitusi RIS 1949 agar daerah dapat berdiri sendiri' },
      { key: 'D', text: 'Negara harus menolak seluruh bentuk investasi asing demi mempertahankan kemurnian pasar lokal' },
      { key: 'E', text: 'Masyarakat yang berpenghasilan rendah harus dicabut hak pilihnya dalam pemilu' }
    ],
    correctAnswer: 'A',
    explanation: 'Hubungan sila ke-4 dan ke-5 menegaskan bahwa kedaulatan rakyat harus bermuara pada pemerataan kesejahteraan sosial ekonomi dan pengentasan kemiskinan, bukan sekadar kebebasan politik semata.'
  },

  // --- Materi: Makna Sila-Sila dalam Pancasila (Hal 9-16) ---
  {
    id: 6,
    type: 'single_choice',
    topic: 'Makna Sila-Sila Pancasila',
    subtopic: 'Sila Pertama & Karakteristik Negara',
    sourcePageRef: 'Buku Siswa Hal. 9',
    cognitiveLevel: 'C4',
    stimulus: 'Teks Buku Hal. 9 menyebutkan: "Indonesia bukanlah negara agama, bukan pula negara sekuler. Indonesia adalah negara yang berketuhanan, di mana nilai-nilai ketuhanan menjiwai atau menjadi roh bagi seluruh kehidupan bermasyarakat, berbangsa, dan bernegara."',
    question: 'Berdasarkan pernyataan tersebut, kedudukan agama dan negara di Indonesia yang paling tepat dirumuskan adalah...',
    options: [
      { key: 'A', text: 'Negara memisahkan urusan publik secara mutlak dari nilai agama sebagaimana negara sekuler Barat' },
      { key: 'B', text: 'Negara mendasarkan konstitusi dan hukum formalnya pada satu hukum agama tertentu saja' },
      { key: 'C', text: 'Negara melindungi kemerdekaan beragama setiap penduduk dan menjadikan nilai moral ketuhanan sebagai etika penyelenggaraan negara' },
      { key: 'D', text: 'Pemerintah berwenang menentukan sah atau tidaknya ritual ibadah privat warga negara' },
      { key: 'E', text: 'Setiap pejabat publik diwajibkan berasal dari kelompok agama yang memiliki pemeluk paling banyak' }
    ],
    correctAnswer: 'C',
    explanation: 'Bukan negara teokrasi/agama (tidak mendasarkan pada satu agama tertentu) dan bukan sekuler (tidak memisahkan agama dari kehidupan berbangsa). Indonesia menjamin kemerdekaan beribadah (Pasal 29 UUD 1945) dan dinafasi nilai moral ketuhanan.'
  },
  {
    id: 7,
    type: 'single_choice',
    topic: 'Makna Sila-Sila Pancasila',
    subtopic: 'Sila Kedua: Makna Adil dan Beradab',
    sourcePageRef: 'Buku Siswa Hal. 11',
    cognitiveLevel: 'C4',
    stimulus: 'Kata "Adil" dalam Sila Kedua bermakna bahwa suatu keputusan didasarkan pada ukuran/norma objektif tanpa sewenang-wenang. Sedangkan "Beradab" bermakna dilandasi nilai budaya keluhuran norma sosial dan kesusilaan.',
    question: 'Di sebuah bengkel jurusan SMK, terjadi insiden hilangnya peralatan kerja mahal. Tindakan ketua jurusan dan wali kelas yang paling mencerminkan prinsip "Adil dan Beradab" adalah...',
    options: [
      { key: 'A', text: 'Langsung menuduh siswa yang memiliki catatan pelanggaran masa lalu tanpa memerlukan bukti fisik' },
      { key: 'B', text: 'Menghukum seluruh siswa satu kelas dengan denda uang tunai agar pelaku segera mengaku sendiri' },
      { key: 'C', text: 'Melakukan klarifikasi objektif melalui pemeriksaan kronologi, rekaman bengkel, serta mengedepankan asas praduga tak bersalah secara santun' },
      { key: 'D', text: 'Mengunggah video interogasi siswa ke media sosial agar pelaku mendapat sanksi sosial masyarakat luas' },
      { key: 'E', text: 'Mengabaikan insiden tersebut agar tidak menimbulkan kegaduhan di lingkungan sekolah' }
    ],
    correctAnswer: 'C',
    explanation: 'Adil menuntut ukuran objektif berlandaskan fakta tanpa kezaliman subjektif; beradab menuntut perlindungan harkat martabat manusia dan norma kesusilaan yang santun.'
  },
  {
    id: 8,
    type: 'single_choice',
    topic: 'Makna Sila-Sila Pancasila',
    subtopic: 'Sila Ketiga: Lingkungan dan Kebudayaan',
    sourcePageRef: 'Buku Siswa Hal. 12-13',
    cognitiveLevel: 'C4',
    stimulus: 'Pada halaman 13 Buku Siswa ditekankan bahwa Sila Persatuan Indonesia tidak hanya menghendaki cinta keanekaragaman suku dan budaya, tetapi juga mencintai lingkungan alam Indonesia yang kaya akan flora dan fauna demi generasi masa depan.',
    question: 'Wujud cinta tanah air dan persatuan Indonesia yang diintegrasikan dengan kelestarian ekologis oleh peserta didik SMK kejuruan adalah...',
    options: [
      { key: 'A', text: 'Membuang limbah oli bengkel otomotif atau kimia tekstil ke sungai terdekat saat malam hari' },
      { key: 'B', text: 'Mengembangkan inovasi pengolahan limbah ramah lingkungan serta hemat energi di lingkungan bengkel dan sekolah' },
      { key: 'C', text: 'Menebang pohon perindang sekolah untuk dijadikan lahan parkir motor komersial' },
      { key: 'D', text: 'Membeli produk impor bekas secara berlebihan tanpa memperhatikan dampaknya terhadap industri lokal' },
      { key: 'E', text: 'Menolak program daur ulang karena dianggap menambah beban tugas praktik kejuruan' }
    ],
    correctAnswer: 'B',
    explanation: 'Buku teks hal. 13 secara gamblang menyatakan cinta tanah air pada sila ke-3 meliputi kepedulian terhadap kelestarian lingkungan alam nusantara bagi generasi sekarang dan masa depan.'
  },
  {
    id: 9,
    type: 'single_choice',
    topic: 'Makna Sila-Sila Pancasila',
    subtopic: 'Sila Keempat: Demokrasi Musyawarah Versi Indonesia',
    sourcePageRef: 'Buku Siswa Hal. 14 & 34',
    cognitiveLevel: 'C4',
    stimulus: 'Mengutip Mohammad Hatta dan Munir Fuady (2010), demokrasi musyawarah versi Indonesia merupakan salah satu jenis teori demokrasi konsensus. Artinya, ia lebih menekankan konsensus daripada sekadar oposisi frontal, lebih merangkul daripada memusuhi, dan lebih baik berkoalisi daripada "demokrasi 50% + 1".',
    question: 'Karakteristik utama demokrasi musyawarah konsensus yang membedakannya dari sistem mayoritarian mutlak di negara barat adalah...',
    options: [
      { key: 'A', text: 'Keputusan hanya boleh diambil jika seluruh pihak memiliki agama dan suku yang sama persis' },
      { key: 'B', text: 'Keputusan diarahkan untuk menemukan titik temu kebaikan bersama melalui perundingan yang saling menghargai pendapat minoritas' },
      { key: 'C', text: 'Suara pihak minoritas otomatis diabaikan begitu kelompok mayoritas telah memenangkan pemungutan suara' },
      { key: 'D', text: 'Pengambilan keputusan selalu diserahkan kepada satu orang pemimpin tanpa perlu mendengarkan pendapat peserta' },
      { key: 'E', text: 'Rapat dibatalkan selamanya apabila terdapat satu peserta saja yang tidak sependapat' }
    ],
    correctAnswer: 'B',
    explanation: 'Demokrasi Pancasila bertumpu pada musyawarah mufakat (teori konsensus), di mana dialog mencari titik temu dan merangkul aspirasi seluruh elemen masyarakat.'
  },
  {
    id: 10,
    type: 'single_choice',
    topic: 'Makna Sila-Sila Pancasila',
    subtopic: 'Sila Kelima: Pembangunan dan Pemerataan',
    sourcePageRef: 'Buku Siswa Hal. 15-16',
    cognitiveLevel: 'C4',
    stimulus: 'Gambar 1.7 pada Buku Siswa hal. 16 menampilkan Proyek Jalan Trans-Papua sebagai bagian dari pemerataan pembangunan nasional demi mewujudkan cita-cita Sila Kelima.',
    question: 'Tujuan filosofis dari pembangunan infrastruktur yang merata di daerah tertinggal, terdepan, dan terluar (3T) dalam kaitan Sila Kelima adalah...',
    options: [
      { key: 'A', text: 'Membuka akses mobilitas warga untuk menikmati hak sosial-ekonomi yang adil serta mengikis kesenjangan antarwilayah' },
      { key: 'B', text: 'Mempermudah eksploitasi seluruh kekayaan alam daerah untuk dinikmati oleh kalangan elit di ibu kota saja' },
      { key: 'C', text: 'Mengganti seluruh budaya lokal suku setempat dengan kebudayaan perkotaan secara seragam' },
      { key: 'D', text: 'Menghapuskan otonomi daerah sehingga seluruh urusan kembali diatur terpusat oleh kementerian' },
      { key: 'E', text: 'Memperbanyak pembangunan gedung perkantoran mewah bagi para pejabat pemerintah di daerah terpencil' }
    ],
    correctAnswer: 'A',
    explanation: 'Keadilan sosial bagi seluruh rakyat Indonesia mengamanatkan bahwa kemakmuran dan pembangunan harus dirasakan oleh seluruh warga negara secara merata untuk memotong mata rantai ketimpangan.'
  },

  // --- Materi: Pancasila dalam Tindakan (Hal 17-22) ---
  {
    id: 11,
    type: 'single_choice',
    topic: 'Pancasila dalam Tindakan',
    subtopic: 'Pidato Sukarno 24 September 1955',
    sourcePageRef: 'Buku Siswa Hal. 21',
    cognitiveLevel: 'C4',
    stimulus: 'Dalam pidatonya di depan Kongres Rakyat Jawa Timur pada 24 September 1955, Sukarno menyatakan: "Aku bukan pencipta Pancasila. Pancasila diciptakan oleh bangsa Indonesia sendiri. Aku hanya menggali Pancasila daripada buminya bangsa Indonesia. Pancasila terbenam di dalam bumi bangsa Indonesia 350 tahun lamanya. Aku gali kembali dan kupersembahkan kembali kepada bangsa Indonesia."',
    question: 'Makna mendalam dari ungkapan Bung Karno tersebut bagi eksistensi Pancasila adalah...',
    options: [
      { key: 'A', text: 'Pancasila merupakan ideologi impor hasil adaptasi dari pemikiran filsuf Eropa Barat modern' },
      { key: 'B', text: 'Pancasila berakar dari nilai-nilai luhur kepribadian asli bangsa yang telah mengakar berabad-abad dalam sanubari masyarakat Nusantara' },
      { key: 'C', text: 'Pancasila baru tercipta secara mendadak pada saat sidang pertama BPUPK tanggal 1 Juni 1945' },
      { key: 'D', text: 'Pancasila hanya berlaku selama masa kepemimpinan Presiden Sukarno dan dapat diubah setelahnya' },
      { key: 'E', text: 'Pancasila merupakan kompromi politik sementara yang harus digantikan dengan ideologi lain di era modern' }
    ],
    correctAnswer: 'B',
    explanation: 'Sukarno memposisikan dirinya sebagai "penggali" (miner) karena nilai-nilai gotong royong, religiusitas, musyawarah, dan keadilan sosial memang sudah mengakar ribuan tahun di bumi Nusantara.'
  },
  {
    id: 12,
    type: 'single_choice',
    topic: 'Pancasila dalam Tindakan',
    subtopic: 'Pancasila sebagai Jalan Tengah',
    sourcePageRef: 'Buku Siswa Hal. 21-22',
    cognitiveLevel: 'C4',
    stimulus: 'Buku Siswa hal. 22 menyatakan bahwa Pancasila merupakan "jalan tengah" bagi bangsa Indonesia yang memiliki keragaman etnis, suku, budaya, dan agama yang sangat majemuk.',
    question: 'Mengapa Pancasila disebut sebagai jalan tengah (modus vivendi) pemersatu bangsa dalam konteks perumusan dasar negara Indonesia?',
    options: [
      { key: 'A', text: 'Karena mendamaikan pertentangan antara kelompok yang menginginkan negara agama murni dengan kelompok yang menginginkan negara sekuler murni' },
      { key: 'B', text: 'Karena mengambil separuh UUD Belanda dan separuh Konstitusi Amerika Serikat tanpa modifikasi' },
      { key: 'C', text: 'Karena membagi wilayah Indonesia menjadi negara serikat dengan kekuasaan otonom penuh bagi masing-masing raja lokal' },
      { key: 'D', text: 'Karena membatasi jumlah pemeluk agama minoritas agar tidak berselisih dengan golongan mayoritas' },
      { key: 'E', text: 'Karena menunda pengesahan undang-undang dasar hingga situasi politik pascarevolusi benar-benar stabil' }
    ],
    correctAnswer: 'A',
    explanation: 'Pancasila menjadi jalan tengah yang mampu mempersatukan golongan Islam/keagamaan dan golongan kebangsaan/nasionalis netral agama, sehingga Indonesia tetap utuh dalam bingkai NKRI.'
  },
  {
    id: 13,
    type: 'single_choice',
    topic: 'Pancasila dalam Tindakan',
    subtopic: 'Nasionalisme dalam Gelora Olahraga & Budaya Populer',
    sourcePageRef: 'Buku Siswa Hal. 17-21',
    cognitiveLevel: 'C4',
    stimulus: 'Lagu "Garuda di Dadaku" (Netral), "Garuda Pancasila" (Prohar Sudharnoto), dan "Garuda" (Cokelat) kerap dinyanyikan ribuan suporter saat timnas bertanding di stadion (Buku Siswa hal. 17-20).',
    question: 'Dari sudut pandang "Pancasila dalam Tindakan", fenomena ribuan suporter dari berbagai daerah dan latar belakang yang bernyanyi bersama mendukung tim nasional mencerminkan...',
    options: [
      { key: 'A', text: 'Fanatisme kedaerahan yang berpotensi memicu kerusuhan antarsuporter klub lokal' },
      { key: 'B', text: 'Sentimen ekonomi komersial yang dipaksakan oleh sponsor industri sepak bola dunia' },
      { key: 'C', text: 'Wujud nyata peleburan sekat primordial menjadi solidaritas persatuan dan kebanggaan nasional' },
      { key: 'D', text: 'Kegiatan seremonial belaka yang tidak memiliki dampak terhadap pembentukan karakter pemuda' },
      { key: 'E', text: 'Kewajiban militer terselubung yang diinstruksikan oleh aparat keamanan di stadion' }
    ],
    correctAnswer: 'C',
    explanation: 'Simbol Garuda dan bendera Merah Putih dalam arena olahraga menjadi manifestasi hidup Pancasila dalam tindakan, di mana perbedaan suku/etnis lebur dalam persatuan dan nasionalisme.'
  },

  // --- Materi: Pancasila sebagai Ideologi Negara (Hal 23-28) ---
  {
    id: 14,
    type: 'single_choice',
    topic: 'Pancasila sebagai Ideologi Negara',
    subtopic: 'Tiga Unsur Esensial Ideologi (Koento Wibisono)',
    sourcePageRef: 'Buku Siswa Hal. 23-24',
    cognitiveLevel: 'C4',
    stimulus: 'Koento Wibisono dalam Buku Siswa hal. 23 mengemukakan bahwa di dalam sebuah ideologi termuat tiga unsur esensial: Keyakinan, Mitos, dan Loyalitas.',
    question: 'Unsur "Keyakinan" dalam ideologi Pancasila memiliki arti bahwa...',
    options: [
      { key: 'A', text: 'Setiap ajaran Pancasila harus diyakini secara dogmatis tanpa boleh dipelajari latar belakang perumusannya' },
      { key: 'B', text: 'Pancasila memuat gagasan-gagasan vital yang telah diyakini kebenarannya untuk dijadikan dasar dan pedoman mencapai tujuan nasional' },
      { key: 'C', text: 'Pancasila meyakini bahwa perubahan sosial hanya dapat tercapai melalui revolusi bersenjata' },
      { key: 'D', text: 'Rakyat Indonesia dilarang memiliki keyakinan selain ajaran resmi yang diumumkan oleh partai pemenang pemilu' },
      { key: 'E', text: 'Keyakinan ideologi bersifat sementara dan harus diganti setiap lima tahun sekali sesuai presiden terpilih' }
    ],
    correctAnswer: 'B',
    explanation: 'Unsur keyakinan menurut Koento Wibisono bermakna adanya gagasan vital yang diyakini kebenarannya sebagai pedoman dasar dalam mencapai cita-cita dan strategi bernegara.'
  },
  {
    id: 15,
    type: 'single_choice',
    topic: 'Pancasila sebagai Ideologi Negara',
    subtopic: 'Ciri Ideologi: Bersifat Adaptif & Kontekstual',
    sourcePageRef: 'Buku Siswa Hal. 24',
    cognitiveLevel: 'C5',
    stimulus: 'Buku Siswa hal. 24 menyebutkan salah satu ciri umum ideologi adalah bersifat "Adaptif dan Kontekstual", yakni tidak kebal terhadap perkembangan zaman dan mampu merespons tantangan tanpa mengubah esensi nilai dasarnya.',
    question: 'Penerapan sifat adaptif dan kontekstual Pancasila dalam era kecerdasan buatan (Artificial Intelligence) dan transformasi digital adalah...',
    options: [
      { key: 'A', text: 'Menolak penggunaan internet di seluruh sekolah kejuruan karena dianggap merusak tradisi gotong royong' },
      { key: 'B', text: 'Memanfaatkan teknologi digital untuk pelayanan publik yang adil, transparan, dan inklusif sesuai nilai keadilan sosial' },
      { key: 'C', text: 'Mengubah lima sila Pancasila dengan butir-butir algoritma teknologi terbaru' },
      { key: 'D', text: 'Membiarkan penyebaran hoaks di media sosial sebagai wujud kebebasan mutlak tanpa aturan hukum' },
      { key: 'E', text: 'Mewajibkan warga mengganti konstitusi UUD 1945 dengan undang-undang digital internasional' }
    ],
    correctAnswer: 'B',
    explanation: 'Adaptif dan kontekstual berarti nilai dasar Pancasila (kemanusiaan, keadilan, persatuan) tetap kokoh, namun penerapannya luwes merespons era teknologi untuk kesejahteraan rakyat.'
  },
  {
    id: 16,
    type: 'single_choice',
    topic: 'Pancasila sebagai Ideologi Negara',
    subtopic: 'Meja Statis dan Leitstar Dinamis (Bung Karno)',
    sourcePageRef: 'Buku Siswa Hal. 27-28',
    cognitiveLevel: 'C5',
    stimulus: 'Dalam kursus Presiden Soekarno tentang Pancasila (2013), Sukarno menegaskan bahwa Pancasila adalah "meja statis" sekaligus "leitstar dinamis" (bintang penuntun dinamis).',
    question: 'Evaluasi paling mendalam mengenai makna Pancasila sebagai "Meja Statis" bagi keutuhan Negara Kesatuan Republik Indonesia adalah...',
    options: [
      { key: 'A', text: 'Pancasila merupakan dasar yang kaku, beku, dan melarang segala bentuk perubahan perundang-undangan' },
      { key: 'B', text: 'Pancasila menjadi landasan titik temu dan fondasi bersama yang mempersatukan seluruh keragaman suku, agama, dan budaya bangsa' },
      { key: 'C', text: 'Pancasila bertindak sebagai meja tempat pejabat negara menandatangani dokumen diplomasi luar negeri' },
      { key: 'D', text: 'Pancasila dapat ditiadakan apabila parlemen telah berhasil menyusun undang-undang dasar permanen' },
      { key: 'E', text: 'Pancasila membatasi mobilitas penduduk antarprovinsi demi menjaga kemurnian etnis daerah' }
    ],
    correctAnswer: 'B',
    explanation: 'Meja statis bermakna fondasi titik temu yang kokoh yang mempersatukan keragaman bangsa Indonesia, sedangkan Leitstar dinamis bermakna bintang penuntun yang mengarahkan cita-cita bangsa.'
  },
  {
    id: 17,
    type: 'single_choice',
    topic: 'Pancasila sebagai Ideologi Negara',
    subtopic: 'Pancasila sebagai Leitstar Dinamis',
    sourcePageRef: 'Buku Siswa Hal. 28',
    cognitiveLevel: 'C4',
    stimulus: 'Kata "leitstar" berasal dari bahasa Jerman "leitstern" yang berarti bintang penuntun. Sebagai leitstar yang dinamis, Pancasila bukanlah dasar yang diam mematung (Buku Siswa hal. 28).',
    question: 'Pancasila sebagai "Leitstar Dinamis" berfungsi untuk...',
    options: [
      { key: 'A', text: 'Menggerakkan dan mengarahkan bangsa Indonesia mengatasi tantangan zaman tanpa meninggalkan prinsip dasarnya' },
      { key: 'B', text: 'Mewajibkan seluruh warga negara menghafal lambang bintang pada Garuda Pancasila setiap upacara' },
      { key: 'C', text: 'Menjadikan Indonesia negara federasi yang menginduk pada kekuasaan negara-negara maju' },
      { key: 'D', text: 'Mengharuskan pergantian undang-undang dasar setiap terjadi pergantian kabinet menteri' },
      { key: 'E', text: 'Menghapuskan sistem peradilan perdata dan menggantinya dengan hukum adat setempat' }
    ],
    correctAnswer: 'A',
    explanation: 'Sebagai leitstar dinamis, Pancasila menyediakan arah, dorongan, dan kemampuan adaptif bagi bangsa untuk terus maju merespons perubahan zaman.'
  },
  {
    id: 18,
    type: 'single_choice',
    topic: 'Pancasila sebagai Ideologi Negara',
    subtopic: 'Visi Indonesia 2045 dan Impian 2085',
    sourcePageRef: 'Buku Siswa Hal. 26',
    cognitiveLevel: 'C4',
    stimulus: 'Pemerintah menetapkan Visi "Indonesia 2045: Berdaulat, Maju, Adil, dan Makmur" tepat pada 100 tahun kemerdekaan Indonesia, yang digerakkan oleh Generasi Emas (Buku Siswa hal. 26).',
    question: 'Karakteristik utama "Generasi Emas" yang diharapkan memimpin Indonesia pada tahun 2045 sesuai nilai Pancasila adalah...',
    options: [
      { key: 'A', text: 'Cerdas produktif-inovatif, berkarakter kuat, berjiwa gotong royong, dan sadar kelestarian lingkungan' },
      { key: 'B', text: 'Menguasai teknologi canggih namun bersikap apatis terhadap masalah sosial masyarakat' },
      { key: 'C', text: 'Mengutamakan persaingan individualistis dan menyingkirkan kelompok ekonomi lemah' },
      { key: 'D', text: 'Meninggalkan nilai ketuhanan demi mengejar efisiensi industri modern' },
      { key: 'E', text: 'Menyerahkan pengelolaan seluruh sumber daya negara kepada perusahaan swasta multinasional' }
    ],
    correctAnswer: 'A',
    explanation: 'Buku hal. 26 menjabarkan generasi emas sebagai generasi yang produktif, inovatif, berkarakter kuat, berjiwa gotong royong, dan membangun tanpa merusak alam.'
  },

  // --- Materi: Periodisasi Pemberlakuan UUD di Indonesia (Hal 33-45) ---
  {
    id: 19,
    type: 'single_choice',
    topic: 'Periodisasi Pemberlakuan UUD',
    subtopic: 'UUD 1945 Periode Pertama (18 Ags 1945 - 27 Des 1949)',
    sourcePageRef: 'Buku Siswa Hal. 37-38',
    cognitiveLevel: 'C4',
    stimulus: 'Dalam pidatonya di rapat PPKI tanggal 18 Agustus 1945, Bung Karno menyatakan: "...ini adalah Undang-Undang Dasar Sementara. Kalau boleh saya memakai perkataan: ini adalah Undang-Undang Dasar kilat... revolutie grondwet."',
    question: 'Alasan utama Sukarno dan para pendiri bangsa menyatakan sifat kesementaraan pada naskah UUD 1945 saat disahkan 18 Agustus 1945 adalah...',
    options: [
      { key: 'A', text: 'Karena Belanda telah menjanjikan naskah konstitusi kerajaan yang lebih lengkap' },
      { key: 'B', text: 'Disusun secara kilat dan mendesak dalam situasi revolusi kemerdekaan sehingga perlu disempurnakan saat negara tentram' },
      { key: 'C', text: 'PPKI tidak memiliki kewenangan sah untuk menetapkan undang-undang dasar negara merdeka' },
      { key: 'D', text: 'Para pendiri bangsa belum menyepakati dasar falsafah negara Pancasila' },
      { key: 'E', text: 'Badan Keamanan Rakyat menolak isi pasal-pasal pertahanan negara dalam UUD 1945' }
    ],
    correctAnswer: 'B',
    explanation: 'Disusun dalam tempo mendesak (revolutie grondwet) untuk segera melengkapi syarat berdirinya negara merdeka, dengan rencana kelak disempurnakan oleh Majelis Perwakilan Rakyat yang representatif.'
  },
  {
    id: 20,
    type: 'single_choice',
    topic: 'Periodisasi Pemberlakuan UUD',
    subtopic: 'Sistematika Awal UUD 1945',
    sourcePageRef: 'Buku Siswa Hal. 38',
    cognitiveLevel: 'C4',
    stimulus: 'Naskah UUD 1945 yang disahkan PPKI pada 18 Agustus 1945 terdiri atas Mukadimah (Pembukaan) dan Batang Tubuh yang meliputi 71 butir ketentuan tanpa bagian Penjelasan (Buku Siswa hal. 38).',
    question: 'Tokoh hukum yang di kemudian hari merumuskan naskah "Penjelasan UUD 1945" yang dimuat dalam Berita Republik Indonesia Tahun II No. 7 tanggal 15 Februari 1946 adalah...',
    options: [
      { key: 'A', text: 'Mohammad Hatta' },
      { key: 'B', text: 'Prof. Dr. Mr. Soepomo' },
      { key: 'C', text: 'Mr. Muhammad Yamin' },
      { key: 'D', text: 'Mr. A.A. Maramis' },
      { key: 'E', text: 'Sutan Sjahrir' }
    ],
    correctAnswer: 'B',
    explanation: 'Penjelasan UUD 1945 disusun oleh Prof. Dr. Mr. Soepomo dan kemudian resmi diumumkan dalam Berita Republik Indonesia No. 7 Tahun II tanggal 15 Februari 1946.'
  },
  {
    id: 21,
    type: 'single_choice',
    topic: 'Periodisasi Pemberlakuan UUD',
    subtopic: 'Peranan KNIP & Maklumat Wapres No. X',
    sourcePageRef: 'Buku Siswa Hal. 39',
    cognitiveLevel: 'C4',
    stimulus: 'Berdasarkan Pasal IV Aturan Peralihan UUD 1945, sebelum MPR, DPR, dan DPA dibentuk, segala kekuasaan dijalankan oleh Presiden dengan bantuan sebuah komite nasional (KNIP). Namun pada 16 Oktober 1945 diterbitkan Maklumat Wakil Presiden No. X.',
    question: 'Perubahan fundamental ketatanegaraan yang terjadi akibat terbitnya Maklumat Wakil Presiden No. X tanggal 16 Oktober 1945 adalah...',
    options: [
      { key: 'A', text: 'KNIP diserahi kekuasaan legislatif dan ikut menetapkan Garis-Garis Besar Haluan Negara (GBHN)' },
      { key: 'B', text: 'Presiden Soekarno diberhentikan dari jabatannya sebagai kepala negara' },
      { key: 'C', text: 'Bentuk negara Indonesia berubah dari kesatuan menjadi federasi serikat' },
      { key: 'D', text: 'Mahkamah Konstitusi resmi didirikan untuk mengadili sengketa lembaga' },
      { key: 'E', text: 'Sistem kabinet presidensial dipermanenkan tanpa menteri parlementer' }
    ],
    correctAnswer: 'A',
    explanation: 'Maklumat No. X memberikan kekuasaan legislatif kepada KNIP (yang sebelumnya hanya badan pembantu presiden), sekaligus ikut menetapkan GBHN sebelum terbentuknya DPR dan MPR definitif.'
  },
  {
    id: 22,
    type: 'single_choice',
    topic: 'Periodisasi Pemberlakuan UUD',
    subtopic: 'Maklumat Pemerintah 3 November 1945',
    sourcePageRef: 'Buku Siswa Hal. 39',
    cognitiveLevel: 'C4',
    stimulus: 'Pada tanggal 3 November 1945, Wakil Presiden Mohammad Hatta menandatangani Maklumat Pemerintah tentang anjuran pendirian partai politik seluas-luasnya.',
    question: 'Tujuan utama pemerintah mengeluarkan Maklumat 3 November 1945 di panggung perpolitikan awal kemerdekaan adalah...',
    options: [
      { key: 'A', text: 'Membubarkan badan kelengkapan negara yang dibentuk oleh sidang PPKI' },
      { key: 'B', text: 'Menunjukkan kepada dunia internasional (khususnya Sekutu) bahwa Indonesia adalah negara merdeka yang demokratis dan menjamin kebebasan berserikat' },
      { key: 'C', text: 'Menyederhanakan jumlah partai politik menjadi dua partai besar saja' },
      { key: 'D', text: 'Menyerahkan tampuk kekuasaan tertinggi kepada Dewan Pertimbangan Agung' },
      { key: 'E', text: 'Mencegah pelaksanaan pemilihan umum pertama di Indonesia' }
    ],
    correctAnswer: 'B',
    explanation: 'Maklumat 3 November 1945 mendorong lahirnya multipartai guna membuktikan ke dunia internasional bahwa Republik Indonesia bukan negara boneka atau fasis buatan Jepang, melainkan negara demokratis.'
  },
  {
    id: 23,
    type: 'single_choice',
    topic: 'Periodisasi Pemberlakuan UUD',
    subtopic: 'Konstitusi RIS 1949 (27 Des 1949 - 17 Ags 1950)',
    sourcePageRef: 'Buku Siswa Hal. 39-41',
    cognitiveLevel: 'C5',
    stimulus: 'Sebagai hasil Konferensi Meja Bundar (KMB), kedaulatan diserahkan kepada Republik Indonesia Serikat (RIS) pada 27 Desember 1949. Pada periode ini, UUD 1945 hanya berlaku di Negara Bagian RI yang beribu kota di Yogyakarta dengan Presiden Mr. Assaat (Buku Siswa hal. 40).',
    question: 'Analisis paling tepat mengenai bentuk negara dan sistem pemerintahan pada masa Konstitusi RIS 1949 adalah...',
    options: [
      { key: 'A', text: 'Bentuk negara kesatuan dengan sistem pemerintahan presidensial murni' },
      { key: 'B', text: 'Bentuk negara serikat (federasi) dengan sistem pemerintahan parlementer yang dipimpin perdana menteri' },
      { key: 'C', text: 'Bentuk negara monarki konstitusional dengan kepala negara seorang raja' },
      { key: 'D', text: 'Bentuk negara protektorat di bawah kekuasaan langsung Kerajaan Belanda' },
      { key: 'E', text: 'Bentuk negara kesatuan desentralistik dengan masa jabatan presiden seumur hidup' }
    ],
    correctAnswer: 'B',
    explanation: 'Sesuai Pasal 1 Konstitusi RIS: bentuk negara adalah serikat/federasi (terbagi atas negara bagian), dan sistem pemerintahannya adalah parlementer dengan kabinet dipimpin Perdana Menteri.'
  },
  {
    id: 24,
    type: 'single_choice',
    topic: 'Periodisasi Pemberlakuan UUD',
    subtopic: 'UUDS 1950 dan Instabilitas Politik (1950-1959)',
    sourcePageRef: 'Buku Siswa Hal. 42-43',
    cognitiveLevel: 'C4',
    stimulus: 'Pada masa berlakunya UUDS 1950 (17 Agustus 1950 - 5 Juli 1959), tercatat terjadi tujuh kali pergantian kabinet dalam kurun waktu sembilan tahun (Buku Siswa hal. 42).',
    question: 'Penyebab utama sering terjadinya pergantian kabinet pada masa UUDS 1950 adalah...',
    options: [
      { key: 'A', text: 'Kekuasaan absolut presiden yang membubarkan menteri secara sewenang-wenang setiap bulan' },
      { key: 'B', text: 'Penerapan sistem parlementer multipartai di mana kabinet mudah dijatuhkan parlemen melalui mosi tidak percaya' },
      { key: 'C', text: 'Konstitusi UUDS 1950 mewajibkan pergantian perdana menteri secara bergilir per satu tahun' },
      { key: 'D', text: 'Tidak adanya partai politik yang memiliki kursi di Dewan Perwakilan Rakyat' },
      { key: 'E', text: 'Adanya ancaman invasi militer terbuka dari negara-negara tetangga di Asia Tenggara' }
    ],
    correctAnswer: 'B',
    explanation: 'Dalam sistem parlementer multipartai UUDS 1950, kabinet bertanggung jawab kepada parlemen. Koalisi yang rapuh menyebabkan seringnya mosi tidak percaya dan jatuhnya kabinet.'
  },
  {
    id: 25,
    type: 'single_choice',
    topic: 'Periodisasi Pemberlakuan UUD',
    subtopic: 'Dekrit Presiden 5 Juli 1959',
    sourcePageRef: 'Buku Siswa Hal. 43-44',
    cognitiveLevel: 'C4',
    stimulus: 'Kegagalan Dewan Konstituante menetapkan rancangan UUD tetap serta kebuntuan voting pemungutan suara (tiga kali pemungutan suara tidak mencapai kuorum 2/3 anggota) mendorong Presiden Sukarno mengeluarkan Dekrit Presiden 5 Juli 1959.',
    question: 'Tiga poin substansial yang terkandung dalam Dekrit Presiden 5 Juli 1959 adalah...',
    options: [
      { key: 'A', text: 'Pembentukan federasi RIS, penghapusan partai politik, dan penunjukan perdana menteri baru' },
      { key: 'B', text: 'Pembubaran Konstituante, berlakunya kembali UUD 1945 dan tidak berlakunya UUDS 1950, serta pembentukan MPRS dan DPAS' },
      { key: 'C', text: 'Pengesahan amandemen UUD 1945, pembentukan Mahkamah Konstitusi, dan pemilihan presiden langsung' },
      { key: 'D', text: 'Pembubaran parlemen, pembentukan Komisi Yudisial, dan penetapan sistem presidensial murni' },
      { key: 'E', text: 'Penyerahan kedaulatan kepada PBB, pembentukan Kabinet Dwikora, dan pembubaran BPUPK' }
    ],
    correctAnswer: 'B',
    explanation: 'Isi Dekrit Presiden 5 Juli 1959: (1) Membubarkan badan Konstituante, (2) Menetapkan berlakunya kembali UUD 1945 dan tidak berlakunya UUDS 1950, (3) Pembentukan MPRS dan DPAS.'
  },

  // --- Materi: Perubahan (Amandemen) UUD NRI Tahun 1945 (Hal 46-54) ---
  {
    id: 26,
    type: 'single_choice',
    topic: 'Perubahan UUD NRI Tahun 1945',
    subtopic: 'Latar Belakang Amandemen',
    sourcePageRef: 'Buku Siswa Hal. 47-48',
    cognitiveLevel: 'C4',
    stimulus: 'Sebelum amandemen, kekuasaan negara bertumpu pada MPR yang menjalankan kedaulatan rakyat sepenuhnya, kekuasaan eksekutif presiden sangat dominan (executive heavy), dan banyak pasal yang bersifat multitafsir (Buku Siswa hal. 47).',
    question: 'Dampak ketatanegaraan yang terjadi pada masa Orde Baru akibat struktur UUD 1945 yang belum memiliki mekanisme checks and balances yang memadai adalah...',
    options: [
      { key: 'A', text: 'Pemerintahan sering dijatuhkan oleh mosi tidak percaya parlemen' },
      { key: 'B', text: 'Terjadinya pemusatan kekuasaan pada lembaga kepresidenan sehingga masa jabatan presiden bertahan hingga 32 tahun' },
      { key: 'C', text: 'Rakyat dapat memilih langsung presiden dan anggota DPD di setiap pemilu' },
      { key: 'D', text: 'Mahkamah Agung memiliki wewenang membatalkan ketetapan MPR' },
      { key: 'E', text: 'Pemerintah daerah memiliki otonomi mutlak untuk memisahkan diri' }
    ],
    correctAnswer: 'B',
    explanation: 'Ketiadaan pembatasan masa jabatan presiden (Pasal 7 lama: "...dapat dipilih kembali") dan dominasi eksekutif menyebabkan terjadinya sentralisasi kekuasaan tanpa kontrol efektif.'
  },
  {
    id: 27,
    type: 'single_choice',
    topic: 'Perubahan UUD NRI Tahun 1945',
    subtopic: 'Prosedur Perubahan Pasal 37 UUD 1945',
    sourcePageRef: 'Buku Siswa Hal. 49-50',
    cognitiveLevel: 'C4',
    stimulus: 'Pasal 37 UUD NRI Tahun 1945 hasil amandemen mengatur tata cara dan syarat perubahan pasal-pasal undang-undang dasar.',
    question: 'Berdasarkan Pasal 37 ayat (1) dan (3), syarat kuorum untuk mengajukan usul perubahan dan syarat kehadiran sidang MPR yang mengubah pasal UUD adalah...',
    options: [
      { key: 'A', text: 'Diajukan sekurang-kurangnya 1/3 jumlah anggota MPR dan sidang dihadiri sekurang-kurangnya 2/3 jumlah anggota MPR' },
      { key: 'B', text: 'Diajukan sekurang-kurangnya 1/2 jumlah anggota DPR dan sidang dihadiri seluruh menteri kabinet' },
      { key: 'C', text: 'Diajukan oleh presiden sendiri dan dihadiri sekurang-kurangnya 50% anggota MPR' },
      { key: 'D', text: 'Diajukan sekurang-kurangnya 1/4 jumlah anggota DPD dan disahkan oleh Mahkamah Konstitusi' },
      { key: 'E', text: 'Diajukan oleh sekurang-kurangnya 50% + 1 anggota MPR dan disetujui secara aklamasi' }
    ],
    correctAnswer: 'A',
    explanation: 'Pasal 37: Usul diajukan min. 1/3 anggota MPR tertulis dengan alasan jelas (ayat 1 & 2), sidang perubahan dihadiri min. 2/3 anggota MPR (ayat 3).'
  },
  {
    id: 28,
    type: 'single_choice',
    topic: 'Perubahan UUD NRI Tahun 1945',
    subtopic: 'Batasan Mutlak Pasal 37 Ayat 5',
    sourcePageRef: 'Buku Siswa Hal. 50',
    cognitiveLevel: 'C4',
    stimulus: 'Perhatikan Pasal 37 ayat (5) UUD NRI Tahun 1945 yang berbunyi: "Khusus mengenai bentuk Negara Kesatuan Republik Indonesia tidak dapat dilakukan perubahan."',
    question: 'Tujuan yuridis dan historis dicantumkannya ketentuan Pasal 37 ayat (5) tersebut adalah...',
    options: [
      { key: 'A', text: 'Membuka peluang bagi Indonesia untuk menjadi negara federasi jika disetujui referendum rakyat' },
      { key: 'B', text: 'Mengunci dan mengukuhkan komitmen final pendiri bangsa bahwa bentuk negara kesatuan adalah harga mati wadah kebinekaan' },
      { key: 'C', text: 'Menjadikan presiden sebagai penguasa tunggal yang tidak terikat hukum konstitusi' },
      { key: 'D', text: 'Melarang daerah membentuk peraturan daerah otonom untuk kearifan lokalnya' },
      { key: 'E', text: 'Menghapuskan keberadaan suku dan bahasa daerah agar seragam secara nasional' }
    ],
    correctAnswer: 'B',
    explanation: 'Pasal 37 ayat (5) menegaskan bahwa bentuk NKRI tidak dapat diubah sebagai kesepakatan dasar menjaga persatuan bangsa yang majemuk.'
  },
  {
    id: 29,
    type: 'single_choice',
    topic: 'Perubahan UUD NRI Tahun 1945',
    subtopic: 'Kesepakatan Dasar MPR',
    sourcePageRef: 'Buku Siswa Hal. 54',
    cognitiveLevel: 'C5',
    stimulus: 'Dalam proses perubahan UUD 1945 kurun waktu 1999-2002, Panitia Ad Hoc MPR menyepakati lima kesepakatan dasar yang tidak boleh dilanggar.',
    question: 'Di antara pernyataan berikut, manakah yang merupakan salah satu dari lima kesepakatan dasar perubahan UUD 1945?',
    options: [
      { key: 'A', text: 'Mengubah Pembukaan UUD 1945 agar sesuai perkembangan modernisasi' },
      { key: 'B', text: 'Mengganti sistem pemerintahan presidensial menjadi sistem parlementer barat' },
      { key: 'C', text: 'Melakukan perubahan secara "adendum", yaitu mempertahankan naskah asli dan melekatkan naskah perubahan' },
      { key: 'D', text: 'Menghidupkan kembali sebutan lembaga tertinggi negara bagi MPR' },
      { key: 'E', text: 'Mempertahankan naskah Penjelasan resmi Prof. Soepomo tanpa memasukkannya ke pasal-pasal' }
    ],
    correctAnswer: 'C',
    explanation: 'Kesepakatan dasar MPR: (1) Tidak mengubah Pembukaan, (2) Tetap mempertahankan NKRI, (3) Mempertegas sistem presidensial, (4) Menghapus Penjelasan & materi normatif dimasukkan pasal, (5) Dilakukan secara adendum.'
  },
  {
    id: 30,
    type: 'single_choice',
    topic: 'Perubahan UUD NRI Tahun 1945',
    subtopic: 'Hasil Perubahan Pertama (1999)',
    sourcePageRef: 'Buku Siswa Hal. 52',
    cognitiveLevel: 'C4',
    stimulus: 'Perubahan Pertama UUD 1945 disahkan pada Sidang Umum MPR 14-21 Oktober 1999 berfokus pada 9 pasal dan 13 ayat.',
    question: 'Fokus arah substansi materi pokok pada Perubahan Pertama UUD NRI Tahun 1945 adalah...',
    options: [
      { key: 'A', text: 'Pembentukan Mahkamah Konstitusi dan Komisi Yudisial' },
      { key: 'B', text: 'Membatasi kekuasaan Presiden dan memberdayakan DPR (seperti pembatasan masa jabatan dan pergeseran wewenang legislasi)' },
      { key: 'C', text: 'Pengaturan bab baru tentang Hak Asasi Manusia secara lengkap' },
      { key: 'D', text: 'Pengaturan tentang Bank Sentral dan sistem jaminan sosial nasional' },
      { key: 'E', text: 'Penetapan tata cara amandemen UUD pada Pasal 37' }
    ],
    correctAnswer: 'B',
    explanation: 'Perubahan Pertama fokus membatasi kekuasaan eksekutif (Presiden dibatasi max 2 periode, hak membuat UU bergeser ke DPR Pasal 20).'
  },
  {
    id: 31,
    type: 'single_choice',
    topic: 'Perubahan UUD NRI Tahun 1945',
    subtopic: 'Hasil Perubahan Kedua (2000)',
    sourcePageRef: 'Buku Siswa Hal. 52',
    cognitiveLevel: 'C4',
    stimulus: 'Perubahan Kedua disahkan dalam Sidang Tahunan MPR tahun 2000 terdiri atas 25 pasal dan 51 ayat (Buku Siswa hal. 52).',
    question: 'Materi pokok paling fundamental yang ditambahkan pada Perubahan Kedua UUD 1945 yang memperkuat perlindungan warga negara adalah...',
    options: [
      { key: 'A', text: 'Bab XA tentang Hak Asasi Manusia (Pasal 28A sampai 28J) serta bab Pemerintah Daerah dan Wilayah Negara' },
      { key: 'B', text: 'Penghapusan Dewan Pertimbangan Agung (DPA)' },
      { key: 'C', text: 'Pemilihan presiden dan wakil presiden secara langsung satu paket' },
      { key: 'D', text: 'Aturan peralihan dan aturan tambahan konstitusi' },
      { key: 'E', text: 'Pembentukan Badan Pemeriksa Keuangan sebagai badan independen' }
    ],
    correctAnswer: 'A',
    explanation: 'Perubahan Kedua memuat 7 materi pokok: Pemda (Ps 18), DPR, Wilayah Negara (Ps 25A), Warga Negara, HAM (Bab XA Ps 28A-28J), Hankam (Ps 30), dan Atribut Negara (Bendera, Bahasa, Lambang, Lagu Kebangsaan).'
  },
  {
    id: 32,
    type: 'single_choice',
    topic: 'Perubahan UUD NRI Tahun 1945',
    subtopic: 'Hasil Perubahan Ketiga (2001)',
    sourcePageRef: 'Buku Siswa Hal. 52',
    cognitiveLevel: 'C4',
    stimulus: 'Pada Sidang Tahunan MPR 1-9 November 2001 disahkan Perubahan Ketiga UUD NRI Tahun 1945 yang membawa lompatan besar dalam sistem penegakan hukum dan demokrasi.',
    question: 'Lembaga negara baru di bidang kekuasaan kehakiman dan lembaga perwakilan daerah yang lahir melalui Perubahan Ketiga UUD 1945 adalah...',
    options: [
      { key: 'A', text: 'Badan Keamanan Rakyat dan Komite Nasional Indonesia Pusat' },
      { key: 'B', text: 'Dewan Perwakilan Daerah (DPD), Mahkamah Konstitusi (MK), dan Komisi Yudisial (KY)' },
      { key: 'C', text: 'Dewan Pertimbangan Agung dan Badan Penyelidik Usaha Kemerdekaan' },
      { key: 'D', text: 'Komisi Pemberantasan Korupsi dan Ombudsman Republik Indonesia' },
      { key: 'E', text: 'Senat Federasi dan Dewan Pengawas Keuangan' }
    ],
    correctAnswer: 'B',
    explanation: 'Perubahan Ketiga memperkenalkan DPD (Bab VIIA), Pemilu (Bab VIIB), BPK mandiri (Bab VIIIA), serta Mahkamah Konstitusi & Komisi Yudisial di Bab IX Kekuasaan Kehakiman.'
  },
  {
    id: 33,
    type: 'single_choice',
    topic: 'Perubahan UUD NRI Tahun 1945',
    subtopic: 'Hasil Perubahan Keempat (2002)',
    sourcePageRef: 'Buku Siswa Hal. 53',
    cognitiveLevel: 'C4',
    stimulus: 'Perubahan Keempat disahkan pada 1-12 Agustus 2002 mencakup 13 pasal, 3 pasal aturan peralihan, dan 2 pasal aturan tambahan.',
    question: 'Ketentuan mengenai lembaga kenegaraan dan alokasi pendidikan yang diatur dalam Perubahan Keempat UUD 1945 meliputi...',
    options: [
      { key: 'A', text: 'Penghapusan DPA (diganti Dewan Pertimbangan Presiden/Wantimpres) dan kewajiban negara mengalokasikan anggaran pendidikan minimal 20%' },
      { key: 'B', text: 'Pembubaran partai politik oposisi dan penetapan sistem presidensial seumur hidup' },
      { key: 'C', text: 'Pengalihan kekuasaan monarki kepada parlemen' },
      { key: 'D', text: 'Penyerahan urusan fiskal sepenuhnya kepada bank swasta' },
      { key: 'E', text: 'Pengembalian naskah UUD ke masa Konstitusi RIS 1949' }
    ],
    correctAnswer: 'A',
    explanation: 'Perubahan Keempat menghapus DPA (Pasal 16 diganti Wantimpres), mengatur Bank Sentral (Ps 23D), kewajiban pendidikan dasar & anggaran 20% (Ps 31), jaminan sosial (Ps 34), serta aturan peralihan/tambahan.'
  },

  // --- Materi: Perilaku Demokratis Berdasarkan UUD 1945 pada Era Keterbukaan Informasi (Hal 55-63) ---
  {
    id: 34,
    type: 'single_choice',
    topic: 'Perilaku Demokratis Era Informasi',
    subtopic: 'Makna Demokratis Menurut Mustari (2014)',
    sourcePageRef: 'Buku Siswa Hal. 56',
    cognitiveLevel: 'C4',
    stimulus: 'Mustari (2014: 137) menjelaskan bahwa demokratis adalah cara berpikir, bersikap, dan bertindak yang menilai sama hak dan kewajiban dirinya dan orang lain. Sikap ini bukan bakat lahiriah, melainkan hasil proses pembiasaan dan pembelajaran panjang.',
    question: 'Implementasi konsep Mustari tersebut ketika seorang siswa menghadapi kekalahan dalam pemilihan ketua OSIS sekolah kejuruan adalah...',
    options: [
      { key: 'A', text: 'Menyebarkan rumor negatif di grup WhatsApp kelas bahwa panitia pemilu melakukan kecurangan' },
      { key: 'B', text: 'Mengakui keunggulan kandidat terpilih secara sportif dan siap berkolaborasi memajukan organisasi sekolah' },
      { key: 'C', text: 'Mengajak pendukungnya memboikot seluruh kegiatan OSIS sepanjang tahun ajaran berjalan' },
      { key: 'D', text: 'Membuat akun anonim di media sosial untuk mengejek program kerja kandidat yang menang' },
      { key: 'E', text: 'Menuntut pihak sekolah mengulang pemilihan sampai dirinya memperoleh suara terbanyak' }
    ],
    correctAnswer: 'B',
    explanation: 'Sikap demokratis menilai sama hak orang lain, menerima hasil musyawarah/pemilu secara berlapang dada, dan mengedepankan kerja sama konstruktif.'
  },
  {
    id: 35,
    type: 'single_choice',
    topic: 'Perilaku Demokratis Era Informasi',
    subtopic: 'Lima Indikator Demokrasi (Affan Gaffar)',
    sourcePageRef: 'Buku Siswa Hal. 36',
    cognitiveLevel: 'C4',
    stimulus: 'Affan Gaffar merumuskan 5 indikator negara demokrasi: (1) Akuntabilitas, (2) Rotasi kekuasaan, (3) Rekrutmen politik yang terbuka, (4) Pemilihan umum yang bebas dan adil, (5) Pemenuhan hak-hak dasar (Buku Siswa hal. 36).',
    question: 'Suatu organisasi atau pemerintahan di mana jabatan ketua selalu diwariskan hanya kepada kerabat dekat tanpa memberikan kesempatan kepada anggota lain yang berprestasi merupakan pelanggaran terhadap indikator...',
    options: [
      { key: 'A', text: 'Rekrutmen politik yang terbuka (Open political recruitment)' },
      { key: 'B', text: 'Sistem pertahanan semesta' },
      { key: 'C', text: 'Monarki absolut teokratis' },
      { key: 'D', text: 'Pemberlakuan hukum darurat militer' },
      { key: 'E', text: 'Otonomi daerah desentralistik' }
    ],
    correctAnswer: 'A',
    explanation: 'Rekrutmen terbuka menuntut bahwa setiap warga negara atau anggota memiliki peluang dan akses yang sama untuk mengisi kekosongan jabatan tanpa diskriminasi oligarki/nepotisme.'
  },
  {
    id: 36,
    type: 'single_choice',
    topic: 'Perilaku Demokratis Era Informasi',
    subtopic: 'Indeks Demokrasi EIU & Keterbukaan Informasi',
    sourcePageRef: 'Buku Siswa Hal. 56',
    cognitiveLevel: 'C5',
    stimulus: 'Data Economist Intelligence Unit (EIU) pada Buku Siswa hal. 56 mencatat bahwa penurunan indeks demokrasi kerap dipicu oleh melemahnya budaya politik yang demokratis dan kebebasan sipil, termasuk maraknya polarisasi serta perundungan di media daring.',
    question: 'Evaluasi kritis terhadap tantangan terbesar perilaku demokratis generasi muda pada era keterbukaan informasi saat ini adalah...',
    options: [
      { key: 'A', text: 'Kurangnya perangkat gawai telepon pintar yang beredar di masyarakat Indonesia' },
      { key: 'B', text: 'Rendahnya literasi kritis sehingga mudah terprovokasi hoaks, ujaran kebencian, dan cyberbullying di ruang digital' },
      { key: 'C', text: 'Terlalu banyaknya media massa asing yang menerbitkan berita dalam bahasa daerah' },
      { key: 'D', text: 'Adanya aturan undang-undang yang mewajibkan seluruh warga negara memiliki akun media sosial' },
      { key: 'E', text: 'Hilangnya hak pilih pemuda yang belum menyelesaikan pendidikan vokasi' }
    ],
    correctAnswer: 'B',
    explanation: 'Buku Siswa hal. 56 & 63 menegaskan tantangan utama di era keterbukaan informasi adalah derasnya arus informasi tanpa diimbangi kecerdasan literasi, memicu penyebaran hoaks dan intoleransi digital.'
  },
  {
    id: 37,
    type: 'single_choice',
    topic: 'Perilaku Demokratis Era Informasi',
    subtopic: 'Kebebasan Berekspresi yang Bertanggung Jawab',
    sourcePageRef: 'Buku Siswa Hal. 57-58',
    cognitiveLevel: 'C5',
    stimulus: 'Pasal 28E ayat (3) UUD NRI Tahun 1945 menjamin kebebasan menyatakan pikiran dan pendapat. Namun, pada Buku Siswa hal. 57 ditegaskan bahwa kebebasan di Indonesia adalah kebebasan yang bertanggung jawab menurut Pancasila.',
    question: 'Batasan etis dan yuridis yang membedakan kritik konstruktif melalui mural/meme media sosial dengan ujaran fitnah yang melanggar hukum adalah...',
    options: [
      { key: 'A', text: 'Kritik konstruktif menggunakan data dan fakta objektif demi perbaikan kebijakan tanpa menyerang kehormatan pribadi seseorang' },
      { key: 'B', text: 'Kritik konstruktif hanya boleh dibuat oleh organisasi resmi yang didanai pemerintah' },
      { key: 'C', text: 'Kritik konstruktif wajib disetujui terlebih dahulu oleh aparat keamanan sebelum diunggah' },
      { key: 'D', text: 'Ujaran fitnah diperbolehkan asalkan dibuat menggunakan gambar kartun lucu di internet' },
      { key: 'E', text: 'Kritik konstruktif dilarang menyinggung kinerja menteri atau kepala daerah' }
    ],
    correctAnswer: 'A',
    explanation: 'Kebebasan bertanggung jawab menuntut kritik berpijak pada substansi kebijakan, etika kesantunan, dasar data yang valid, dan tidak melakukan pencemaran nama baik atau fitnah pribadi.'
  },
  {
    id: 38,
    type: 'single_choice',
    topic: 'Perilaku Demokratis Era Informasi',
    subtopic: 'Alur Bernalar Kritis Pelajar Pancasila',
    sourcePageRef: 'Buku Siswa Hal. 60',
    cognitiveLevel: 'C4',
    stimulus: 'Gambar 2.9 Buku Siswa hal. 60 menguraikan elemen kunci bernalar kritis: (1) Memperoleh dan memproses informasi dan gagasan, (2) Menganalisis dan mengevaluasi penalaran, (3) Merefleksi pemikiran dan proses berpikir, (4) Mengambil keputusan.',
    question: 'Ketika menerima sebuah berita viral di grup percakapan mengenai isu sensitif kebangsaan, langkah bernalar kritis pertama yang wajib dilakukan peserta didik adalah...',
    options: [
      { key: 'A', text: 'Langsung membagikan pesan tersebut ke seluruh kontak dengan imbuhan kata peringatan darurat' },
      { key: 'B', text: 'Melakukan verifikasi fakta (fact-checking) dari sumber terpercaya dan kredibel sebelum mempercayai atau membagikannya' },
      { key: 'C', text: 'Menghapus aplikasi percakapan dan tidak mau membaca informasi apa pun lagi' },
      { key: 'D', text: 'Membuat komentar provokatif di kolom komentar agar memancing perdebatan hangat' },
      { key: 'E', text: 'Menyalahkan kelompok yang berseberangan tanpa membaca isi berita secara utuh' }
    ],
    correctAnswer: 'B',
    explanation: 'Tahap pertama bernalar kritis adalah memproses informasi secara objektif: saring sebelum sharing dan memverifikasi kebenaran dari sumber terpercaya.'
  },
  {
    id: 39,
    type: 'single_choice',
    topic: 'Perilaku Demokratis Era Informasi',
    subtopic: 'Perubahan Rumusan Kedaulatan Rakyat Pasal 1 Ayat 2',
    sourcePageRef: 'Buku Siswa Hal. 35 & 48',
    cognitiveLevel: 'C4',
    stimulus: 'Sebelum amandemen, Pasal 1 ayat (2) berbunyi: "Kedaulatan di tangan rakyat dan dilakukan sepenuhnya oleh MPR". Sesudah amandemen, berbunyi: "Kedaulatan berada di tangan rakyat dan dilaksanakan menurut Undang-Undang Dasar".',
    question: 'Makna perubahan rumusan kedaulatan rakyat tersebut terhadap supremasi hukum di Indonesia adalah...',
    options: [
      { key: 'A', text: 'MPR tidak lagi menjadi lembaga pemegang kekuasaan mutlak tanpa batas, dan kedaulatan rakyat diatur oleh mekanisme hukum konstitusi (rule of law)' },
      { key: 'B', text: 'Presiden memiliki wewenang untuk membubarkan DPR apabila undang-undang yang diajukan tidak disetujui' },
      { key: 'C', text: 'Rakyat tidak lagi memiliki hak suara dalam pemilu legislatif dan presiden' },
      { key: 'D', text: 'Seluruh sengketa hukum harus diputuskan langsung oleh ketua MPR' },
      { key: 'E', text: 'Sistem ketatanegaraan Indonesia berubah menjadi monarki konstitusional' }
    ],
    correctAnswer: 'A',
    explanation: 'Buku hal. 48 menjelaskan perubahan dari subjektif (kekuasaan tertinggi mutlak di MPR) menjadi objektif (kedaulatan tunduk pada konstitusi hukum dasar / rule of law).'
  },
  {
    id: 40,
    type: 'single_choice',
    topic: 'Perilaku Demokratis Era Informasi',
    subtopic: 'Prinsip Demokrasi Konstitusional (Ahmad Sanusi)',
    sourcePageRef: 'Buku Siswa Hal. 63-64',
    cognitiveLevel: 'C5',
    stimulus: 'Ahmad Sanusi (2006) merumuskan 10 pilar demokrasi konstitusional Indonesia, di antaranya: Demokrasi yang Berketuhanan YME, Demokrasi dengan Kecerdasan, Demokrasi dengan Rule of Law, dan Demokrasi yang Berkeadilan Sosial.',
    question: 'Konsep "Demokrasi dengan Kecerdasan" (Rule of Law with Intelligence) dalam penyelenggaraan negara menuntut bahwa...',
    options: [
      { key: 'A', text: 'Hanya warga negara yang bergelar sarjana saja yang diperbolehkan memberikan suara saat pemilihan umum' },
      { key: 'B', text: 'Keputusan dan tindakan politik kenegaraan tidak didasari oleh amarah, prasangka, atau naluri massa liar, melainkan akal budi sehat dan pertimbangan rasional-ilmiah' },
      { key: 'C', text: 'Pemerintah harus menutup seluruh kritik publik karena masyarakat dianggap belum cukup pintar' },
      { key: 'D', text: 'Sistem pemilu digantikan dengan sistem ujian tertulis bagi calon pemilih di TPS' },
      { key: 'E', text: 'Menteri kabinet hanya boleh diangkat dari universitas luar negeri ternama' }
    ],
    correctAnswer: 'B',
    explanation: 'Demokrasi dengan kecerdasan menuntut bangsa Indonesia berpikir rasional, jernih, mengedepankan akal sehat dan akhlak mulia dalam menyelesaikan persoalan bangsa.'
  },

  // =========================================================================
  // BAGIAN 2: 10 SOAL PILIHAN GANDA KOMPLEKS (PILIH LEBIH DARI 1 JAWABAN BENAR)
  // =========================================================================
  {
    id: 41,
    type: 'complex_choice',
    topic: 'Keterkaitan Antarsila Pancasila',
    subtopic: 'Prinsip Kesatuan Tak Terpisahkan',
    sourcePageRef: 'Buku Siswa Hal. 4-7',
    cognitiveLevel: 'C4',
    stimulus: 'Pancasila dipahami sebagai sebuah sistem filsafat yang organis, hierarkis-piramidal, dan saling mengkualifikasi. Sila pertama menjiwai keempat sila di bawahnya, dan sila kelima dijiwai oleh keempat sila di atasnya.',
    question: 'Pilihlah SEMUA pernyataan yang BENAR mengenai sifat keterkaitan antarsila dalam Pancasila!',
    options: [
      { id: 'opt1', text: 'Jika salah satu sila ditiadakan, maka hilanglah keutuhan makna Pancasila sebagai ideologi bangsa' },
      { id: 'opt2', text: 'Sila keempat (kerakyatan) menghendaki demokrasi politik yang juga harus menjamin keadilan sosial-ekonomi (sila kelima)' },
      { id: 'opt3', text: 'Sila ketiga membenarkan paham chauvinisme nasionalis ekstrem yang menolak persaudaraan antarumat manusia' },
      { id: 'opt4', text: 'Kemanusiaan yang adil dan beradab merupakan kelanjutan nyata dari pengamalan keimanan kepada Tuhan Yang Maha Esa' }
    ],
    correctAnswers: ['opt1', 'opt2', 'opt4'],
    explanation: 'Pernyataan 1, 2, dan 4 benar menurut Buku Hal. 4-7. Pernyataan 3 salah karena sila ke-3 menolak chauvinisme dan bersanding dengan kemanusiaan universal sila ke-2.'
  },
  {
    id: 42,
    type: 'complex_choice',
    topic: 'Pancasila sebagai Ideologi Negara',
    subtopic: 'Unsur Esensial dan Ciri Ideologi',
    sourcePageRef: 'Buku Siswa Hal. 23-24',
    cognitiveLevel: 'C4',
    stimulus: 'Koento Wibisono merumuskan 3 unsur esensial ideologi, sementara secara umum ideologi memiliki 6 ciri khas yang menuntun arah kehidupan bermasyarakat.',
    question: 'Manakah di antara karakteristik berikut yang merupakan unsur esensial atau ciri umum dari sebuah ideologi menurut Buku Siswa PPKn Kelas XI?',
    options: [
      { id: 'opt1', text: 'Keyakinan akan gagasan vital yang dijadikan dasar dan strategi pencapaian tujuan' },
      { id: 'opt2', text: 'Mitos yang memitoskan ajaran secara optimis untuk menjamin tercapainya cita-cita bersama' },
      { id: 'opt3', text: 'Loyalitas yang menuntut keterlibatan optimal dari para subjek pendukungnya' },
      { id: 'opt4', text: 'Sifat kaku yang menolak secara mutlak segala bentuk penyesuaian terhadap perkembangan zaman' }
    ],
    correctAnswers: ['opt1', 'opt2', 'opt3'],
    explanation: 'Tiga unsur esensial menurut Koento Wibisono adalah Keyakinan, Mitos, dan Loyalitas (opt1, opt2, opt3). Opsi 4 salah karena ideologi terbuka seperti Pancasila bersifat adaptif dan kontekstual.'
  },
  {
    id: 43,
    type: 'complex_choice',
    topic: 'Pancasila sebagai Ideologi Negara',
    subtopic: 'Dimensi Meja Statis dan Leitstar Dinamis',
    sourcePageRef: 'Buku Siswa Hal. 27-28',
    cognitiveLevel: 'C5',
    stimulus: 'Bung Karno merumuskan dwi-fungsi kedudukan Pancasila bagi bangsa Indonesia: sebagai meja statis sekaligus leitstar dinamis.',
    question: 'Manakah pernyataan yang TEPAT mengenai konsep "Meja Statis" dan "Leitstar Dinamis"?',
    options: [
      { id: 'opt1', text: 'Sebagai meja statis, Pancasila mempertemukan dan menyatukan seluruh keragaman suku, agama, dan budaya di Indonesia' },
      { id: 'opt2', text: 'Sebagai meja statis, Pancasila melarang negara melakukan pembangunan infrastruktur teknologi modern' },
      { id: 'opt3', text: 'Sebagai leitstar dinamis, Pancasila menjadi bintang penuntun yang luwes mengarahkan respon bangsa terhadap tantangan zaman' },
      { id: 'opt4', text: 'Pancasila mampu membuat negara bersikap adaptif tanpa harus meninggalkan prinsip-prinsip moral fundamentalnya' }
    ],
    correctAnswers: ['opt1', 'opt3', 'opt4'],
    explanation: 'Opt1, opt3, dan opt4 tepat mendefinisikan meja statis (titik temu pemersatu) dan leitstar dinamis (bintang penuntun adaptif). Opt2 salah.'
  },
  {
    id: 44,
    type: 'complex_choice',
    topic: 'Periodisasi Pemberlakuan UUD',
    subtopic: 'Karakteristik Konstitusi RIS 1949',
    sourcePageRef: 'Buku Siswa Hal. 39-41',
    cognitiveLevel: 'C4',
    stimulus: 'Pemberlakuan Konstitusi RIS pada 27 Desember 1949 membawa tatanan ketatanegaraan baru pasca-Konferensi Meja Bundar (KMB).',
    question: 'Pilihlah karakteristik ketatanegaraan yang secara historis BERLAKU pada masa Konstitusi RIS 1949!',
    options: [
      { id: 'opt1', text: 'Bentuk negara Indonesia adalah serikat / federasi yang terdiri atas beberapa negara bagian' },
      { id: 'opt2', text: 'Sistem pemerintahan yang dianut adalah sistem parlementer dengan kabinet dipimpin Perdana Menteri' },
      { id: 'opt3', text: 'UUD 1945 tetap berlaku di Negara Bagian Republik Indonesia di Yogyakarta dengan Presiden Mr. Assaat' },
      { id: 'opt4', text: 'Presiden Republik Indonesia Serikat menjabat sebagai kepala pemerintahan seumur hidup' }
    ],
    correctAnswers: ['opt1', 'opt2', 'opt3'],
    explanation: 'Karakteristik RIS: negara serikat, parlementer dengan PM, UUD 1945 hanya berlaku di Yogyakarta dengan Presiden Mr. Assaat. Opsi 4 salah.'
  },
  {
    id: 45,
    type: 'complex_choice',
    topic: 'Periodisasi Pemberlakuan UUD',
    subtopic: 'Kondisi Ketatanegaraan Masa UUDS 1950',
    sourcePageRef: 'Buku Siswa Hal. 42-44',
    cognitiveLevel: 'C4',
    stimulus: 'UUDS 1950 berlaku sejak 17 Agustus 1950 sampai dikeluarkannya Dekrit Presiden 5 Juli 1959.',
    question: 'Manakah fakta sejarah ketatanegaraan yang BENAR mengenai periode berlakunya UUDS 1950?',
    options: [
      { id: 'opt1', text: 'Bentuk negara kembali menjadi Negara Kesatuan Republik Indonesia dengan bentuk pemerintahan republik' },
      { id: 'opt2', text: 'Terjadi instabilitas politik yang ditandai dengan tujuh kali pergantian kabinet dalam kurun waktu sembilan tahun' },
      { id: 'opt3', text: 'Dewan Konstituante yang dipilih lewat Pemilu 1955 berhasil mengesahkan konstitusi permanen tepat waktu' },
      { id: 'opt4', text: 'Dewan perwakilan rakyat pada masa ini memiliki hak mosi tidak percaya untuk menjatuhkan kabinet pemerintah' }
    ],
    correctAnswers: ['opt1', 'opt2', 'opt4'],
    explanation: 'UUDS 1950: bentuk kesatuan, 7 kali ganti kabinet, sistem parlementer mosi tidak percaya. Opsi 3 salah karena Konstituante gagal mengambil keputusan final.'
  },
  {
    id: 46,
    type: 'complex_choice',
    topic: 'Perubahan UUD NRI Tahun 1945',
    subtopic: 'Kesepakatan Dasar Panitia Ad Hoc MPR',
    sourcePageRef: 'Buku Siswa Hal. 54',
    cognitiveLevel: 'C4',
    stimulus: 'MPR periode 1999-2004 menetapkan lima kesepakatan dasar sebagai koridor dalam melakukan amandemen UUD NRI Tahun 1945.',
    question: 'Pilihlah kesepakatan dasar MPR dalam proses amandemen UUD NRI Tahun 1945!',
    options: [
      { id: 'opt1', text: 'Tidak mengubah Pembukaan UUD NRI Tahun 1945' },
      { id: 'opt2', text: 'Tetap mempertahankan bentuk Negara Kesatuan Republik Indonesia (NKRI)' },
      { id: 'opt3', text: 'Mempertegas sistem pemerintahan presidensial' },
      { id: 'opt4', text: 'Memasukkan bagian Penjelasan resmi menjadi bagian yang terpisah dari pasal-pasal' }
    ],
    correctAnswers: ['opt1', 'opt2', 'opt3'],
    explanation: 'Kesepakatan dasar MPR: tidak ubah pembukaan, pertahankan NKRI, perkuat presidensial, penjelasan ditiadakan dan materi normatif masuk pasal (bukan dipisah), dan cara adendum.'
  },
  {
    id: 47,
    type: 'complex_choice',
    topic: 'Perubahan UUD NRI Tahun 1945',
    subtopic: 'Dampak Amandemen bagi Warga Negara',
    sourcePageRef: 'Buku Siswa Hal. 48',
    cognitiveLevel: 'C5',
    stimulus: 'Amandemen UUD 1945 menghasilkan pergeseran paradigma ketatanegaraan yang berdampak langsung pada kehidupan rakyat Indonesia (Buku Siswa hal. 48).',
    question: 'Dampak positif amandemen UUD 1945 terhadap demokratisasi di Indonesia adalah...',
    options: [
      { id: 'opt1', text: 'Rakyat berdaulat secara langsung dapat memilih wakil rakyat serta presiden dan wakil presiden melalui pemilu' },
      { id: 'opt2', text: 'Kedaulatan negara beralih dari subjektif (kuasa mutlak MPR) menjadi objektif berlandaskan hukum konstitusi' },
      { id: 'opt3', text: 'Terciptanya mekanisme check and balances antarlembaga negara sehingga tidak ada lagi lembaga tertinggi negara' },
      { id: 'opt4', text: 'Presiden berwenang membubarkan parlemen DPR jika terjadi pertentangan politik' }
    ],
    correctAnswers: ['opt1', 'opt2', 'opt3'],
    explanation: 'Dampak amandemen (hal 48): Pemilu langsung, kedaulatan menurut UUD, check and balances tanpa lembaga tertinggi. Presiden tidak dapat membubarkan DPR (Pasal 7C).'
  },
  {
    id: 48,
    type: 'complex_choice',
    topic: 'Perilaku Demokratis Era Informasi',
    subtopic: 'Indikator Demokrasi Menurut Affan Gaffar',
    sourcePageRef: 'Buku Siswa Hal. 36',
    cognitiveLevel: 'C4',
    stimulus: 'Affan Gaffar mengemukakan lima indikator untuk menilai apakah suatu negara benar-benar menerapkan sistem yang demokratis.',
    question: 'Manakah yang termasuk ke dalam lima indikator negara demokrasi menurut Affan Gaffar?',
    options: [
      { id: 'opt1', text: 'Akuntabilitas publik bagi setiap pejabat pemegang amanat' },
      { id: 'opt2', text: 'Rotasi kekuasaan yang berlangsung secara damai dan teratur' },
      { id: 'opt3', text: 'Pemenuhan hak-hak dasar seperti kebebasan berpendapat dan berserikat' },
      { id: 'opt4', text: 'Sentralisasi seluruh kewenangan peradilan pada kepala eksekutif' }
    ],
    correctAnswers: ['opt1', 'opt2', 'opt3'],
    explanation: 'Lima indikator Affan Gaffar: Akuntabilitas, Rotasi kekuasaan, Rekrutmen terbuka, Pemilu bebas/adil, dan Pemenuhan hak dasar. Opt4 bertentangan dengan demokrasi.'
  },
  {
    id: 49,
    type: 'complex_choice',
    topic: 'Perilaku Demokratis Era Informasi',
    subtopic: 'Perilaku Demokratis di Lingkungan Sekolah',
    sourcePageRef: 'Buku Siswa Hal. 55 & 64',
    cognitiveLevel: 'C4',
    stimulus: 'Budaya demokrasi harus dibangun melalui pembiasaan sehari-hari di lingkungan sekolah sebagai wahana pelatihan warga negara yang bertanggung jawab.',
    question: 'Pilihlah tindakan peserta didik yang mencerminkan perilaku demokratis berdasarkan nilai Pancasila di lingkungan sekolah!',
    options: [
      { id: 'opt1', text: 'Menghargai hasil musyawarah mufakat kelas meskipun usulan pribadinya tidak terpilih' },
      { id: 'opt2', text: 'Memberikan kesempatan kepada rekan lain untuk mengemukakan pendapat tanpa memotong pembicaraan' },
      { id: 'opt3', text: 'Memaksakan kehendak kelompok sendiri saat menentukan ketua kelompok praktikum kejuruan' },
      { id: 'opt4', text: 'Menghindari perundungan (bullying) dan memperlakukan teman dengan setara tanpa diskriminasi' }
    ],
    correctAnswers: ['opt1', 'opt2', 'opt4'],
    explanation: 'Opt1, opt2, dan opt4 merupakan contoh konkret perilaku demokratis di sekolah (hal 55, 64-66). Opt3 bertentangan dengan demokrasi Pancasila.'
  },
  {
    id: 50,
    type: 'complex_choice',
    topic: 'Perilaku Demokratis Era Informasi',
    subtopic: 'Etika Demokratis di Ruang Digital',
    sourcePageRef: 'Buku Siswa Hal. 57-63',
    cognitiveLevel: 'C5',
    stimulus: 'Pada era keterbukaan informasi, arus pesan dan opini tersebar tanpa batas di media sosial.',
    question: 'Manakah sikap yang mencerminkan etika demokratis Pancasila dalam merespons keterbukaan informasi di dunia maya?',
    options: [
      { id: 'opt1', text: 'Menyampaikan saran dan kritik dengan bahasa yang santun, bernalar kritis, dan berdasar argumen yang jelas' },
      { id: 'opt2', text: 'Melakukan penyaringan informasi (saring sebelum sharing) untuk mencegah penyebaran berita bohong (hoaks)' },
      { id: 'opt3', text: 'Menghormati hak privasi dan tidak melakukan doxxing atau perundungan siber terhadap pihak yang berbeda pandangan' },
      { id: 'opt4', text: 'Membuat narasi ujaran kebencian SARA demi meningkatkan interaksi dan pengikut media sosial' }
    ],
    correctAnswers: ['opt1', 'opt2', 'opt3'],
    explanation: 'Opt1, opt2, dan opt3 mencerminkan etika demokratis Pancasila di era informasi. Opt4 merusak persatuan dan melanggar hukum.'
  },

  // =========================================================================
  // BAGIAN 3: 10 SOAL MENJODOHKAN (MATCHING CONCEPTS & DEFINITIONS)
  // =========================================================================
  {
    id: 51,
    type: 'matching',
    topic: 'Periodisasi Pemberlakuan UUD',
    subtopic: 'Karakteristik Periodisasi Konstitusi',
    sourcePageRef: 'Buku Siswa Hal. 37-45',
    cognitiveLevel: 'C4',
    stimulus: 'Sejak proklamasi kemerdekaan 17 Agustus 1945, Indonesia mengalami pergantian konstitusi tertulis dalam dinamika ketatanegaraannya.',
    question: 'Jodohkanlah periode berlakunya UUD dengan karakteristik utamanya!',
    pairs: [
      { id: 'p1', premise: 'UUD 1945 (18 Ags 1945 - 27 Des 1949)', correctMatchId: 't1' },
      { id: 'p2', premise: 'Konstitusi RIS (27 Des 1949 - 17 Ags 1950)', correctMatchId: 't2' },
      { id: 'p3', premise: 'UUDS 1950 (17 Ags 1950 - 5 Juli 1959)', correctMatchId: 't3' },
      { id: 'p4', premise: 'UUD 1945 Pasca-Dekrit 5 Juli 1959', correctMatchId: 't4' }
    ],
    targets: [
      { id: 't1', text: 'Konstitusi kilat revolusi, terbagi Pembukaan, Batang Tubuh 36 pasal, dan belum ada penjelasan' },
      { id: 't2', text: 'Indonesia berbentuk negara serikat / federasi dengan sistem kabinet parlementer' },
      { id: 't3', text: 'Negara kesatuan dengan sistem parlementer yang mengalami 7 kali pergantian kabinet' },
      { id: 't4', text: 'Diberlakukan kembali melalui dekrit karena kegagalan Dewan Konstituante merumuskan UUD tetap' }
    ],
    explanation: 'Mencocokkan karakteristik empat periode pemberlakuan konstitusi di Indonesia sesuai Bab 2 Buku Siswa.'
  },
  {
    id: 52,
    type: 'matching',
    topic: 'Perubahan UUD NRI Tahun 1945',
    subtopic: 'Tahapan Empat Kali Amandemen (1999-2002)',
    sourcePageRef: 'Buku Siswa Hal. 52-53',
    cognitiveLevel: 'C4',
    stimulus: 'UUD NRI Tahun 1945 mengalami empat kali tahapan amandemen bertahap dalam Sidang MPR.',
    question: 'Pasangkanlah tahapan amandemen dengan materi pokok yang disahkannya!',
    pairs: [
      { id: 'p1', premise: 'Perubahan Pertama (1999)', correctMatchId: 't1' },
      { id: 'p2', premise: 'Perubahan Kedua (2000)', correctMatchId: 't2' },
      { id: 'p3', premise: 'Perubahan Ketiga (2001)', correctMatchId: 't3' },
      { id: 'p4', premise: 'Perubahan Keempat (2002)', correctMatchId: 't4' }
    ],
    targets: [
      { id: 't1', text: 'Pembatasan kekuasaan Presiden (Pasal 7) dan penguatan wewenang legislasi DPR' },
      { id: 't2', text: 'Pengesahan Bab Hak Asasi Manusia (Pasal 28A-28J), Pemda, dan Wilayah Negara' },
      { id: 't3', text: 'Pemilihan Presiden langsung, pembentukan MK, KY, dan Dewan Perwakilan Daerah (DPD)' },
      { id: 't4', text: 'Penghapusan DPA, alokasi anggaran pendidikan 20%, dan aturan peralihan/tambahan' }
    ],
    explanation: 'Sesuai uraian tahap amandemen ke-1 hingga ke-4 pada Buku Siswa hal. 52-53.'
  },
  {
    id: 53,
    type: 'matching',
    topic: 'Pancasila sebagai Ideologi Negara',
    subtopic: 'Tiga Unsur Esensial Ideologi (Koento Wibisono)',
    sourcePageRef: 'Buku Siswa Hal. 23-24',
    cognitiveLevel: 'C4',
    stimulus: 'Koento Wibisono membagi unsur esensial yang termuat di dalam ideologi menjadi tiga aspek pokok.',
    question: 'Hubungkanlah unsur esensial ideologi dengan maknanya yang tepat!',
    pairs: [
      { id: 'p1', premise: 'Keyakinan (Belief)', correctMatchId: 't1' },
      { id: 'p2', premise: 'Mitos (Myth)', correctMatchId: 't2' },
      { id: 'p3', premise: 'Loyalitas (Loyalty)', correctMatchId: 't3' }
    ],
    targets: [
      { id: 't1', text: 'Gagasan vital yang diyakini kebenarannya untuk dijadikan dasar pencapaian tujuan bersama' },
      { id: 't2', text: 'Konsep ajaran yang secara optimis menjamin tercapainya cita-cita melalui cara yang ditentukan' },
      { id: 't3', text: 'Tuntutan keterlibatan optimal dan kesetiaan nyata dari para subjek pendukung ideologi' }
    ],
    explanation: 'Definisi Keyakinan, Mitos, dan Loyalitas menurut Koento Wibisono di halaman 23-24.'
  },
  {
    id: 54,
    type: 'matching',
    topic: 'Keterkaitan Antarsila Pancasila',
    subtopic: 'Hubungan Khas Antarsila',
    sourcePageRef: 'Buku Siswa Hal. 5-7',
    cognitiveLevel: 'C4',
    stimulus: 'Buku Siswa menguraikan hubungan timbal balik yang erat antarsila dalam Pancasila.',
    question: 'Pasangkanlah hubungan antarsila berikut dengan makna esensinya!',
    pairs: [
      { id: 'p1', premise: 'Hubungan Sila ke-1 dan Sila ke-2', correctMatchId: 't1' },
      { id: 'p2', premise: 'Hubungan Sila ke-2 dan Sila ke-3', correctMatchId: 't2' },
      { id: 'p3', premise: 'Hubungan Sila ke-3 dan Sila ke-4', correctMatchId: 't3' },
      { id: 'p4', premise: 'Hubungan Sila ke-4 dan Sila ke-5', correctMatchId: 't4' }
    ],
    targets: [
      { id: 't1', text: 'Keimanan kepada Tuhan diwujudkan dalam welas asih dan penghormatan harkat martabat sesama manusia' },
      { id: 't2', text: 'Keseimbangan antara identitas kebangsaan nasional dan perikemanusiaan universal' },
      { id: 't3', text: 'Persatuan bangsa berpijak pada prinsip kedaulatan rakyat dan kesetaraan hak berserikat' },
      { id: 't4', text: 'Demokrasi politik wajib bermuara pada pemerataan kesejahteraan sosial ekonomi rakyat' }
    ],
    explanation: 'Korelasi sistemik antarsila Pancasila sesuai subbab A Buku Siswa.'
  },
  {
    id: 55,
    type: 'matching',
    topic: 'Makna Sila-Sila Pancasila',
    subtopic: 'Penerapan Praktis Sila 1 - 5',
    sourcePageRef: 'Buku Siswa Hal. 9-16',
    cognitiveLevel: 'C4',
    stimulus: 'Setiap sila memiliki perwujudan konkret dalam kehidupan sehari-hari siswa di sekolah.',
    question: 'Jodohkanlah nomor sila dengan contoh tindakan nyata yang relevan!',
    pairs: [
      { id: 'p1', premise: 'Sila ke-1: Ketuhanan Yang Maha Esa', correctMatchId: 't1' },
      { id: 'p2', premise: 'Sila ke-2: Kemanusiaan Adil & Beradab', correctMatchId: 't2' },
      { id: 'p3', premise: 'Sila ke-3: Persatuan Indonesia', correctMatchId: 't3' },
      { id: 'p4', premise: 'Sila ke-5: Keadilan Sosial', correctMatchId: 't4' }
    ],
    targets: [
      { id: 't1', text: 'Menghormati waktu ibadah teman lain keyakinan tanpa mengganggu kekhusyukannya' },
      { id: 't2', text: 'Melakukan aksi donor darah sukarela dan empati membantu korban perundungan' },
      { id: 't3', text: 'Memakai produk dalam negeri dan menjaga kelestarian lingkungan hidup Nusantara' },
      { id: 't4', text: 'Mendistribusikan bantuan fasilitas belajar bagi siswa kurang mampu secara merata' }
    ],
    explanation: 'Pasangan tindakan nyata dengan sila Pancasila yang mendasarinya.'
  },
  {
    id: 56,
    type: 'matching',
    topic: 'Perilaku Demokratis Era Informasi',
    subtopic: 'Indikator Demokrasi Affan Gaffar',
    sourcePageRef: 'Buku Siswa Hal. 36',
    cognitiveLevel: 'C4',
    stimulus: 'Affan Gaffar menetapkan kriteria empiris untuk mengevaluasi bekerjanya demokrasi di suatu bangsa.',
    question: 'Pasangkanlah indikator demokrasi Affan Gaffar dengan definisinya!',
    pairs: [
      { id: 'p1', premise: 'Akuntabilitas', correctMatchId: 't1' },
      { id: 'p2', premise: 'Rotasi Kekuasaan', correctMatchId: 't2' },
      { id: 'p3', premise: 'Rekrutmen Terbuka', correctMatchId: 't3' },
      { id: 'p4', premise: 'Pemenuhan Hak Dasar', correctMatchId: 't4' }
    ],
    targets: [
      { id: 't1', text: 'Pemegang jabatan wajib mempertanggungjawabkan kebijakan dan perilakunya kepada rakyat' },
      { id: 't2', text: 'Pergantian pemegang kekuasaan dilakukan secara berkala, tertib, damai, dan konstitusional' },
      { id: 't3', text: 'Semua orang memiliki kesempatan yang setara untuk bersaing mengisi kekosongan jabatan publik' },
      { id: 't4', text: 'Warga menikmati kebebasan berpendapat, berserikat, berkumpul, serta pers yang bebas' }
    ],
    explanation: 'Definisi masing-masing indikator demokrasi Affan Gaffar di Buku Siswa hal. 36.'
  },
  {
    id: 57,
    type: 'matching',
    topic: 'Perilaku Demokratis Era Informasi',
    subtopic: 'Kearifan Lokal Musyawarah Desa di Nusantara',
    sourcePageRef: 'Buku Siswa Hal. 34-35',
    cognitiveLevel: 'C4',
    stimulus: 'Mohammad Hatta (1960) menyatakan bahwa demokrasi asli Indonesia berakar dari tradisi musyawarah desa di berbagai daerah Nusantara.',
    question: 'Jodohkan istilah tradisi musyawarah asli berikut dengan daerah asalnya!',
    pairs: [
      { id: 'p1', premise: 'Rembug Desa', correctMatchId: 't1' },
      { id: 'p2', premise: 'Kerapatan Adat Nagari', correctMatchId: 't2' },
      { id: 'p3', premise: 'Riungan', correctMatchId: 't3' },
      { id: 'p4', premise: 'Tudang Sipulung', correctMatchId: 't4' }
    ],
    targets: [
      { id: 't1', text: 'Masyarakat Desa di Jawa' },
      { id: 't2', text: 'Masyarakat Minangkabau di Sumatera Barat' },
      { id: 't3', text: 'Masyarakat Adat di Jawa Barat (Sunda)' },
      { id: 't4', text: 'Masyarakat di Sulawesi Selatan (Bugis/Makassar)' }
    ],
    explanation: 'Uraian Mohammad Hatta mengenai demokrasi asli desa di Nusantara (Buku Siswa hal. 34-35).'
  },
  {
    id: 58,
    type: 'matching',
    topic: 'Perubahan UUD NRI Tahun 1945',
    subtopic: 'Pasal-Pasal Krusial Hasil Amandemen',
    sourcePageRef: 'Buku Siswa Hal. 35, 48, 50, 52',
    cognitiveLevel: 'C5',
    stimulus: 'Amandemen UUD 1945 merevisi dan menyempurnakan pasal-pasal kunci dalam tatanan ketatanegaraan RI.',
    question: 'Pasangkanlah nomor pasal dengan substansi aturan yang ditetapkannya!',
    pairs: [
      { id: 'p1', premise: 'Pasal 1 ayat (2)', correctMatchId: 't1' },
      { id: 'p2', premise: 'Pasal 1 ayat (3)', correctMatchId: 't2' },
      { id: 'p3', premise: 'Pasal 7', correctMatchId: 't3' },
      { id: 'p4', premise: 'Pasal 37 ayat (5)', correctMatchId: 't4' }
    ],
    targets: [
      { id: 't1', text: 'Kedaulatan berada di tangan rakyat dan dilaksanakan menurut Undang-Undang Dasar' },
      { id: 't2', text: 'Negara Indonesia adalah negara hukum (Rechtsstaat / Rule of Law)' },
      { id: 't3', text: 'Presiden dan Wakil Presiden memegang jabatan selama 5 tahun dan sesudahnya dapat dipilih kembali hanya untuk satu kali masa jabatan' },
      { id: 't4', text: 'Khusus mengenai bentuk Negara Kesatuan Republik Indonesia tidak dapat dilakukan perubahan' }
    ],
    explanation: 'Substansi penting pasal-pasal hasil amandemen UUD 1945 pada Buku Siswa.'
  },
  {
    id: 59,
    type: 'matching',
    topic: 'Pancasila dalam Tindakan',
    subtopic: 'Lagu Bertema Garuda dan Pancasila',
    sourcePageRef: 'Buku Siswa Hal. 17-20',
    cognitiveLevel: 'C3',
    stimulus: 'Musik dan lagu menjadi media ekspresi nasionalisme dan penjiwaan Pancasila dalam tindakan.',
    question: 'Jodohkan lagu patriotik berikut dengan pencipta atau musisi pembawanya!',
    pairs: [
      { id: 'p1', premise: 'Garuda di Dadaku', correctMatchId: 't1' },
      { id: 'p2', premise: 'Garuda Pancasila', correctMatchId: 't2' },
      { id: 'p3', premise: 'Lagu "Garuda"', correctMatchId: 't3' }
    ],
    targets: [
      { id: 't1', text: 'Grup Band Netral (nyanyian populer suporter tim nasional)' },
      { id: 't2', text: 'Lagu Nasional ciptaan Prohar Sudharnoto' },
      { id: 't3', text: 'Grup Band Cokelat' }
    ],
    explanation: 'Aktivitas literasi lagu bertema Garuda pada Buku Siswa hal. 17-20.'
  },
  {
    id: 60,
    type: 'matching',
    topic: 'Pancasila sebagai Ideologi Negara',
    subtopic: 'Empat Unsur Terbentuknya Negara (Miriam Budiardjo)',
    sourcePageRef: 'Buku Siswa Hal. 25 & 135',
    cognitiveLevel: 'C4',
    stimulus: 'Dalam Dasar-Dasar Ilmu Politik (2010), Prof. Miriam Budiardjo menguraikan empat unsur penting yang harus dimiliki suatu negara.',
    question: 'Pasangkanlah unsur negara berikut dengan perannya dalam pembentukan negara!',
    pairs: [
      { id: 'p1', premise: 'Wilayah yang memiliki batas', correctMatchId: 't1' },
      { id: 'p2', premise: 'Rakyat atau Penduduk', correctMatchId: 't2' },
      { id: 'p3', premise: 'Pemerintahan yang Berdaulat', correctMatchId: 't3' },
      { id: 'p4', premise: 'Kemampuan Berhubungan Internasional', correctMatchId: 't4' }
    ],
    targets: [
      { id: 't1', text: 'Ruang teritorial darat, laut, dan udara yang sah diakui secara yuridis' },
      { id: 't2', text: 'Sekumpulan manusia yang secara tetap mendiami wilayah suatu negara' },
      { id: 't3', text: 'Organ yang memegang wewenang tertinggi menjalankan tata kelola kehidupan warganya' },
      { id: 't4', text: 'Unsur deklaratif pengakuan kedaulatan dalam menjalin diplomasi antarnegara' }
    ],
    explanation: 'Empat unsur penting negara menurut Miriam Budiardjo di Buku Siswa hal. 25.'
  }
];
