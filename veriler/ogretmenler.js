const DERSLER = [
    "DİN KÜLTÜRÜ VE AHLAK BİLGİSİ - SÜMEYYE ULU",
    "TARİH - FERHAN DURGUN",
    "FİZİK - NURCAN KÖSEOĞLU",
    "MATEMATİK - HÜLYA AKYAZI DEMİRDAĞ",
    "MESLEKİ GELİŞİM - FİSUN ELMAS",
    "İNGİLİZCE - PINAR KARACAR",
    "COĞRAFYA - HÜSAMETTİN ERTÜRK",
    "MATEMATİK - MİNE KAYA SEL",
    "KİMYA - NERGİZ ERDİM",
    "MESLEKİ GELİŞİM - BÜŞRA NUR KOÇAK",
    "TARİH - HALİL HATİPOĞLU",
    "MESLEKİ GELİŞİM - ERDEM TEMEL",
    "İNGİLİZCE - MİRAY GÜNEY",
    "TÜRK DİLİ VE EDEBİYATI - TUĞÇE GÜVEN",
    "MESLEKİ GELİŞİM - MÜŞRA SEVİNÇ",
    "MATEMATİK - KUBİLAY ORHAN GÜNATA",
    "TÜRK DİLİ VE EDEBİYATI - MACİDE MELTEM DOĞRAMACI",
    "TÜRK DİLİ VE EDEBİYATI - KEVSER DUR",
    "SERVİS HAZIRLIKLARI - LALE ÖLMEZ",
    "FELSEFE - ZAKİR ÜNGÖR",
    "MESLEKİ İNGİLİZCE - MİRAY GÜNEY",
    "TARİH - BEDRİ GÜLSEN",
    "BİYOLOJİ - ERDOĞAN AVCI",
    "GIDA MİKROBİYOLOJİSİ - MERVE GEÇER",
    "GIDA KİMYASI - BÜŞRA NUR KOÇAK",
    "TEMEL YİYECEK ÜRETİMİ - LALE ÖLMEZ",
    "YEMEK GRUPLARININ SERVİSİ - ESRA ÇAYDAŞ ATİK",
    "BESLENME - BÜŞRA NUR KOÇAK",
    "ÖZEL GIDALAR - BÜŞRA NUR KOÇAK",
    "GIDA ÜRETİM TEKNOLOJİLERİ - BÜŞRA NUR KOÇAK",
    "DİN KÜLTÜRÜ VE AHLAK BİLGİSİ - FERHAN DURGUN",
    "TÜRK DÜNYASI TARİHİ - HALİL HATİPOĞLU"
]

const ogretmenler = [];
DERSLER.forEach((v,i)=>{
  ogretmenler.push({id:i+1,isim:v})
})
