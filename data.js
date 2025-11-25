const waterPoints = [
  { 
    id: 1, 
    name: "شهید فهمیده", 
    schoolType: "دولتی", 
    address: "بلوار صالح آباد", 
    type: "school", 
    lat: 36.006343, 
    lng: 45.881133 
  },
  { 
    id: 2, 
    name: "زنده یادابراهیمی", 
    schoolType: "دولتی", 
    address: "بلوار صالح آباد", 
    type: "school", 
    lat: 36.006264, 
    lng: 45.880943 
  },
  { 
    id: 3, 
    name: "یادگار امام", 
    schoolType: "دولتی", 
    address: "چهارراه شهرک توحید", 
    type: "school", 
    lat: 36.002052, 
    lng: 45.888496 
  },
  { 
    id: 4, 
    name: "آزادی", 
    schoolType: "دولتی", 
    address: "چهارراه شهرک توحید", 
    type: "school", 
    lat: 36.002024, 
    lng: 45.888640 
  },
  { 
    id: 5, 
    name: "زارعی", 
    schoolType: "دولتی", 
    address: "جاده سلیمانیه روبه روی سالن ستاد بحران", 
    type: "school", 
    lat: 35.999675, 
    lng: 45.869586 
  },
  { 
    id: 6, 
    name: "زارعی دختران", 
    schoolType: "دولتی", 
    address: "جاده سلیمانیه روبه روی سالن ستاد بحران", 
    type: "school", 
    lat: 35.999675, 
    lng: 45.869620 
  },
  { 
    id: 7, 
    name: "22 بهمن", 
    schoolType: "دولتی", 
    address: "جنب سپاه", 
    type: "school", 
    lat: 35.994026, 
    lng: 45.887463 
  },
  { 
    id: 8, 
    name: "امام خمینی دوره اول", 
    schoolType: "دولتی", 
    address: "جاده سلیمانیه", 
    type: "school", 
    lat: 35.999677, 
    lng: 45.869298 
  },
  { 
    id: 9, 
    name: "فاطمه زهرا", 
    schoolType: "دولتی", 
    address: "جاده سلیمانیه", 
    type: "school", 
    lat: 35.999703, 
    lng: 45.869398 
  },
  { 
    id: 10, 
    name: "حاج عبداله نویدی 1", 
    schoolType: "دولتی", 
    address: "روبروی مسجد نویدی", 
    type: "school", 
    lat: 35.997469, 
    lng: 45.879103 
  },
  { 
    id: 11, 
    name: "حاج عبداله نویدی 2", 
    schoolType: "دولتی", 
    address: "روبروی مسجد نویدی", 
    type: "school", 
    lat: 35.997460, 
    lng: 45.879125 
  },
  { 
    id: 12, 
    name: "شهید مطهری 1", 
    schoolType: "دولتی", 
    address: "خیابان تالار چوپی", 
    type: "school", 
    lat: 35.992215, 
    lng: 45.876338 
  },
  { 
    id: 13, 
    name: "شهید مطهری 2", 
    schoolType: "دولتی", 
    address: "خیابان تالار چوپی", 
    type: "school", 
    lat: 35.992215, 
    lng: 45.876371 
  },
  { 
    id: 14, 
    name: "سینا", 
    schoolType: "دولتی", 
    address: "روبروی آپارتمان دوزین", 
    type: "school", 
    lat: 36.003835, 
    lng: 45.878997 
  },
  { 
    id: 15, 
    name: "سید جمال", 
    schoolType: "دولتی", 
    address: "خیابان سونا مبین", 
    type: "school", 
    lat: 35.993342, 
    lng: 45.882419 
  },
  { 
    id: 16, 
    name: "اندیشه نو", 
    schoolType: "دولتی", 
    address: "پایین‌تر از سه‌راهی بویین", 
    type: "school", 
    lat: 35.985420, 
    lng: 45.899137 
  },
  { 
    id: 17, 
    name: "شهید نمکی پسران", 
    schoolType: "دولتی", 
    address: "روبروی فرمانداری", 
    type: "school", 
    lat: 35.985153, 
    lng: 45.886477 
  },
  { 
    id: 18, 
    name: "شهید نمکی دختران", 
    schoolType: "دولتی", 
    address: "روبروی فرمانداری", 
    type: "school", 
    lat: 35.985135, 
    lng: 45.886499 
  },
  { 
    id: 19, 
    name: "داورپناه دخترانه", 
    schoolType: "دولتی", 
    address: "شهرک نور", 
    type: "school", 
    lat: 35.984282, 
    lng: 45.904193 
  },
  { 
    id: 20, 
    name: "داورپناه پسرانه", 
    schoolType: "دولتی", 
    address: "شهرک نور", 
    type: "school", 
    lat: 35.984264, 
    lng: 45.904160 
  },
  { 
    id: 21, 
    name: "فتحیان", 
    schoolType: "دولتی", 
    address: "خیابان سیدجمال", 
    type: "school", 
    lat: 35.991783, 
    lng: 45.896935 
  },
  { 
    id: 22, 
    name: "دکتر حسابی", 
    schoolType: "دولتی", 
    address: "خیابان سیدجمال", 
    type: "school", 
    lat: 35.991774, 
    lng: 45.896946 
  },
  { 
    id: 23, 
    name: "خندانی", 
    schoolType: "دولتی", 
    address: "پشت اداره آب", 
    type: "school", 
    lat: 35.982958, 
    lng: 45.895592 
  },
  { 
    id: 24, 
    name: "پیرمراد", 
    schoolType: "دولتی", 
    address: "پشت اداره آب", 
    type: "school", 
    lat: 35.982922, 
    lng: 45.895592 
  },
  { 
    id: 25, 
    name: "حافظ", 
    schoolType: "دولتی", 
    address: "کوی فرهنگیان", 
    type: "school", 
    lat: 35.997301, 
    lng: 45.894445 
  },
  { 
    id: 26, 
    name: "عظیمه خاکی", 
    schoolType: "دولتی", 
    address: "کوی فرهنگیان", 
    type: "school", 
    lat: 35.997283, 
    lng: 45.894467 
  },
  { 
    id: 27, 
    name: "شهید فتح‌آبادی", 
    schoolType: "دولتی", 
    address: "خیابان فرمانداری", 
    type: "school", 
    lat: 35.986044, 
    lng: 45.884312 
  },
  { 
    id: 28, 
    name: "خلفای‌راشدین پسرانه", 
    schoolType: "دولتی", 
    address: "محله دمامه", 
    type: "school", 
    lat: 35.979511, 
    lng: 45.913933 
  },
  { 
    id: 29, 
    name: "خلفای‌راشدین‌دخترانه", 
    schoolType: "دولتی", 
    address: "محله دمامه", 
    type: "school", 
    lat: 35.979502, 
    lng: 45.913944 
  },
  { 
    id: 30, 
    name: "ابتدایی شهید لطفی", 
    schoolType: "دولتی", 
    address: "پایین‌تر از سه راهی بویین", 
    type: "school", 
    lat: 35.984904, 
    lng: 45.899397 
  },
  { 
    id: 31, 
    name: "پروین", 
    schoolType: "دولتی", 
    address: "پایین‌تر از سه راهی بویین", 
    type: "school", 
    lat: 35.984886, 
    lng: 45.899408 
  },
  { 
    id: 32, 
    name: "آمنه خدری پسرانه", 
    schoolType: "دولتی", 
    address: "جاده احمدآباد", 
    type: "school", 
    lat: 35.998470, 
    lng: 45.903334 
  },
  { 
    id: 33, 
    name: "آمنه خدری دخترانه", 
    schoolType: "دولتی", 
    address: "جاده احمدآباد", 
    type: "school", 
    lat: 35.998487, 
    lng: 45.903390 
  },
  { 
    id: 34, 
    name: "مطهری پسرانه دوره دوم", 
    schoolType: "دولتی", 
    address: "روبروی تولیدی کاوه", 
    type: "school", 
    lat: 35.992565, 
    lng: 45.876564 
  },
  { 
    id: 35, 
    name: "شهید بهشتی", 
    schoolType: "دولتی", 
    address: "روبروی کتابخانه عمومی", 
    type: "school", 
    lat: 35.987955, 
    lng: 45.895261 
  },
  { 
    id: 36, 
    name: "دبستان مهربان", 
    schoolType: "دولتی", 
    address: "پایین‌تر از میدان ساعت", 
    type: "school", 
    lat: 35.991609, 
    lng: 45.883964 
  },
  { 
    id: 37, 
    name: "آمنه فتاح‌زاده", 
    schoolType: "دولتی", 
    address: "جاده بلوار مخلص", 
    type: "school", 
    lat: 36.004710, 
    lng: 45.861442 
  },
  { 
    id: 38, 
    name: "حاج‌رحیم محمدی", 
    schoolType: "دولتی", 
    address: "جاده بلوار مخلص", 
    type: "school", 
    lat: 36.004729, 
    lng: 45.861387 
  },
  { 
    id: 39, 
    name: "شهید ظاهر بهاری", 
    schoolType: "دولتی", 
    address: "پشت اداره اوقاف", 
    type: "school", 
    lat: 35.988451, 
    lng: 45.896509 
  },
  { 
    id: 40, 
    name: "راهنمایی احمدی 2", 
    schoolType: "دولتی", 
    address: "پایین ترازپیرمراد", 
    type: "school", 
    lat: 35.980525, 
    lng: 45.900290 
  },
  { 
    id: 41, 
    name: "راهنمایی احمدی 2", 
    schoolType: "دولتی", 
    address: "پایین ترازپیرمراد", 
    type: "school", 
    lat: 35.980525, 
    lng: 45.900257 
  },
  { 
    id: 42, 
    name: "راهنمایی کوچک‌خان", 
    schoolType: "دولتی", 
    address: "روبروی آپارتمان دوزین", 
    type: "school", 
    lat: 36.003356, 
    lng: 45.879069 
  },
  { 
    id: 43, 
    name: "دبیرستان صدوقی", 
    schoolType: "دولتی", 
    address: "روبروی آپارتمان دوزین", 
    type: "school", 
    lat: 36.003356, 
    lng: 45.879113 
  },
  { 
    id: 44, 
    name: "راهنمایی شهیدرجایی", 
    schoolType: "دولتی", 
    address: "کوی فرهنگیان", 
    type: "school", 
    lat: 36.001075, 
    lng: 45.896174 
  },
  { 
    id: 45, 
    name: "راهنمایی شهیدخادمی", 
    schoolType: "دولتی", 
    address: "کوی فرهنگیان", 
    type: "school", 
    lat: 36.001066, 
    lng: 45.896208 
  },
  { 
    id: 46, 
    name: "راهنمایی کمالی", 
    schoolType: "دولتی", 
    address: "روبروی ثبت‌احوال", 
    type: "school", 
    lat: 35.987046, 
    lng: 45.882904 
  },
  { 
    id: 47, 
    name: "دبیرستان‌کاوه‌محمدی", 
    schoolType: "دولتی", 
    address: "روبروی ثبت‌احوال", 
    type: "school", 
    lat: 35.987019, 
    lng: 45.882914 
  },
  { 
    id: 48, 
    name: "راهنمایی زانیاران", 
    schoolType: "دولتی", 
    address: "پشت پاساپ بهشت", 
    type: "school", 
    lat: 35.999148, 
    lng: 45.883715 
  },
  { 
    id: 49, 
    name: "راهنمایی شهیدلطفی", 
    schoolType: "دولتی", 
    address: "روبروی راهنمایی و رانندگی", 
    type: "school", 
    lat: 35.986866, 
    lng: 45.886562 
  },
  { 
    id: 50, 
    name: "راهنمایی برهانی 1", 
    schoolType: "دولتی", 
    address: "جاده سلیمانیه", 
    type: "school", 
    lat: 35.999062, 
    lng: 45.869613 
  },
  { 
    id: 51, 
    name: "راهنمایی شهدای هسته‌ای", 
    schoolType: "دولتی", 
    address: "جاده سلیمانیه", 
    type: "school", 
    lat: 35.999071, 
    lng: 45.869635 
  },
  { 
    id: 52, 
    name: "راهنمایی حسن‌نژاد", 
    schoolType: "دولتی", 
    address: "پایین‌تر از سه‌راهی بویین", 
    type: "school", 
    lat: 35.985096, 
    lng: 45.899000 
  },
  { 
    id: 53, 
    name: "راهنمایی فضیلت", 
    schoolType: "دولتی", 
    address: "پایین‌تر از پارک مانی گلشهر", 
    type: "school", 
    lat: 35.998741, 
    lng: 45.872849 
  },
  { 
    id: 54, 
    name: "ابتدایی تزکیه", 
    schoolType: "دولتی", 
    address: "پایین‌تر از پارک مانی گلشهر", 
    type: "school", 
    lat: 35.997292, 
    lng: 45.872500 
  },
  { 
    id: 55, 
    name: "شهدای قادرخان زاده دختر", 
    schoolType: "دولتی", 
    address: "پشت اداره آب", 
    type: "school", 
    lat: 35.982758, 
    lng: 45.894658 
  },
  { 
    id: 56, 
    name: "راهنمایی دخترانه فردوس", 
    schoolType: "دولتی", 
    address: "بلوار حمزه‌آباد", 
    type: "school", 
    lat: 36.003252, 
    lng: 45.885903 
  },
  { 
    id: 57, 
    name: "دخترانه پردیس راهنمایی", 
    schoolType: "دولتی", 
    address: "بلوار حمزه‌آباد", 
    type: "school", 
    lat: 36.003243, 
    lng: 45.885925 
  },
  { 
    id: 58, 
    name: "زانست متوسطه اول", 
    schoolType: "دولتی", 
    address: "روبرو اداره کار", 
    type: "school", 
    lat: 35.992614, 
    lng: 45.874823 
  },
  { 
    id: 59, 
    name: "راهنمایی پسرانه باهنر", 
    schoolType: "دولتی", 
    address: "روبرو اداره کار", 
    type: "school", 
    lat: 35.992623, 
    lng: 45.874834 
  },
  { 
    id: 60, 
    name: "راهنمایی دستغیب", 
    schoolType: "دولتی", 
    address: "روبروی پمپ بنزین توکلی", 
    type: "school", 
    lat: 35.993350, 
    lng: 45.877638 
  },
  { 
    id: 61, 
    name: "ابتدایی شاه حسینی", 
    schoolType: "دولتی", 
    address: "روبروی پمپ بنزین توکلی", 
    type: "school", 
    lat: 35.993342, 
    lng: 45.877615 
  },
  { 
    id: 62, 
    name: "دخترانه سهام خیام", 
    schoolType: "دولتی", 
    address: "شهرک توحید", 
    type: "school", 
    lat: 36.002091, 
    lng: 45.889329 
  },
  { 
    id: 63, 
    name: "دبیرستان علی‌محمدی", 
    schoolType: "دولتی", 
    address: "شهرک توحید", 
    type: "school", 
    lat: 36.002082, 
    lng: 45.889285 
  },
  { 
    id: 64, 
    name: "دبیرستان رودباری", 
    schoolType: "دولتی", 
    address: "روبروی آموزش و پرورش", 
    type: "school", 
    lat: 35.989019, 
    lng: 45.892876 
  },
  { 
    id: 65, 
    name: "راهنمایی عفت", 
    schoolType: "دولتی", 
    address: "روبروی آموزش و پرورش", 
    type: "school", 
    lat: 35.989009, 
    lng: 45.892898 
  },
  { 
    id: 66, 
    name: "تیزهوشان پسران بهشتی", 
    schoolType: "دولتی", 
    address: "روبروی بیمارستان صلاح الدین ایوبی", 
    type: "school", 
    lat: 35.989176, 
    lng: 45.886278 
  },
  { 
    id: 67, 
    name: "تیزهوشان دختران", 
    schoolType: "دولتی", 
    address: "کمربندی یک پشت اداره آب و فاضلاب", 
    type: "school", 
    lat: 35.982828, 
    lng: 45.894925 
  },
  { 
    id: 68, 
    name: "دبیرستان زانست", 
    schoolType: "دولتی", 
    address: "سه‌راه بویین بالاتر از مدرسه تربیت", 
    type: "school", 
    lat: 35.995475, 
    lng: 45.901214 
  },
  { 
    id: 69, 
    name: "دبیرستان شهیدنصرالهی", 
    schoolType: "دولتی", 
    address: "بلوار سلیمان‌بگ", 
    type: "school", 
    lat: 35.992544, 
    lng: 45.874489 
  },
  { 
    id: 70, 
    name: "نمونه دولتی نیایش", 
    schoolType: "دولتی", 
    address: "خیابان کمربندی پشت مسجد رسالت", 
    type: "school", 
    lat: 35.984335, 
    lng: 45.889873 
  },
  { 
    id: 71, 
    name: "هنرستان اسوه", 
    schoolType: "دولتی", 
    address: "روبروی بیمارستان صلاح‌الدین ایوبی", 
    type: "school", 
    lat: 35.987264, 
    lng: 45.886301 
  },
  { 
    id: 72, 
    name: "هنرستان علم وصنعت", 
    schoolType: "دولتی", 
    address: "سه‌راه بویین بالاتر از مدرسه تربیت", 
    type: "school", 
    lat: 35.980865, 
    lng: 45.899451 
  },
  { 
    id: 73, 
    name: "کاردانش آینده سازان", 
    schoolType: "دولتی", 
    address: "کمربندی 1 بالاتر از ثبت احوال", 
    type: "school", 
    lat: 35.987239, 
    lng: 45.883649 
  },
  { 
    id: 74, 
    name: "هنرستان دخترانه پویندگان", 
    schoolType: "دولتی", 
    address: "خیابان امام غزالی پایین‌تر از اداره راه", 
    type: "school", 
    lat: 35.986969, 
    lng: 45.893364 
  },
  { 
    id: 75, 
    name: "هنرستان سلیمان‌خاطر", 
    schoolType: "دولتی", 
    address: "گلشهر پایین‌تر از چهارراه", 
    type: "school", 
    lat: 35.998268, 
    lng: 45.875917 
  },
  { 
    id: 76, 
    name: "هنرستان دخترانه راه روشن", 
    schoolType: "دولتی", 
    address: "کمربندی 1", 
    type: "school", 
    lat: 35.984621, 
    lng: 45.887735 
  },
  { 
    id: 77, 
    name: "دبیرستان ملا محمود محمدی", 
    schoolType: "دولتی", 
    address: "گلشهر", 
    type: "school", 
    lat: 35.998690, 
    lng: 45.872382 
  },
  { 
    id: 78, 
    name: "دبیرستان دخترانه شبلی", 
    schoolType: "دولتی", 
    address: "خیابان امام غزالی روبروی اداره راه", 
    type: "school", 
    lat: 35.985978, 
    lng: 45.894362 
  },
  { 
    id: 79, 
    name: "استثنایی تربیت(مختلط)", 
    schoolType: "دولتی", 
    address: "خیابان پیرمراد", 
    type: "school", 
    lat: 35.981337, 
    lng: 45.900122 
  },
  { 
    id: 80, 
    name: "نادری دختران", 
    schoolType: "دولتی", 
    address: "کوپیچ پیام نور", 
    type: "school", 
    lat: 36.012807, 
    lng: 45.862673 
  },
  { 
    id: 81, 
    name: "نادری پسران", 
    schoolType: "دولتی", 
    address: "کوپیچ پیام نور", 
    type: "school", 
    lat: 36.012798, 
    lng: 45.862640 
  },
  { 
    id: 82, 
    name: "فلاحی پسران", 
    schoolType: "دولتی", 
    address: "بلوارترخان آباد", 
    type: "school", 
    lat: 35.989651, 
    lng: 45.907150 
  },
  { 
    id: 83, 
    name: "فلاحی پسران", 
    schoolType: "دولتی", 
    address: "بلوارترخان آباد", 
    type: "school", 
    lat: 35.989651, 
    lng: 45.907172 
  },
  { 
    id: 84, 
    name: "بنی رزان", 
    schoolType: "دولتی", 
    address: "مدرسه ابتدایی", 
    type: "school", 
    lat: 36.002632, 
    lng: 45.855783 
  },
  { 
    id: 85, 
    name: "بنی رزان", 
    schoolType: "دولتی", 
    address: "متوسطه اول", 
    type: "school", 
    lat: 36.000548, 
    lng: 45.852265 
  },
  { 
    id: 86, 
    name: "خوابگاه حضرت رسول", 
    schoolType: "دولتی", 
    address: "", 
    type: "school", 
    lat: 35.985687, 
    lng: 45.898408 
  },
  { 
    id: 87, 
    name: "دخترانه فرهنگ", 
    schoolType: "غیرانتفاعی", 
    address: "بلوار هیمن جنب سنگک پزی کوچه درنا 27", 
    type: "school", 
    lat: 36.002893, 
    lng: 45.883269 
  },
  { 
    id: 88, 
    name: "نگین دانش", 
    schoolType: "غیرانتفاعی", 
    address: "استان کردستان-شهرستان بانه-میدان مادر پشت تعویض پلاک مدرسه غیر دولتی نگین دانش    کدپستی: 6691884145", 
    type: "school", 
    lat: 35.995904, 
    lng: 45.874926 
  },
  { 
    id: 89, 
    name: "دانشمندکوچک", 
    schoolType: "غیرانتفاعی", 
    address: "استان کردستان-شهرستان بانه-بلوارمرزبانان-ورودی شهرک نور-نبش کوچه برزین7-کدپستی:81146-66916", 
    type: "school", 
    lat: 35.985870, 
    lng: 45.902780 
  },
  { 
    id: 90, 
    name: "رویش", 
    schoolType: "غیرانتفاعی", 
    address: "بلوار مرزبانان،انتهای خیابان سپیده،دبستان غیردولتی رویش", 
    type: "school", 
    lat: 35.993914, 
    lng: 45.907365 
  },
  { 
    id: 91, 
    name: "راهیان کوثر", 
    schoolType: "غیرانتفاعی", 
    address: "بانه-بلوارشهید قاسم سلیمانی -جنب شرکت گازرسانی", 
    type: "school", 
    lat: 35.998487, 
    lng: 45.888978 
  },
  { 
    id: 92, 
    name: "مهر ماندگار", 
    schoolType: "غیرانتفاعی", 
    address: "خیابان کمربندی1روبه روی فرمانداری کوچه پشت مدرسه نمکی.دبستان غیردولتی مهرماندگار", 
    type: "school", 
    lat: 35.985085, 
    lng: 45.886021 
  },
  { 
    id: 93, 
    name: "ناصح", 
    schoolType: "غیرانتفاعی", 
    address: "شهرک فرهنگیان کوچه ژیار 10 - 6691693714", 
    type: "school", 
    lat: 35.981685, 
    lng: 45.907846 
  },
  { 
    id: 94, 
    name: "هه تاو", 
    schoolType: "غیرانتفاعی", 
    address: "بانه جهار راه جاده سلیمانیه شهرک معلم - کوجه بهره 1 تلفن 08734224824", 
    type: "school", 
    lat: 35.999605, 
    lng: 45.865547 
  },
  { 
    id: 95, 
    name: "بیرسان", 
    schoolType: "غیرانتفاعی", 
    address: "استان کردستان/بانه/بلوار ورزش ابتدای بلوار هیمن کوچه بیان12", 
    type: "school", 
    lat: 36.001457, 
    lng: 45.884751 
  },
  { 
    id: 96, 
    name: "ژینار", 
    schoolType: "غیرانتفاعی", 
    address: "بانه میدان جهاد کوچه پزشکی قانونی پلاک 25 - کدپستی 6691914782", 
    type: "school", 
    lat: 35.996575, 
    lng: 45.886682 
  },
  { 
    id: 97, 
    name: "راهیان کوثر", 
    schoolType: "غیرانتفاعی", 
    address: "بانه-بلوارشهید قاسم سلیمانی -جنب شرکت گازرسانی", 
    type: "school", 
    lat: 35.998478, 
    lng: 45.889022 
  },
  { 
    id: 98, 
    name: "فرهنگ", 
    schoolType: "غیرانتفاعی", 
    address: "شهرک بهاران جنب پارک کتاب", 
    type: "school", 
    lat: 36.000392, 
    lng: 45.865156 
  },
  { 
    id: 99, 
    name: "متفکران جوان", 
    schoolType: "غیرانتفاعی", 
    address: "بلوار سردشت - سایت اداری صنعتگران", 
    type: "school", 
    lat: 36.008744, 
    lng: 45.865902 
  },
  { 
    id: 100, 
    name: "رویش", 
    schoolType: "غیرانتفاعی", 
    address: "بلوار مرزبانان انتهای خیابان سپیده", 
    type: "school", 
    lat: 35.993905, 
    lng: 45.907298 
  },
  { 
    id: 101, 
    name: "متفکران جوان", 
    schoolType: "غیرانتفاعی", 
    address: "بلوار سردشته سایت اداری شهرک صنعتگران", 
    type: "school", 
    lat: 36.008717, 
    lng: 45.865946 
  },
  { 
    id: 102, 
    name: "هیمن", 
    schoolType: "غیرانتفاعی", 
    address: "بانه  - خ امام - پشت مسجد سید - کوچه چیمن 8 - دبیرستان پسرانه غیردولتی ماموستا هیمن تلفن 08734265900", 
    type: "school", 
    lat: 35.990119, 
    lng: 45.892767 
  }
];