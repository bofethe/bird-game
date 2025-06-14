const birds = [
    {
    name: "American Avocet",
    order: "charadriiformes",
    family: "Recurvirostridae",
    image: "assets/images/amav.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/IERLEVXEIF/XC587206-American-Avocet-BearRiverMBR-CR.mp3"
  },
    {
    name: "American Bittern",
    order: "pelecaniformes",
    family: "Ardeidae",
    image: "assets/images/ambi.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/SFRRHMLGSK/XC601776-American%20Bittern.mp3"
  },
    {
    name: "American Coot",
    order: "gruiformes",
    family: "Rallidae",
    image: "assets/images/amco.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/KZYUWIRZVH/XC936989-COOT_American_c-SBNWR-1100m-022324-1203.mp3"
  },
    {
    name: "American Crow",
    order: "passeriformes",
    family: "Corvidae",
    image: "assets/images/amcr.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/GVVNEJJEGA/XC524205-AMCR_2019-01-30_Darma%20Zen%20Rain%20Center_NE_Portland_OR_1034.mp3"
  },
    {
    name: "American Goldfinch",
    order: "passeriformes",
    family: "Fringillidae",
    images: {
      male_br: "assets/images/amgo-br-m.jpeg",
      male_nb: "assets/images/amgo-nb-m.jpeg",
      female_br: "assets/images/amgo-br-f.jpeg",
    },
    audio: "https://xeno-canto.org/sounds/uploaded/HRVQAOEHRR/XC958112-American-Goldfinch-5-8-22-Toronto.mp3"
  },
    {
    name: "American Kestrel",
    order: "falconiformes",
    family: "Falconidae",
    images: {
      female: "assets/images/amke-f.jpeg",
      male: "assets/images/amke-m.jpeg"
    },
    audio: "https://xeno-canto.org/sounds/uploaded/VJARXMSBTG/XC994755-Cr%C3%A9cerelle_Am%C3%A9rique_250418_2_Cuba.mp3"
  },
    {
    name: "American Oystercatcher",
    order: "charadriiformes",
    family: "Haematopodidae",
    image: "assets/images/amoy.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/IHJAQKCKWM/XC871345-pilpilen.mp3"
  },
    {
    name: "American Redstart",
    order: "passeriformes",
    family: "Parulidae",
    images: {
      male: "assets/images/amre-m.jpeg",
      female: "assets/images/amre-f.jpeg"
    },
    audio: "https://xeno-canto.org/sounds/uploaded/ISEVSYKZZW/XC839849-Paruline-flamboyante---Rondeau---22-05-2023.mp3"
  },
    {
    name: "American Robin",
    order: "passeriformes",
    family: "Turdidae",
    image: "assets/images/amro.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/EMFMDDVOUG/XC959619-210411-002-AMRO-Dromre-S-trail-Rate-2-hrs-0607.mp3"
  },
  {
    name: "American Wigeon",
    order: "anseriformes",
    family: "Anatidae",
    images: {
      male: "assets/images/amwi-m.jpeg",
      female: "assets/images/amwi-f.jpeg"
    },
    audio: "https://xeno-canto.org/sounds/uploaded/EKKJJJRDJY/AMWI-UpNewportBayCA-1-7-2008a.mp3"
  },
  {
    name: "American Woodcock",
    order: "charadriiformes",
    family: "Scolopacidae",
    image: "assets/images/amwo.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/RCTJJHSQGO/XC805469-546247091.mp3"
  },
  {
    name: "Anhinga",
    order: "pelecaniformes",
    family: "Anhingidae",
    images: {
      male: "assets/images/anhi-m.jpeg",
      female: "assets/images/anhi-f.jpeg"
    },
    audio: 'https://xeno-canto.org/sounds/uploaded/FSCGENVPXK/XC705559-ANHINGA%20Big%20Cypress%20NR%20FL%202.19pm%20%2002272022%20.mp3'
  },
  {
    name: "American White Pelican",
    order: "pelecaniformes",
    family: "Pelecanidae",
    image: "assets/images/awpe.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/CDTGHVBGZP/AWPE2009-6-27-1.mp3"
  },
  {
    name: "Bachman's Sparrow",
    order: "passeriformes",
    family: "Passerellidae",
    image: "assets/images/bacs.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/ESGJLNIGDA/XC877049-BACS2_ArchboldFL_03-21-2022.mp3"
  },
  {
    name: "Bald Eagle",
    order: "accipitriformes",
    family: "Accipitridae",
    image: "assets/images/baea.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/LRBJKOMLDW/XC893195-BAEA_20231222_Avon,CT.mp3"
  },
  {
    name: "Baltimore Oriole",
    order: "passeriformes",
    family: "Icteridae",
    images: {
      male: "assets/images/baor-m.jpeg",
      female: "assets/images/baor-f.jpeg"
    },
    audio: "https://xeno-canto.org/sounds/uploaded/KZYUWIRZVH/XC818927-ORIOLE_Baltimore-Tawas-Point-SP-200m-051723-0641.mp3"
  },
  {
    name: "Barn Swallow",
    order: "passeriformes",
    family: "Hirundinidae",
    image: "assets/images/bars.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/PRVFBYIQYZ/XC988212-hirundo-rustica-1-cortijo-grande-24-03-2025.mp3"
  },
  {
    name: "Black-and-white Warbler",
    order: "passeriformes",
    family: "Parulidae",
    image: "assets/images/baww.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/RCTJJHSQGO/XC805472-572539351.mp3"
  },
  {
    name: "Black-bellied Plover",
    order: "charadriiformes",
    family: "Charadriidae",
    images: {
      male: "assets/images/bbpl-m.jpeg",
      juvenile: "assets/images/bbpl-j.jpeg"
    },
    audio: "https://xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC938194-Thu-Oct-03-2024-18_27_12-Pluvier-argent%C3%A9-%2B.mp3"
  },
  {
    name: "Black-bellied Whistling-Duck",
    order: "anseriformes",
    family: "Anatidae",
    image: "assets/images/bbwd.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/UAXIKEBHEA/XC982939-631982068.mp3"
  },
  {
    name: "Black-crowned Night-Heron",
    order: "pelecaniformes",
    family: "Ardeidae",
    image: "assets/images/bcnh.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/YNOAMCSSHX/XC995929-Black-crowned-Night-Heron-%E5%A4%9C%E9%B9%AD-call---%E6%B7%B1%E5%9C%B3%E7%BA%A2%E6%A0%91%E6%9E%97%E5%85%AC%E5%9B%AD-%E5%B0%8F%E9%94%85-%2BJS4006%E5%8D%95%E9%BA%A6-250204_0637----A.mp3"
  },
  {
    name: "Barred Owl",
    order: "strigiformes",
    family: "Strigidae",
    image: "assets/images/bdow.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/CQVHGWMGMC/XC1002439-BARO052825.mp3"
  },
  {
    name: "Belted Kingfisher",
    order: "coraciiformes",
    family: "Alcedinidae",
    image: "assets/images/beki.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/MGVGHKBMIZ/XC600420-Kingfisher3.mp3"
  },
  {
    name: "Blue-gray Gnatcatcher",
    order: "passeriformes",
    family: "Polioptilidae",
    image: "assets/images/bggn.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/ILUHRFXDNU/XC943705-BLUE-GRAY-GNATCATCHER-CALLS-HUAYAPAM-OCT-22-914-DR0000_2388.mp3"
  },
  {
    name: "Brown-headed Cowbird",
    order: "passeriformes",
    family: "Icteridae",
    images: {
      female: "assets/images/bhco-f.jpeg",
      male: "assets/images/bhco-m.jpeg"
    },
    audio: "https://xeno-canto.org/sounds/uploaded/ZQJCLMBULK/XC999447-250518-074641-BHCO.mp3"
  },
  {
    name: "Brown-headed Nuthatch",
    order: "passeriformes",
    family: "Sittidae",
    image: "assets/images/bhnu.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/LOAVJDRPYN/XC726413-Brown-headed%20Nuthatch%20-%2020220514-062947%20-%20Longleaf%20Flatwoods%20Reserve%2C%20FL.mp3"
  },
  {
    name: "Blue-headed Vireo",
    order: "passeriformes",
    family: "Vireonidae",
    image: "assets/images/bhvi.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/GVVNEJJEGA/XC933588-BHVI_EATO_2024-05-13_GWNF_Emerald_Pond_Page_County_VA_1034(2).mp3"
  },
  {
    name: "Blue Jay",
    order: "passeriformes",
    family: "Corvidae",
    image: "assets/images/blja.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/YHKQPPJDVP/XC899923-240421_2212BLJA-10m-mp3-amp.mp3"
  },
  {
    name: "Black Rail",
    order: "gruiformes",
    family: "Rallidae",
    image: "assets/images/blra.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/PVQOLRXXWL/XC419186-Black%20Rail%201%20on%206.6.18%20st%20Lower%20Latham%20Weld%20CO%2020.45%20for%20.09_0938.mp3"
  },
  {
    name: "Black Scoter",
    order: "anseriformes",
    family: "Anatidae",
    images: {
      male: "assets/images/blsc-m.jpeg",
      female: "assets/images/blsc-f.jpeg"
    },
    audio: "https://xeno-canto.org/sounds/uploaded/WOPIRNCCSX/XC297399-Escoumins-2015-05-16-07h08%20LS115295.mp3"
  },
  {
    name: "Black Skimmer",
    order: "charadriiformes",
    family: "Laridae",
    image: "assets/images/blsk.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/ILUHRFXDNU/XC573993-Black%20Skimmer%20flight%20call%20topo%20july%205%20651_0589.mp3"
  },
  {
    name: "Black Tern",
    order: "charadriiformes",
    family: "Laridae",
    image: "assets/images/blte-nb.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/TLORJJUZZT/XC918508-Guifette-noire-A-alarm-call-flight-call-20240704_0730-Marais-de-Fouras.mp3"
  },
  {
    name: "Black Vulture",
    order: "accipitriformes",
    family: "Cathartidae",
    image: "assets/images/blvu.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/TGBFXDVERJ/XC327288-Coragyps%20atratus__Oriximina_1285.mp3"
  },
  {
    name: "Barn Owl",
    order: "strigiformes",
    family: "Tytonidae",
    image: "assets/images/bnow.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/SEVIQQAKWM/XC696742-ZOOM0004_Tr1%20-%20Lechuza%20-%20Flight%20Calls.mp3"
  },
  {
    name: "Black-necked Stilt",
    order: "charadriiformes",
    family: "Recurvirostridae",
    image: "assets/images/bnst.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/QNQOLYYZEB/XC943161-H.-mexicanus-ZOOM0030.mp3"
  },
  {
    name: "Bobolink",
    order: "passeriformes",
    family: "Icteridae",
    images:{
      male: "assets/images/bobo-m.jpeg",
      female: "assets/images/bobo-f.jpeg"
    },
    audio: "https://xeno-canto.org/sounds/uploaded/ESGJLNIGDA/XC877072-BOBO2_LeeMetcalf_05-15-2021.mp3"
  },
  {
    name: "Bonaparte's Gull",
    order: "charadriiformes",
    family: "Laridae",
    image: "assets/images/bogu.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/RFTXRYBVBX/XC525249-Bonaparte%27s%20Gull%20flt%20mostly%20-CA%2C%20Salton%20Sea%20SRA%2C%20HQ%20and%20Cmpgrd%2C%20Jan%2014%2C%202020%2C%201155%20AM.mp3"
  },
  {
    name: "Brown Booby",
    order: "pelecaniformes",
    family: "Sulidae",
    image: "assets/images/brbo.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/ILUHRFXDNU/XC335793-Brown%20Booby%20chick%2045%20days.mp3"
  },
  {
    name: "Brown Pelican",
    order: "pelecaniformes",
    family: "Pelecanidae",
    image: "assets/images/brpe.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/UQPMMMLMXB/XC357928-Pelecanus_occidentalis_PRIAM_Judith_26fev2017_13h21.MP3"
  },
  {
    name: "Brown Thrasher",
    order: "passeriformes",
    family: "Mimidae",
    image: "assets/images/brth.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/ISEVSYKZZW/XC839369-Moqueur-roux_Michigan_19-05-2023.mp3"
  },
  {
    name: "Boat-tailed Grackle",
    order: "passeriformes",
    family: "Icteridae",
    images: {
      male: "assets/images/btgr-m.jpeg",
      female: "assets/images/btgr-f.jpeg"
    },
    audio: "https://xeno-canto.org/sounds/uploaded/PVQOLRXXWL/XC941307-Boat-tailed-Grackle-on-3.23.24-at-16.17-for-.10-at-Green-Cay-Wetlands-FL.mp3"
  },
  {
    name: "Bufflehead",
    order: "anseriformes",
    family: "Anatidae",
    images: {
      male: "assets/images/buff-m.jpeg",
      female: "assets/images/buff-f.jpeg"
    },
    audio: "https://xeno-canto.org/sounds/uploaded/RFTXRYBVBX/XC361916-Bufflehead%20female%20-CA%2C%20Arcata%20Marsh%2C%20Humboldt%20County%2C%20January%2028%2C%202017%2C%200200%20PM.mp3"
  },
  {
    name: "Burrowing Owl",
    order: "strigiformes",
    family: "Strigidae",
    image: "assets/images/buow.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/GSINAVRFEN/XC524491-a365.%20Athene%20cunicularia.%20Corregimiento%20de%20Choch%C3%B3%2C%20Sincelejo-Sucre.%20Dic.%2007.%202019.mp3"
  },
  {
    name: "Blue-winged Teal",
    order: "anseriformes",
    family: "Anatidae",
    images: {
      male: "assets/images/bwte-m.jpeg",
      female: "assets/images/bwte-f.jpeg"
    },
    audio: "https://xeno-canto.org/sounds/uploaded/RFTXRYBVBX/XC173306-Blue-winged%20Teal%205%20dozen%20feeding%20-FL%2C%20MINWR%2C%20Scrub%20Hammock%2C%20February%2026%2C%202014%2C%201041%20AM.mp3"
  },
  {
    name: "Blue-winged Warbler",
    order: "passeriformes",
    family: "Parulidae",
    image: "assets/images/bwwa.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/HNIFQCMOLA/XC598819-Blue%20Winged%20Warbler_22Jun2019_Nashua_NH.mp3"
  },
  {
    name: "Carolina Chickadee",
    order: "passeriformes",
    family: "Paridae",
    image: "assets/images/cach.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/GVVNEJJEGA/XC933605-CACH_WEWA_OVEN_2024-05-13_GWNF_Emerald_Pond_Page_County_VA_1002(2).mp3"
  },
  {
    name: "Cattle Egret",
    order: "pelecaniformes",
    family: "Ardeidae",
    image: "assets/images/caeg.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC989226-Sat-Mar-22-2025-07-29-06-H%C3%A9ron-gardeboeuf-+.mp3"
  },
  {
    name: "Canada Goose",
    order: "anseriformes",
    family: "Anatidae",
    image: "assets/images/cago.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/QKELZYKUGX/XC817899-Canada-Geese-Flying.mp3"
  },
  {
    name: "Canvasback",
    order: "anseriformes",
    family: "Anatidae",
    images: {
      male: "assets/images/canv-m.jpeg",
      female: "assets/images/canv-f.jpeg"
    },
    audio: "https://xeno-canto.org/sounds/uploaded/AZXTZTQJRO/Aythya_valisineria_MI-BI_20070319_C1_ATC.mp3"
  },
  {
    name: "Carolina Wren",
    order: "passeriformes",
    family: "Troglodytidae",
    image: "assets/images/carw.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/PVQOLRXXWL/XC941065-Carolina-Wren-on-3.20.24-at-15.45-for-.10-at-Circle-B-Bar-Preserve-FL.mp3"
  },
  {
    name: "Caspian Tern",
    order: "charadriiformes",
    family: "Laridae",
    images: {
      breeding: "assets/images/cate-br.jpeg",
      nonbreeding: "assets/images/cate-nb.jpeg"
    },
    audio: "https://xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC799411-Skr%C3%A4nt%C3%A4rna_11.mp3"
  },
  {
    name: "Cedar Waxwing",
    order: "passeriformes",
    family: "Bombycillidae",
    image: "assets/images/cewa.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/ILUHRFXDNU/XC641547-Cedar%20Waxwings%20SAE%20apr%2022%20710_2094.mp3"
  },
  {
    name: "Common Ground-Dove",
    order: "columbiformes",
    family: "Columbidae",
    image: "assets/images/cgdo.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/ILUHRFXDNU/XC740454-Common%20ground%20Dove%20song%20Soledad%20Jul%2029%20904_0520.mp3"
  },
  {
    name: "Chipping Sparrow",
    order: "passeriformes",
    family: "Passerellidae",
    image: "assets/images/chsp.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/OKSKESEOLP/XC939192-LS104170_Chipping_Sparrow_Lake_Audy_Rd.mp3"
  },
  {
    name: "Chimney Swift",
    order: "apodiformes",
    family: "Apodidae",
    image: "assets/images/chsw.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/RSRUUVOCGA/XC316342-BA_JRR_CHSW_2016_05_13_1714_Oxford_LafayetteCo_MS.mp3"
  },
  {
    name: "Clapper Rail",
    order: "gruiformes",
    family: "Rallidae",
    image: "assets/images/clra.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/VROUALCTKG/XC962909-Clapper-Rail-(call,-PR,-Cabo-Rojo,-220304_007).mp3"
  },
  {
    name: "Cape May Warbler",
    order: "passeriformes",
    family: "Parulidae",
    images: {
      male: "assets/images/cmwa-m.jpeg",
      female: "assets/images/cmwa-f.jpeg"
    },
    audio: "https://xeno-canto.org/sounds/uploaded/WOPIRNCCSX/XC319659-Gaspesie-2016-05-23-06h30%20LS115719.mp3"
  },
  {
    name: "Common Gallinule",
    order: "gruiformes",
    family: "Rallidae",
    image: "assets/images/coga.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/VROUALCTKG/XC962933-PROB-Common-Gallinule-(call,-PR,-Botanical-Garden,-220304_014.mp3"
  },
  {
    name: "Common Goldeneye",
    order: "anseriformes",
    family: "Anatidae",
    images: {
      male: "assets/images/cogo-m.jpeg",
      female: "assets/images/cogo-f.jpeg"
    },
    audio: "https://xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC998246-Knipa_27.mp3"
  },
  {
    name: "Common Grackle",
    order: "passeriformes",
    family: "Icteridae",
    images: {
      male: "assets/images/cogr-m.jpeg",
      female: "assets/images/cogr-f.jpeg"
    },
    audio: "https://xeno-canto.org/sounds/uploaded/NWXCLJYBDK/XC908408-220417-Grackle%2C-calls%2C-backyard%2C-NR%2C-EM272para%2C-Toronto-9am.mp3"
  },
  {
    name: "Cooper's Hawk",
    order: "accipitriformes",
    family: "Accipitridae",
    image: "assets/images/coha.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/AVNNZOCYTN/XC414129-Record_2018-05-07_12-17-13.mp3"
  },
  {
    name: "Common Loon",
    order: "gaviiformes",
    family: "Gaviidae",
    images: {
      breeding: "assets/images/colo-br.jpeg",
      nonbreeding: "assets/images/colo-nb.jpeg"
    },
    audio: "https://xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC478950-2018-08-05%20Hallormsstadur%20-%20Karahnukur%20Dam%20180805%20Plongeon%20imbrin%20tremelo.mp3"
  },
  {
    name: "Common Nighthawk",
    order: "caprimulgiformes",
    family: "Caprimulgidae",
    image: "assets/images/coni.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/ISEVSYKZZW/XC839182-Engoulevent-d-Am%C3%A9rique_Carden-Alvar_25-05-2023.mp3"
  },
  {
    name: "Common Tern",
    order: "charadriiformes",
    family: "Laridae",
    image: "assets/images/cote.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/NWTKEXMKCA/XC1002309-Common-Tern_Buir1.mp3"
  },
  {
    name: "Common Yellowthroat",
    order: "passeriformes",
    family: "Parulidae",
    images: {
      male: "assets/images/coye-m.jpeg",
      female: "assets/images/coye-f.jpeg"
    },
    audio: "https://xeno-canto.org/sounds/uploaded/GVVNEJJEGA/XC388336-COYE_YEWA_AMRE_WIFL_2017-06-25_Lubec_Lake_Area_GNP_MT_1422%282%29.mp3"
  },
  {
    name: "Crested Caracara",
    order: "falconiformes",
    family: "Falconidae",
    image: "assets/images/crca.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/LXKLWEDKEM/XC932757-03-09-2024-6e31-Carcara-CARAIBAS.mp3"
  },
  {
    name: "Chuck-will's-widow",
    order: "caprimulgiformes",
    family: "Caprimulgidae",
    image: "assets/images/cwwi.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/OCGLDSUVRE/XC555492-Chuck%20Will%27s%20Widow%20Antrostomas%20carolinensis%20-%20Whita%20Mtns.%20OK%205-9-2017.mp3"
  },
  {
    name: "Double-crested Cormorant",
    order: "pelecaniformes",
    family: "Phalacrocoracidae",
    image: "assets/images/dcco.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/RFTXRYBVBX/XC145783-Double-crested%20Cormorant%20two%20arguing%20-FL%2C%20Biolab%20Rd%2C%20Canaveral%20NS%2C%20Aug%2001%2C%202013%2C%201202%20PM%20part%201.mp3"
  },
  {
    name: "Downy Woodpecker",
    order: "piciformes",
    family: "Picidae",
    image: "assets/images/dowo.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/WMHNJNGJCW/XC880467-Dendropicos-pubescens110811.mp3"
  },
  {
    name: "Dunlin",
    order: "charadriiformes",
    family: "Scolopacidae",
    image: "assets/images/dunl.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/MPDFSJHTXH/XC982474-becasseau_variable_hikman_13_A.mp3"
  },
  {
    name: "Eastern Bluebird",
    order: "passeriformes",
    family: "Turdidae",
    images: {
      male: "assets/images/eabl-m.jpeg",
      female: "assets/images/eabl-f.jpeg"
    },
    audio: "https://xeno-canto.org/sounds/uploaded/YBJUQSUJFZ/XC604632-Eastern%20Bluebirds%20winter%20flock.mp3"
  },
  {
    name: "Eastern Kingbird",
    order: "passeriformes",
    family: "Tyrannidae",
    image: "assets/images/eaki.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/HNIFQCMOLA/XC691320-Eastern%20Kingbird_23Jul2021_Lancy%20Brook%20Brookline%20NH.mp3"
  },
  {
    name: "Eastern Meadowlark",
    order: "passeriformes",
    family: "Icteridae",
    image: "assets/images/eame.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/GVVNEJJEGA/XC934441-EAME_2024-05-16_Mike_Long-s_Woods_Rd_Page_County_VA_1606(2).mp3"
  },
  {
    name: "Eastern Phoebe",
    order: "passeriformes",
    family: "Tyrannidae",
    image: "assets/images/eaph.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/XNSUQRGJPZ/XC922957-2024-03-17-EAPH-song-1118.mp3"
  },
  {
    name: "Eastern Towhee",
    order: "passeriformes",
    family: "Passerellidae",
    images: {
      male: "assets/images/eato-m.jpeg",
      female: "assets/images/eato-f.jpeg"
    },
    audio: "https://xeno-canto.org/sounds/uploaded/GVVNEJJEGA/XC895156-EATO_2024-03-28_Bealer-s_Ferry_Pond_Page_County_VA_1203(2).mp3"
  },
  {
    name: "Eurasian Collared-Dove",
    order: "columbiformes",
    family: "Columbidae",
    image: "assets/images/ecdo.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/VJARXMSBTG/XC921117-STRDEC_chant_240716_Ch%C3%A9cy.mp3"
  },
  {
    name: "Eastern Screech-Owl",
    order: "strigiformes",
    family: "Strigidae",
    images: {
      gray: "assets/images/esow-g.jpeg",
      red: "assets/images/esow-r.jpeg"
    },
    audio: "https://xeno-canto.org/sounds/uploaded/JHFICMRVUX/XC712961-220304%200245%20Eastern%20Screech%20Ow.mp3"
  },
  {
    name: "European Starling",
    order: "passeriformes",
    family: "Sturnidae",
    image: "assets/images/eust.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/QUBGGKWQNN/XC1004477-250603_1304EuropeanStarling_Read_3Jun25_1815.mp3"
  },
  {
    name: "Eastern Wood-Pewee",
    order: "passeriformes",
    family: "Tyrannidae",
    image: "assets/images/ewpe.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/ISEVSYKZZW/XC839983-Pioui-de-l-Est-2---Chaffey-s-Lock---29-05-2023.mp3"
  },
  {
    name: "Eastern Whip-poor-will",
    order: "caprimulgiformes",
    family: "Caprimulgidae",
    image: "assets/images/ewpw.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/NQKANDUFQH/XC929758-2024-05-11-EWPW-BakersRun.mp3"
  },
  {
    name: "Florida Scrub-Jay",
    order: "passeriformes",
    family: "Corvidae",
    image: "assets/images/flsj.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/JHFICMRVUX/XC758694-033122-1058-Florida-Scrub-Jay-2.mp3"
  },
  {
    name: "Forster's Tern",
    order: "charadriiformes",
    family: "Laridae",
    images: {
      breeding: "assets/images/fote-br.jpeg",
      nonbreeding: "assets/images/fote-nb.jpeg"
    },
    audio: "https://xeno-canto.org/sounds/uploaded/FSCGENVPXK/XC781029-FORSTERS-TERNs-in-flight-Brigantine-NJ-071412.mp3"
  },
  {
    name: "Fork-tailed Flycatcher",
    order: "passeriformes",
    family: "Tyrannidae",
    image: "assets/images/ftfl.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/BYLLSJRVDZ/XC551102-0797%20BLL524-10%20Tyrannus%20savana.mp3"
  },
  {
    name: "Fulvous Whistling-Duck",
    order: "anseriformes",
    family: "Anatidae",
    image: "assets/images/fwdu.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/HRYIVDQHBC/XC711755-414235611.mp3"
  },
  {
    name: "Gadwall",
    order: "anseriformes",
    family: "Anatidae",
    images: {
      male: "assets/images/gadw-m.jpeg",
      female: "assets/images/gadw-f.jpeg"
    },
    audio: "https://xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC554111-JAREK-MATUSIAK-A-571%20%283%29.mp3"
  },
  {
    name: "Great Blue Heron",
    order: "pelecaniformes",
    family: "Ardeidae",
    image: "assets/images/gbhe.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/URGFVYYSWH/XC906730-GBHE-Nov-24-2023-1730-migrating.mp3"
  },
  {
    name: "Great Crested Flycatcher",
    order: "passeriformes",
    family: "Tyrannidae",
    image: "assets/images/gcfl.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/ILUHRFXDNU/XC894353-Great-Crested-Flycatcher-call-la-florida-tab-abr-7-1014-DR0000_1787.mp3"
  },
  {
    name: "Great Horned Owl",
    order: "strigiformes",
    family: "Strigidae",
    image: "assets/images/ghow.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/URGFVYYSWH/XC805488-GHOW-loud-March-22,-2023-0045.mp3"
  },
  {
    name: "Gray-headed Swamphen",
    order: "gruiformes",
    family: "Rallidae",
    image: "assets/images/ghsw.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/NWTKEXMKCA/XC966312-Grey-headed-Swamphen_Putrajaya1.mp3"
  },
  {
    name: "Glossy Ibis",
    order: "pelecaniformes",
    family: "Threskiornithidae",
    image: "assets/images/glib.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/WBZVBDKAUE/XC749098-glossyibisringsept22.mp3"
  },
  {
    name: "Gray Catbird",
    order: "passeriformes",
    family: "Mimidae",
    image: "assets/images/grca.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/QLIQOZZWBD/XC872263-dumerella-carolinensis.mp3"
  },
  {
    name: "Great Egret",
    order: "pelecaniformes",
    family: "Ardeidae",
    image: "assets/images/greg.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/KGENRQCZVH/XC973571-ARDALB_calls3_24012025_Doubounoro_7h.mp3"
  },
  {
    name: "Green Heron",
    order: "pelecaniformes",
    family: "Ardeidae",
    image: "assets/images/grhe.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/DABODLPUPA/XC957415-2024-11-28-Green-Heron-flight-Nuevo-Vig%C3%ADa-PA-SOlmstead.mp3"
  },
  {
    name: "Gray Kingbird",
    order: "passeriformes",
    family: "Tyrannidae",
    image: "assets/images/grki.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/TNTQAOFHFM/XC998476-0318-Grey-Kingbird.mp3"
  },
  {
    name: "Greater Scaup",
    order: "anseriformes",
    family: "Anatidae",
    images: {
      male: "assets/images/grsc-m.jpeg",
      female: "assets/images/grsc-f.jpeg"
    },
    audio: "https://xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC322882-LS_52139%20Greater%20Scaup%20call%20B.mp3"
  },
  {
    name: "Grasshopper Sparrow",
    order: "passeriformes",
    family: "Passerellidae",
    image: "assets/images/grsp.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/HNIFQCMOLA/XC599646-Grasshhopper%20Sparrow_25Jul2019_Woodmont%20Orchard_Hollis_NH.mp3"
  },
  {
    name: "Greater Yellowlegs",
    order: "charadriiformes",
    family: "Scolopacidae",
    image: "assets/images/grye.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/LXKLWEDKEM/XC957945-02-01-2025-8e13-Macarico-grande-de-perna-amarela-GOIANIRA.mp3"
  },
  {
    name: "Green-winged Teal",
    order: "anseriformes",
    family: "Anatidae",
    images: {
      male: "assets/images/gwte-m.jpeg",
      female: "assets/images/gwte-f.jpeg"
    },
    audio: "https://xeno-canto.org/sounds/uploaded/YTUXOCTUEM/XC354707-Anas_carolinensis-FL%20calls%20Safety%20Lagoon%20Nome%202.07pm%202Jun15%20LS116903a.mp3"
  },
  {
    name: "Hairy Woodpecker",
    order: "piciformes",
    family: "Picidae",
    image: "assets/images/hawo.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/OKSKESEOLP/XC939213-LS104204_Hairy_Wood_Okanagan.mp3"
  },
  {
    name: "Herring Gull",
    order: "charadriiformes",
    family: "Laridae",
    image: "assets/images/hegu.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/WOPIRNCCSX/XC112582-American%20Herring%20Gull%20%28Montmagny-2012-11-11-09h15%29%20LS111108.mp3"
  },
  {
    name: "Hermit Thrush",
    order: "passeriformes",
    family: "Turdidae",
    image: "assets/images/heth.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/GVVNEJJEGA/XC933560-HETH_2024-05-11_Tobyhanna_SP_Monroe_County_PA_1529(2).mp3"
  },
  {
    name: "House Finch",
    order: "passeriformes",
    family: "Fringillidae",
    images: {
      male: "assets/images/hofi-m.jpeg",
      female: "assets/images/hofi-f.jpeg"
    },
    audio: "https://xeno-canto.org/sounds/uploaded/MLFEJSNPJS/XC1000426-House-Finch%281%29220425.mp3"
  },
  {
    name: "Horned Grebe",
    order: "gaviiformes",
    family: "Podicipedidae",
    images: {
      breeding: "assets/images/hogr-br.jpeg",
      nonbreeding: "assets/images/hogr-nb.jpeg"
    },
    audio: "https://xeno-canto.org/sounds/uploaded/BBJSEFYVPV/XC715920-Slav%203.mp3"
  },
  {
    name: "Hooded Merganser",
    order: "anseriformes",
    family: "Anatidae",
    images: {
      male: "assets/images/home-m.jpeg",
      female: "assets/images/home-f.jpeg"
    },
    audio: "https://xeno-canto.org/sounds/uploaded/XEIROMUDEB/XC142828-IAC%202013-01-04%20T15-55-54.mp3"
  },
  {
    name: "House Sparrow",
    order: "passeriformes",
    family: "Passeridae",
    images: {
      male: "assets/images/hosp-m.jpeg",
      female: "assets/images/hosp-f.jpeg"
    },
    audio: "https://xeno-canto.org/sounds/uploaded/GIFBPTEXWL/XC996905-20250511_FRAV2_0006_05_58_53.mp3"
  },
  {
    name: 'Hooded Warbler',
    order: 'passeriformes',
    family: 'Parulidae',
    images: {
      male: 'assets/images/howa-m.jpeg',
      female: 'assets/images/howa-f.jpeg'
    },
    audio: 'https://xeno-canto.org/sounds/uploaded/XSAURLRZQM/XC499557-VA2015%20JRS%2004_a_xc.mp3'
  },
  {
    name: "House Wren",
    order: "passeriformes",
    family: "Troglodytidae",
    image: "assets/images/howr.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/CNCSMQPXIV/XC522951-%2A%20New%20Recording%207%20-%20Coiba.mp3"
  },
  {
    name: "Indigo Bunting",
    order: "passeriformes",
    family: "Cardinalidae",
    images: {
      male: "assets/images/inbu-m.jpeg",
      female: "assets/images/inbu-f.jpeg"
    },
    audio: "https://xeno-canto.org/sounds/uploaded/ISEVSYKZZW/XC839866-Passerin-indigo-3---Backus-woods---23-05-2023.mp3"
  },
  {
    name: "Killdeer",
    order: "charadriiformes",
    family: "Charadriidae",
    image: "assets/images/kill.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/ZWAQHOJFLZ/XC955105-241028-Pluvier-kildir%40Barra-de-Colotepec.mp3"
  },
  {
    name: 'King Rail',
    order: 'gruiformes',
    family: 'Rallidae',
    image: 'assets/images/kira.jpeg',
    audio: 'https://xeno-canto.org/sounds/uploaded/BCFUZDOSJZ/XC383659-KIRA%2012-28-16%201100%20Backridge%20Rd%20TX1.mp3'
  },
  {
    name: "Laughing Gull",
    order: "charadriiformes",
    family: "Laridae",
    images: {
      breeding: "assets/images/lagu-br.jpeg",
      nonbreeding: "assets/images/lagu-nb.jpeg"
    },
    audio: "https://xeno-canto.org/sounds/uploaded/ECOQJFBNFA/XC802487-20230514_Laughing_Gull_Gugh_EAF_%283%29.mp3"
  },
  {
    name: 'Lesser Black-backed Gull',
    order: 'charadriiformes',
    family: 'Laridae',
    image: 'assets/images/lbbg-nb.jpeg',
    audio: 'https://xeno-canto.org/sounds/uploaded/ITHRUQEQCF/XC979706-Lesser-Black-backed-Gull_call_0312_1625.mp3'
  },
  {
    name: "Long-billed Dowitcher",
    order: "charadriiformes",
    family: "Scolopacidae",
    image: "assets/images/lbdo.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/RFTXRYBVBX/XC995056--01990-Long-billed-Dowitcher--CA,-TRV-estuary,-May-05,-2025,-0639-AM-edited.mp3"
  },
  {
    name: "Little Blue Heron",
    order: "pelecaniformes",
    family: "Ardeidae",
    image: "assets/images/lbhe.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/FSCGENVPXK/XC705372-LITTLE%20BLUE%20HERON%20adult%20Big%20Cypress%20NR%20FL%208.32am%20%2002262022%20.mp3"
  },
  {
    name: "Least Bittern",
    order: "pelecaniformes",
    family: "Ardeidae",
    image: "assets/images/lebi.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/RFTXRYBVBX/XC581228-Least%20Bittern%20-CA%2C%20Upper%20Otay%20Lk%2C%20July%2012%2C%202020%2C%200735%20AM.mp3"
  },
  {
    name: "Least Sandpiper",
    order: "charadriiformes",
    family: "Scolopacidae",
    images: {
      breeding: "assets/images/lesa-br.jpeg",
      nonbreeding: "assets/images/lesa-nb.jpeg"
    },
    audio: "https://xeno-canto.org/sounds/uploaded/ILUHRFXDNU/XC742363-Least%20Sandpiper%20calls%20colotepec%20ago%209%201845_0555.mp3"
  },
  {
    name: "Lesser Scaup",
    order: "anseriformes",
    family: "Anatidae",
    images: {
      male: "assets/images/lesc-m.jpeg",
      female: "assets/images/lesc-f.jpeg"
    },
    audio: "https://xeno-canto.org/sounds/uploaded/FSCGENVPXK/LESSER%20SCAUP%20in%20flight%20Lostwood%20ND%2052507%20%282%29aa.mp3"
  },
  {
    name: "Least Tern",
    order: "charadriiformes",
    family: "Laridae",
    image: "assets/images/lete.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/KZYUWIRZVH/XC662338-TERN_Least_c_flight%20El%20Golfo%20SON%20052121%201529.mp3"
  },
  {
    name: "Lesser Yellowlegs",
    order: "charadriiformes",
    family: "Scolopacidae",
    image: "assets/images/leye.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/YOXWKYFZAP/XC720777-Tringa%20flavipes%20DCB%20268-1C.mp3"
  },
  {
    name: "Limpkin",
    order: "gruiformes",
    family: "Aramidae",
    image: "assets/images/limp.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/WDSGEPZMTU/XC487423-limpkin061518myakkariver.mp3"
  },
  {
    name: "Loggerhead Shrike",
    order: "passeriformes",
    family: "Laniidae",
    image: "assets/images/losh.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/ILUHRFXDNU/XC698484-Loggerhead%20Shrike%20song%20Xico%20ene%2019%20828_3087.mp3"
  },
  {
    name: "Louisiana Waterthrush",
    order: "passeriformes",
    family: "Parulidae",
    image: "assets/images/lowa.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/KZYUWIRZVH/XC828213-WATERTH_Louisiana-2x-McCormack-Lake-MO-200m-052323-0845.mp3"
  },
  {
    name: "Mangrove Cuckoo",
    order: "cuculiformes",
    family: "Cuculidae",
    image: "assets/images/macu.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/CDTGHVBGZP/XC265327-Mangrove%20Cuckoo2015-5-28-1.mp3"
  },
  {
    name: "Magnificent Frigatebird",
    order: "pelecaniformes",
    family: "Fregatidae",
    image: "assets/images/mafr.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/FSCGENVPXK/XC889983-MAGNIFICENT-FRIGATEBIRD-pres-female-North-Seymour-Galapagos-4.19pm-03022024.mp3"
  },
  {
    name: "Marbled Godwit",
    order: "charadriiformes",
    family: "Scolopacidae",
    image: "assets/images/mago.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/WCNFEBIHCJ/XC293792-Marbled%20Godwit%20-%20Limosa%20fedoa%20-%20PJT_2015May24_1331_SKHeritageMarsh%20HPF800%20amp%2010.mp3"
  },
  {
    name: "Mallard",
    order: "anseriformes",
    family: "Anatidae",
    images: {
      male: "assets/images/mall-m.jpeg",
      female: "assets/images/mall-f.jpeg"
    },
    audio: "https://xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC946811-Gr%C3%A4sand_24.mp3"
  },
  {
    name: "Marsh Wren",
    order: "passeriformes",
    family: "Troglodytidae",
    image: "assets/images/mawr.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/UWHBFUYWSQ/XC692435-Marsh%20Wren%20SMNWR%2020210509%201128.MP3"
  },
  {
    name: "Merlin",
    order: "falconiformes",
    family: "Falconidae",
    image: "assets/images/merl.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/YSDNMROVID/XC896663-falcol4.mp3"
  },
  {
    name: "Mourning Dove",
    order: "columbiformes",
    family: "Columbidae",
    image: "assets/images/modo.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/OKSKESEOLP/XC939196-LS104174B_Mourning_Dove_Lake_Audy_Rd.mp3"
  },
  {
    name: "Mottled Duck",
    order: "anseriformes",
    family: "Anatidae",
    images: {
      male: "assets/images/modu-m.jpeg",
      female: "assets/images/modu-f.jpeg"
   },
    audio: "https://xeno-canto.org/sounds/uploaded/RFTXRYBVBX/XC192343-Mottled%20Duck%20male%2C%20looked%20pure%2C%20yellow%20bill%2C%20straight%20tail%20not%20white%20-FL%2C%20MINWR%2C%20Peacock%27a%20Pocket%20Rd%20%2C%20April%2010%2C%202014%2C%201127%20AM.mp3"
  },
  {
    name: "Monk Parakeet",
    order: "psittaciformes",
    family: "Psittacidae",
    image: "assets/images/mopa.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/THHNKSHUMO/XC824384-050-Conure-veuveSTE-104.mp3"
  },
  {
    name: "Muscovy Duck",
    order: "anseriformes",
    family: "Anatidae",
    image: "assets/images/mudu.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/AHYWLCEJLP/XC163752-Casteina%20criolla%20dia%202.mp3"
  },
  {
    name: "Nanday Parakeet",
    order: "psittaciformes",
    family: "Psittacidae",
    image: "assets/images/napa.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/VWCBCAIJUC/XC854892-MixPre-001_Aratinga_nenday.mp3"
  },
  {
    name: "Northern Bobwhite",
    order: "galliformes",
    family: "Odontophoridae",
    images: {
      male: "assets/images/nobo-m.jpeg",
      female: "assets/images/nobo-f.jpeg"
    },
    audio: "https://xeno-canto.org/sounds/uploaded/WEFETQLIEQ/XC411455-Northern%20Bobwhite%20%28song%29.mp3"
  },
  {
    name: "Northern Cardinal",
    order: "passeriformes",
    family: "Cardinalidae",
    images: {
      male: "assets/images/noca-m.jpeg",
      female: "assets/images/noca-f.jpeg"
    },
    audio: "https://xeno-canto.org/sounds/uploaded/CQVHGWMGMC/XC797998-noca050223.mp3"
  },
  {
    name: "Northern Flicker",
    order: "piciformes",
    family: "Picidae",
    image: "assets/images/nofl.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/HRVQAOEHRR/XC957326-Northern-Flicker-10-8-22-Inglewood.mp3"
  },
  {
    name: "Northern Gannet",
    order: "suliformes",
    family: "Sulidae",
    image: "assets/images/noga.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC653151-Fou%20de%20Bassan%20cris%20filtered%20%2B.mp3"
  },
  {
    name: "Northern Harrier",
    order: "accipitriformes",
    family: "Accipitridae",
    images: {
      male: "assets/images/noha-m.jpeg",
      female: "assets/images/noha-f.jpeg"
    },
    audio: "https://xeno-canto.org/sounds/uploaded/HKCIRWPZOP/XC776694-2022-05-25-1431-northern-harrier.mp3"
  },
  {
    name: "Northern Mockingbird",
    order: "passeriformes",
    family: "Mimidae",
    image: "assets/images/nomo.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/ILUHRFXDNU/XC731949-Northern%20Mockingbird%20song%20SPE%20June%2014%20840_0139.mp3"
  },
  {
    name: "Northern Parula",
    order: "passeriformes",
    family: "Parulidae",
    image: "assets/images/nopa.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/KZYUWIRZVH/XC825110-PARULA_Northern-1x-Magee-Marsh-WA-200m-051523-0859.mp3"
  },
  {
    name: "Northern Pintail",
    order: "anseriformes",
    family: "Anatidae",
    images: {
      male: "assets/images/nopi-m.jpeg",
      female: "assets/images/nopi-f.jpeg"
    },
    audio: "https://xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC721976-Stj%C3%A4rtand_09.mp3"
  },
  {
    name: "Northern Shoveler",
    order: "anseriformes",
    family: "Anatidae",
    images: {
      male: "assets/images/nosh-m.jpeg",
      female: "assets/images/nosh-f.jpeg"
    },
    audio: "https://xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC644500-JAREK-MATUSIAK-A-1551%20%282%29%20p%C5%82askonos%20m%20ed.mp3"
  },
  {
    name: "Northern Waterthrush",
    order: "passeriformes",
    family: "Parulidae",
    image: "assets/images/nowa.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC477981-STE-022.mp3"
  },
  {
    name: "Northern Rough-winged Swallow",
    order: "passeriformes",
    family: "Hirundinidae",
    image: "assets/images/nrws.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/WUKEUEONAI/XC542595-nrws_040620_yumaeastwet.mp3"
  },
  {
    name: "Orange-crowned Warbler",
    order: "passeriformes",
    family: "Parulidae",
    image: "assets/images/ocwa.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/RFTXRYBVBX/XC714516-Orange-crowned%20Warbler%20-CA%2C%20Laguna%20Mnts%20RA%2C%20San%20Benito%20Co%2C%20Mar%2031%2C%202022%2C%200151%20PM.mp3"
  },
  {
    name: "Orchard Oriole",
    order: "passeriformes",
    family: "Icteridae",
    images: {
      male: "assets/images/oror-m.jpeg",
      female: "assets/images/oror-f.jpeg"
    },
    audio: "https://xeno-canto.org/sounds/uploaded/LIMOMMAPWS/XC804246-orchard-honker.mp3"
  },
  {
    name: "Osprey",
    order: "accipitriformes",
    family: "Pandionidae",
    image: "assets/images/ospr.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/ILUHRFXDNU/XC573484-Osprey%20song%20maviri%20july%204%20934_0577.mp3"
  },
  {
    name: "Ovenbird",
    order: "passeriformes",
    family: "Parulidae",
    image: "assets/images/oven.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/GVVNEJJEGA/XC934448-OVEN_2024-05-16_Beahm-s_Gap_Shenandoah_NP_Page_County_VA_1242(2).mp3"
  },
  {
    name: "Painted Bunting",
    order: "passeriformes",
    family: "Cardinalidae",
    images: {
      male: "assets/images/pabu-m.jpeg",
      female: "assets/images/pabu-f.jpeg"
    },
    audio: "https://xeno-canto.org/sounds/uploaded/UTXSVIHVRJ/XC920148-ciris2080724-061357.mp3"
  },
  {
    name: "Palm Warbler",
    order: "passeriformes",
    family: "Parulidae",
    images: {
      breeding: "assets/images/pawa-br.jpeg",
      nonbreeding: "assets/images/pawa-nb.jpeg"
    },
    audio: "https://xeno-canto.org/sounds/uploaded/PWDLINYMKL/PalmWarbler.mp3"
  },
  {
    name: "Pied-billed Grebe",
    order: "podicipediformes",
    family: "Podicipedidae",
    image: "assets/images/pbgr.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/MDZVOPUOXU/XC542619-200321_01.pied.billed.grebe.san.dimas.canyon.reservoir.lance.benner.mp3"
  },
  {
    name: "Peregrine Falcon",
    order: "falconiformes",
    family: "Falconidae",
    image: "assets/images/pefa.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/WNLIDKJKXT/XC880751-Falco-peregrinus_CALL_Riba_roja-d-Ebre_240310_1321_XC.mp3"
  },
  {
    name: "Pectoral Sandpiper",
    order: "charadriiformes",
    family: "Scolopacidae",
    images: {
      breeding: "assets/images/pesa-br.jpeg",
      nonbreeding: "assets/images/pesa-nb.jpeg"
    },
    audio: "https://xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC935127-B%C3%A9casseau-tachet%C3%A9-juv-envol-+.mp3"
  },
  {
    name: "Piping Plover",
    order: "charadriiformes",
    family: "Charadriidae",
    image: "assets/images/pipl.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/SNHVNQVYJV/PIPL2.mp3"
  },
  {
    name: "Pine Warbler",
    order: "passeriformes",
    family: "Parulidae",
    images: {
      male: "assets/images/piwa-m.jpeg",
      female: "assets/images/piwa-f.jpeg"
    },
    audio: "https://xeno-canto.org/sounds/uploaded/GVVNEJJEGA/XC895216-PIWA_2024-03-16_GWNF_Wescott_Access_Page_County_VA_1536(2).mp3"
  },
  {
    name: "Pileated Woodpecker",
    order: "piciformes",
    family: "Picidae",
    image: "assets/images/piwo.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/FSCGENVPXK/XC157763-PILEATED%20WOODPECKER%20PERT%20PA%209.40am%2012012013.mp3"
  },
  {
    name: "Prairie Warbler",
    order: "passeriformes",
    family: "Parulidae",
    images: {
      male: "assets/images/prwa-m.jpeg",
      female: "assets/images/prwa-f.jpeg"
    },
    audio: "https://xeno-canto.org/sounds/uploaded/DLGSDUKLNI/XC321069-PRAW%20Song%20at%20SPAC%2C%20MS%2006-11-16.mp3"
  },
  {
    name: "Prothonotary Warbler",
    order: "passeriformes",
    family: "Parulidae",
    image: "assets/images/prow.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/PJVICFDZGZ/XC389965-160426%20Kentucky%20Land%20B%20Lakese_PROW%202.mp3"
  },
  {
    name: "Purple Gallinule",
    order: "gruiformes",
    family: "Rallidae",
    image: "assets/images/puga.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/LXKLWEDKEM/XC443410-Frango%20dagua%20azul1%20%28Porphyrio%20martinicus-OK-OK%29%2015-11-18%209e34.mp3"
  },
  {
    name: "Purple Martin",
    order: "passeriformes",
    family: "Hirundinidae",
    image: "assets/images/puma.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/XNSUQRGJPZ/XC865618-2023-03-27-PUMA-song-0900.mp3"
  },
  {
    name: "Ring-billed Gull",
    order: "charadriiformes",
    family: "Laridae",
    image: "assets/images/rbgu.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/RFTXRYBVBX/XC164757-Ring-billed%20Gull%20first%20winter%20in%20gull%2C%20flock%20in%20park%20-FL%2C%20Titusville%2C%20January%2014%2C%202014%2C%200903%20AM.mp3"
  },
  {
    name: "Red-breasted Merganser",
    order: "anseriformes",
    family: "Anatidae",
    images: {
      male: "assets/images/rbme-m.jpeg",
      female: "assets/images/rbme-f.jpeg"
    },
    audio: "https://xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC801187-Sm%C3%A5skrake_12.mp3"
  },
  {
    name: "Red-breasted Nuthatch",
    order: "passeriformes",
    family: "Sittidae",
    image: "assets/images/rbnu.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/SPMWIWZKKC/XC753160-220701_5430_RBNU.mp3"
  },
  {
    name: "Red-bellied Woodpecker",
    order: "piciformes",
    family: "Picidae",
    image: "assets/images/rbwo.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/JHFICMRVUX/XC713255-031622%200712%20Red-bellied%20Woodpecker%20Call%20and%20Tap.mp3"
  },
  {
    name: "Ruby-crowned Kinglet",
    order: "passeriformes",
    family: "Regulidae",
    image: "assets/images/rcki.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/VWWRQKFKMD/XC814137-racr-17juin23-9h.mp3"
  },
  {
    name: "Red-cockaded Woodpecker",
    order: "piciformes",
    family: "Picidae",
    image: "assets/images/rcwo.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/RFTXRYBVBX/XC360993-Red-cockaded%20Woodpecker%20single%20-FL%2C%20Buffer%20Preserve%2C%20March%2022%2C%202017%2C%200847%20AM.mp3"
  },
  {
    name: "Redhead",
    order: "anseriformes",
    family: "Anatidae",
    images: {
      male: "assets/images/redh-m.jpeg",
      female: "assets/images/redh-f.jpeg"
    },
    audio: "https://xeno-canto.org/sounds/uploaded/GLMCVGNYAT/XC206445-Redhead.mp3"
  },
  {
    name: "Reddish Egret",
    order: "pelecaniformes",
    family: "Ardeidae",
    images: {
      dark: "assets/images/reeg-d.jpeg",
      white: "assets/images/reeg-w.jpeg"
    },
    audio: "https://xeno-canto.org/sounds/uploaded/RFTXRYBVBX/XC452975-Reddish%20Egret%20-TX%2C%20South%20Padre%20Is%2C%20Birding%20and%20Nature%20Center%2C%20December%2014%2C%202017%2C%200356%20PM.mp3"
  },
  {
    name: "Red Knot",
    order: "charadriiformes",
    family: "Scolopacidae",
    image: "assets/images/rekn.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/CDTGHVBGZP/XC185588-Red%20Knot2014-6-22-7.mp3"
  },
  {
    name: "Red-eyed Vireo",
    order: "passeriformes",
    family: "Vireonidae",
    image: "assets/images/revi.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/ISEVSYKZZW/XC840741-Vir%C3%A9o-%C3%A0-oeil-rouge-2---Chaffey-s-Lock---29-05-2023.mp3"
  },
  {
    name: "Red-headed Woodpecker",
    order: "piciformes",
    family: "Picidae",
    image: "assets/images/rhwo.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/JWNQIKQAIE/XC733937-220327%20tapping%20with%20drum%20querr%20.mp3"
  },
  {
    name: "Ring-necked Duck",
    order: "anseriformes",
    family: "Anatidae",
    images: {
      male: "assets/images/rndu-m.jpeg",
      female: "assets/images/rndu-f.jpeg"
    },
    audio: "https://xeno-canto.org/sounds/uploaded/TQCWZTAINA/XC938581-RNDU-20240610T210000-0300_StPaulIslandA7-fade-rumblefilter_120.mp3"
  },
  {
    name: "Rock Pigeon",
    order: "columbiformes",
    family: "Columbidae",
    image: "assets/images/ropi.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/ISVHGXLFPC/XC840017-PalomaUCM.mp3"
  },
  {
    name: "Roseate Spoonbill",
    order: "pelecaniformes",
    family: "Threskiornithidae",
    image: "assets/images/rosp.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/RFTXRYBVBX/XC451725-Roseate%20Spoonbill%201%20in%20tree%20-FL%2C%20River%20Lakes%2C%20August%2020%2C%202018%2C%200806%20AM.mp3"
  },
  {
    name: "Royal Tern",
    order: "charadriiformes",
    family: "Laridae",
    image: "assets/images/royt.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/MLFEJSNPJS/XC901107-Royal-Tern-130424.mp3"
  },
  {
    name: "Red-shouldered Hawk",
    order: "accipitriformes",
    family: "Accipitridae",
    image: "assets/images/rsha.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/MDZVOPUOXU/XC545866-200414_01.red.shouldered.hawk.e.loma.alta.dr.lance.benner.mp3"
  },
  {
    name: "Red-tailed Hawk",
    order: "accipitriformes",
    family: "Accipitridae",
    image: "assets/images/rtha.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/KZYUWIRZVH/XC973864-HAWK_Red-tai_c-SBNWR-1100m-120523-1024.mp3"
  },
  {
    name: "Ruby-throated Hummingbird",
    order: "apodiformes",
    family: "Trochilidae",
    images: {
      male: "assets/images/rthu-m.jpeg",
      female: "assets/images/rthu-f.jpeg"
    },
    audio: "https://xeno-canto.org/sounds/uploaded/ILUHRFXDNU/XC758917-Ruby-throated-Hummingbird-calls-SAn-Bautista-Guelache-nov-1-932_0737.mp3"
  },
  {
    name: "Ruddy Duck",
    order: "anseriformes",
    family: "Anatidae",
    images: {
      male: "assets/images/rudu-m.jpeg",
      female: "assets/images/rudu-f.jpeg"
    },
    audio: "https://xeno-canto.org/sounds/uploaded/JHFICMRVUX/XC483784-5302019%201142%20RUDU.mp3"
  },
  {
    name: "Ruddy Turnstone",
    order: "charadriiformes",
    family: "Scolopacidae",
    image: "assets/images/rutu.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/YNOAMCSSHX/XC841456-Ruddy-Turnstone%E7%BF%BB%E7%9F%B3%E9%B9%AC-call--2309100609-%E5%8D%97%E6%B1%87%E5%98%B4-%E9%A3%9E%E8%A1%8CSHADOW_3839S12---A.mp3"
  },
  {
    name: "Red-winged Blackbird",
    order: "passeriformes",
    family: "Icteridae",
    images: {
      male: "assets/images/rwbl-m.jpeg",
      female: "assets/images/rwbl-f.jpeg"
    },
    audio: "https://xeno-canto.org/sounds/uploaded/MLFEJSNPJS/XC805782-Red-winged-Blackbird.mp3"
  },
  {
    name: "Sandhill Crane",
    order: "gruiformes",
    family: "Gruidae",
    image: "assets/images/sacr.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/GVVNEJJEGA/XC540189-SACR_2019-11-06_Oak_Island%20RD_Sauvie_Island_OR_1145%282%29.mp3"
  },
  {
    name: "Sanderling",
    order: "charadriiformes",
    family: "Scolopacidae",
    image: "assets/images/sand.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/BJAXFFKOML/XC938622-B%C3%A9casseausanderling_170924_saintpairthar_20h48_cripos%C3%A9_A.mp3"
  },
  {
    name: "Sandwich Tern",
    order: "charadriiformes",
    family: "Laridae",
    image: "assets/images/sate.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/WBZVBDKAUE/XC1002894-sandwichtac.mp3"
  },
  {
    name: "Savannah Sparrow",
    order: "passeriformes",
    family: "Passerellidae",
    image: "assets/images/savs.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/IGXRFYAGNH/XC782409-SAVS_YTHEMP-YSL-266936-S2_20210701_050000.mp3"
  },
  {
    name: "Short-billed Dowitcher",
    order: "charadriiformes",
    family: "Scolopacidae",
    image: "assets/images/sbdo.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/RFTXRYBVBX/XC460722-Short-billed%20Dowitcher%20ns%2C%20on%20ground%20-FL%2C%20MI%20NWR%2C%20Pumphouse%20Road%2C%20May%2010%2C%202018%2C%200731%20AM.mp3"
  },
  {
    name: "Scarlet Tanager",
    order: "passeriformes",
    family: "Cardinalidae",
    images: {
      male: "assets/images/scta-m.jpeg",
      female: "assets/images/scta-f.jpeg"
    },
    audio: "https://xeno-canto.org/sounds/uploaded/IUWJMMZJNL/XC896571-SCTA-April-16-2024-aud.mp3"
  },
  {
    name: "Semipalmated Plover",
    order: "charadriiformes",
    family: "Charadriidae",
    image: "assets/images/sepl.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/JXZPZYPQKP/XC785375-Charadrius-semipalmatus4TOP_Cabo-da-Praia.mp3"
  },
    {
    name: 'Semipalmated Sandpiper',
    order: 'charadriiformes',
    family: 'Scolopacidae',
    images: {
      breeding: 'assets/images/sesa-br.jpeg',
      nonbreeding: 'assets/images/sesa-nb.jpeg'
    },
    audio: 'https://xeno-canto.org/sounds/uploaded/RFTXRYBVBX/XC460745-Semipalmated%20Sandpiper%20-FL%2C%20MINWR%2C%20Pumphouse%20Road%2C%20May%2012%2C%202018%2C%200716%20AM.mp3'
  },
  {
    name: "Seaside Sparrow",
    order: "passeriformes",
    family: "Passerellidae",
    image: "assets/images/sesp.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/RFTXRYBVBX/XC167940-Seaside%20Sparrow%20-FL%2C%20Big%20Bend%20area%2C%20April%2015%2C%20%E2%80%8E2012%2C%200713%20PM.mp3"
  },
  {
    name: "Sedge Wren",
    order: "passeriformes",
    family: "Troglodytidae",
    image: "assets/images/sewr.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/ZEFHZHEMLK/XC815807-MIXPRE-13027XCSedgeWren7-11-23CarneyFen.mp3"
  },
  {
    name: "Snowy Egret",
    order: "pelecaniformes",
    family: "Ardeidae",
    image: "assets/images/sneg.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/FSCGENVPXK/XC705551-SNOWY%20EGRET%20interaction%20between%20two%20birds%20Big%20Cypress%20NR%20FL%207.08am%20%2002262022%20.mp3"
  },
  {
    name: "Snail Kite",
    order: "accipitriformes",
    family: "Accipitridae",
    image: "assets/images/snki.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/RFTXRYBVBX/XC381869-Snail%20Kite%20male%20-FL%2C%20Goodwin%20Marsh%2C%20July%2025%2C%202017%2C%201045%20AM.mp3"
  },
  {
    name: "Snowy Plover",
    order: "charadriiformes",
    family: "Charadriidae",
    image: "assets/images/snpl.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/RFTXRYBVBX/XC286696-Snowy%20Plover%20ground%20then%20flt%20-CA%2C%20end%20of%20Poe%20Rd%2C%20Salton%20Sea%2C%20April%2028%2C%202015%2C%201054%20AM.mp3"
  },
  {
    name: "Sora",
    order: "gruiformes",
    family: "Rallidae",
    image: "assets/images/sora.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/AYKHDFBYIH/XC477043-Sora%20singing%20very%20good%202019%2005%2014%20Hillman%20Marsh%2C%20Canada1337_short.mp3"
  },
  {
    name: "Solitary Sandpiper",
    order: "charadriiformes",
    family: "Scolopacidae",
    image: "assets/images/sosa.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/LXKLWEDKEM/XC674366-08-09-2021%207e44%20Macarico%20solitario.mp3"
  },
  {
    name: "Spotted Sandpiper",
    order: "passeriformes",
    family: "Scolopacidae",
    images: {
      breeding: "assets/images/spsa.jpeg",
      nonbreeding: "assets/images/spsa-nb.jpeg"
    },
    audio: "https://xeno-canto.org/sounds/uploaded/OCGLDSUVRE/XC559004-Spotted%20Sandpiper%20Actitis%20macularius%20Summit%20Lake%20Lassen%20NP%20Shasta%20Co.%20CA%207-30-19.mp3"
  },
  {
    name: "Sharp-shinned Hawk",
    order: "accipitriformes",
    family: "Accipitridae",
    image: "assets/images/ssha.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/VKQHDAFQDZ/XC791005-Gavil%C3%A1n-Chico-Amp.mp3"
  },
  {
    name: "Scissor-tailed Flycatcher",
    order: "passeriformes",
    family: "Tyrannidae",
    image: "assets/images/stfl.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/ORMANUUWJE/XC538195-Scissor%20tailed%20Flycatcher.mp3"
  },
  {
    name: "Short-tailed Hawk",
    order: "accipitriformes",
    family: "Accipitridae",
    image: "assets/images/stha.jpeg",
    audio: "//xeno-canto.org/sounds/uploaded/VEQNJRSIPU/XC982867-241111_16_out.mp3"
  },
  {
    name: "Swallow-tailed Kite",
    order: "accipitriformes",
    family: "Accipitridae",
    image: "assets/images/stki.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/PVWSUUVNDA/XC844661-G.-tesoura.mp3"
  },
  {
    name: "Stilt Sandpiper",
    order: "charadriiformes",
    family: "Scolopacidae",
    image: "assets/images/stsa.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/DLGSDUKLNI/XC316118-STSA%20Calls%20in%20Humphreys%20Co.%2C%20MS%2005-11-16.mp3"
  },
  {
    name: "Summer Tanager",
    order: "passeriformes",
    family: "Cardinalidae",
    images: {
      male: "assets/images/suta-m.jpeg",
      female: "assets/images/suta-f.jpeg"
    },
    audio: "https://xeno-canto.org/sounds/uploaded/EXBETBIAJB/XC559482-SUTA.mp3"
  },
  {
    name: "Swamp Sparrow",
    order: "passeriformes",
    family: "Passerellidae",
    image: "assets/images/swsp.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/WFUNWVJFSZ/XC553925-2020-05-02-petitcotesong.mp3"
  },
  {
    name: "Tri-colored Heron",
    order: "pelecaniformes",
    family: "Ardeidae",
    image: "assets/images/trhe.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/RFTXRYBVBX/XC192727-Tricolored%20Heron%20-FL%2C%20MINWR%2C%20Peacocks%20Pocket%2C%20June%2003%2C%202014%2C%200907%20AM.mp3"
  },
  {
    name: "Tree Swallow",
    order: "passeriformes",
    family: "Hirundinidae",
    image: "assets/images/trsw.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/WFUNWVJFSZ/XC475639-TreeSwallows_PPNPMarsh_Rec17-05-2019%4005_29_23.mp3"
  },
  {
    name: "Tufted Titmouse",
    order: "passeriformes",
    family: "Paridae",
    image: "assets/images/tuti.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/GVVNEJJEGA/XC814179-TUTI_PIWA_CACH_2023-02-28_Indian_Grave_Ridge_Trail_Page_County_VA_1145(2).mp3"
  },
  {
    name: "Turkey Vulture",
    order: "accipitriformes",
    family: "Cathartidae",
    image: "assets/images/tuvu.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/SEVIQQAKWM/XC520287-ZOOM0003_Tr1%20-%20Jote%20Cabeza%20colorada.mp3"
  },
  {
    name: "Virginia Rail",
    order: "gruiformes",
    family: "Rallidae",
    image: "assets/images/vira.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/ILUHRFXDNU/XC698488-Virginia%27s%20Rail%20San%20greogorio%20song%20ene%2017%201330_3072.mp3"
  },
  {
    name: "White-crowned Pigeon",
    order: "columbiformes",
    family: "Columbidae",
    image: "assets/images/wcpi.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/RFTXRYBVBX/XC145944-White-crowned%20Pigeon%20-FL%2C%20No%20Name%20Key%2C%20June%2013%2C%202013%2C%200955%20AM.mp3"
  },
  {
    name: "Western Sandpiper",
    order: "charadriiformes",
    family: "Scolopacidae",
    images: {
      breeding: "assets/images/wesa-br.jpeg",
      nonbreeding: "assets/images/wesa-nb.jpeg"
    },
    audio: "https://xeno-canto.org/sounds/uploaded/CDTGHVBGZP/XC149252-Western%20Sandpiper2013-5-23-8.mp3"
  },
  {
    name: "White-eyed Vireo",
    order: "passeriformes",
    family: "Vireonidae",
    image: "assets/images/wevi.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/KZYUWIRZVH/XC827619-VIREO_Whi-eye-McCormack-L-MO-200m-052323-1030.mp3"
  },
  {
    name: "Worm-eating Warbler",
    order: "passeriformes",
    family: "Parulidae",
    image: "assets/images/wewa.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/GVVNEJJEGA/XC933616-WEWA_EATO_2024-05-13_GWNF_Emerald_Pond_Page_County_VA_1020(2).mp3"
  },
  {
    name: "White Ibis",
    order: "pelecaniformes",
    family: "Threskiornithidae",
    image: "assets/images/whib.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/FSCGENVPXK/XC780786-WHITE-IBIS-5-birds-taking-off-Bailey-Tract-7.30am-02222016.mp3"
  },
  {
    name: "Whimbrel",
    order: "charadriiformes",
    family: "Scolopacidae",
    image: "assets/images/whim.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/BBFFGHPZZQ/XC1001186-Whimbrel-%28Numenius-phaeopus-hudsonicus%29.mp3"
  },
  {
    name: "Willet",
    order: "charadriiformes",
    family: "Scolopacidae",
    image: "assets/images/will.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/MLFEJSNPJS/XC901132-Willet100424.mp3"
  },
  {
    name: "Wilson's Plover",
    order: "charadriiformes",
    family: "Charadriidae",
    image: "assets/images/wipl.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/XTVEPHMPPJ/XC238126-Charadrius_wilsonia30cut2A.mp3"
  },
  {
    name: "Wilson's Snipe",
    order: "charadriiformes",
    family: "Scolopacidae",
    image: "assets/images/wisn.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/YSDNMROVID/XC342368-341_galdel_%C3%A4ysk2-kutsu_Portugali_Azorit_2011-10-21.mp3"
  },
  {
    name: "Wild Turkey",
    order: "galliformes",
    family: "Phasianidae",
    images: {
      male: "assets/images/witu-m.jpeg",
      female: "assets/images/witu-f.jpeg"
    },
    audio: "https://xeno-canto.org/sounds/uploaded/JHFICMRVUX/XC539775-3-22-20%20655%20Male-female%20Turkey.mp3"
  },
  {
    name: "Wood Duck",
    order: "anseriformes",
    family: "Anatidae",
    images: {
      male: "assets/images/wodu-m.jpeg",
      female: "assets/images/wodu-f.jpeg"
    },
    audio: "https://xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC522565-Canard%20carolin%20divers%20cris%20%2B.mp3"
  },
  {
    name: "Wood Stork",
    order: "pelecaniformes",
    family: "Ciconiidae",
    image: "assets/images/wost.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/RFTXRYBVBX/XC149638-Wood%20Stork%20%282%29%20-Viera%20Wetlands%2C%20Jun%2023%2C%202008.mp3"
  },
  {
    name: 'Wood Thrush',
    order: 'passeriformes',
    family: 'Turdidae',
    image: 'assets/images/woth.jpeg',
    audio: 'https://xeno-canto.org/sounds/uploaded/QUBGGKWQNN/XC1001801-250524_1260_WoodThrush_HartsBrook_24May25_1828.mp3'
  },
  {
    name: "White-rumped Sandpiper",
    order: "charadriiformes",
    family: "Scolopacidae",
    image: "assets/images/wrsa.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/WETAASKWUP/XC836099-230831_5990b.mp3"
  },
  {
    name: "White-winged Dove",
    order: "columbiformes",
    family: "Columbidae",
    image: "assets/images/wwdo.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/ILUHRFXDNU/XC915046-White-winged-Dove-song-SAE-jun-21-842-DR0000_2069.mp3"
  },
  {
    name: "Yellow-billed Cuckoo",
    order: "cuculiformes",
    family: "Cuculidae",
    image: "assets/images/ybcu.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/LWQBBYMIQQ/XC684511-ewx211104_Yellow-billed%20Cuckoo.MP3"
  },
  {
    name: "Yellow-bellied Sapsucker",
    order: "piciformes",
    family: "Picidae",
    image: "assets/images/ybsa.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/CQVHGWMGMC/XC870691-ybsa020124.mp3"
  },
  {
    name: "Yellow-crowned Night-Heron",
    order: "pelecaniformes",
    family: "Ardeidae",
    image: "assets/images/ycnh.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/RFTXRYBVBX/XC644423-Yellow-crowned%20Night-Heron%2050%20yd%20flt%20-CA%2C%20TJ%20Estuary%2C%20May%2001%2C%202021%2C%200729%20AM.mp3"
  },
  {
    name: "Yellow Warbler",
    order: "passeriformes",
    family: "Parulidae",
    image: "assets/images/yewa.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/FHQVLXJQKW/XC794002-Yellow-Warbler-1.mp3"
  },
  {
    name: "Yellow-rumped Warbler",
    order: "passeriformes",
    family: "Parulidae",
    image: "assets/images/yrwa.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/EMFMDDVOUG/XC798976-230506-003YRWA-wtsp-ybsa-heth-amro-rcki-Milburn-rd-marsh-southnot-seen-0518.mp3"
  },
  {
    name: "Yellow-throated Vireo",
    order: "passeriformes",
    family: "Vireonidae",
    image: "assets/images/ytvi.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/GVVNEJJEGA/XC913379-YTVI_2024-05-01_Pass_Mountain_Overlook_Shenandoah_NP_Page_County_VA_1012(2).mp3"
  },
  {
    name: "Yellow-throated Warbler",
    order: "passeriformes",
    family: "Parulidae",
    image: "assets/images/ytwa.jpeg",
    audio: "https://xeno-canto.org/sounds/uploaded/UBZMIPGNRT/XC980688-1336613[1].mp3"
  }

];