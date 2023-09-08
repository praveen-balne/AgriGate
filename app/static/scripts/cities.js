var state_arr = new Array("Andaman & Nicobar", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra & Nagar Haveli", "Daman & Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu & Kashmir", "Jharkhand", "Karnataka", "Kerala", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Orissa", "Pondicherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttaranchal", "West Bengal");

var s_a = new Array();
s_a[0]="";
s_a[1]=" Alipur | Bamboo Flat | Calicut | Karen | Long Island | Malappuram | Manpur | Port Blair | Shadipur | Spike Island | West Island";
s_a[2]=" Adoni | Alur | Amalapuram | Anakapalle | Anantapur | Atmakur | Badvel | Banaganapalle | Bandar | Bapatla | Bhimavaram | Bobbili | Chinnor | Chirala | Chittoor | Chodavaram | Cuddapah | Cumbum | Divi | Donakonda | Garladinne | Giddalur | Godavari | Gudivada | Gudur | Guntur | Hindupur | Jammalamadugu |  Kadiri | Kaikaluru | Kakinada | Kalyandurg | Kamalapuram | Kanigiri | Kavali | Kodangal | Koduru | Koilkuntla | Kovvur | Kuppam | Kurnool | Madakasira | Mandapeta | Mangalagiri | Markapur | Marturu | Mylavaram | Nallacheruvu | Nandigama | Nandikotkur | Nandyal | Narasaraopet | Narsipatnam | Nellore | Ongole | Pakala | Parvathipuram | Peddapuram | Penukonda | Pithapuram | Proddatur | Pulivendla | Putturu | Ramachandrapuram | Rampachodavaram | Rayachoti | Razole | Repalle | Saluru | Sattenapalle | Sompeta | Srikakulam | Srisailam | Tadipatri | Tanuku | Tekkali | Tenali | Tuni | Uravakonda | Vayalpad | Vijayawada | Vinukonda | Visakhapatnam | Vizianagaram | Vuyyuru | Yerragondapalem";
s_a[3]=" Along | Anini | Bameng | Basar | Changlang | Dirang | Huri | Itanagar | Jairampur | Khonsa | Tali | Tawang | Tezu | Tirap";
s_a[4]=" Abhayapuri | Barama | Barpeta Road | Bijni | Bilasipara | Bokajan | Bokakhat | Boko | Bongaigaon | Cachar | Dhemaji | Dhubri | Dibrugarh | Digboi | Diphu | Goalpara | Gohpur | Golaghat | Guwahati | Hailakandi | Hajo | Halflong | Hojai | Howraghat | Jorhat | Karimganj | Kokrajhar | Lakhimpur | Maibong | Mangaldoi | Mariani | Marigaon | Moranhat | Morigaon | Nagaon | Nalbari | Rangapara | Sibsagar | Silchar | Tezpur | Tinsukia | Udalguri";
s_a[5]=" Amarpur | Araria | Areraj | Arrah | Arwal | Aurangabad | Bagaha | Banka | Banmankhi | Barauni | Barh | Barosi | Begusarai | Benipatti | Bettiah | Bhabhua | Bhagalpur | Bhojpur | Bikram | Bikramganj | Birpur | Buxar | Danapur | Darbhanga | Daudnagar | Dhaka | Dhamdaha | Dumraon | Ekma | Forbesganj | Gaya | Gogri | Gopalganj | Hajipur | Hathua | Hilsa | Jahanabad | Jainagar | Jamshedpur | Jamui | Jehanabad | Jhajha | Jhanjharpur | Kahalgaon | Katihar | Khagaria | Kishanganj | Lakhisarai | Madhepura | Madhubani | Maharajganj | Mairwa | Masrakh | Mohania | Monghyr | Motihari | Motipur | Munger | Muzaffarpur | Nabinagar | Narkatiaganj | Naugachia | Nawada | Pakridayal | Patna | Piro | Pupri | Purnia | Rafiganj | Ramnagar | Raniganj | Raxaul | Rohtas | Saharsa | Samastipur | Saran | Sasaram | Sheikhpura | Sheohar | Sherghati | Singhwara | Sitamarhi | Siwan | Sonepur | Supaul | Thakurganj | Vaishali | Wazirganj";
s_a[6]=" Chandigarh";
s_a[7]=" Ambikapur | Arang | Baikunthpur | Balod | Balrampur | Bemetara | Bhatapara | Bhilai | Bijapur | Bilaspur | Bodla | Dantewada | Dhamtari | Dongargarh | Durg | Gariaband | Gharghoda | Jagdalpur | Janjgir | Jarwa | Jashpurnagar | Kanker | Kawardha | Kondagaon | Konta | Korba | Korea | Kota | Kurud | Lormi | Mahasamund | Manpur | Mungeli | Nagri | Narainpur | Narayanpur | Pali | Pandaria | Pasan | Patan | Pathalgaon | Pendra | Pratappur | Premnagar | Raigarh | Raipur | Rajnandgaon | Rajpur | Ramchandrapur | Saraipali | Sarona | Semaria | Sitapur | Surajpur | Udaipur";
s_a[8]=" Amal | Amli | Chikhli | Khadoli | Kharadpada | Kherdi | Luari | Mashat | Saili | Sili | Silvassa | Vasona ";
s_a[9]=" Daman | Diu | Nagwa ";
s_a[10]=" East Delhi | New Delhi ";
s_a[11]=" Canacona | Candolim | Chinchinim | Cortalim | Goa | Jua | Madgaon | Mapuca | Marmagao | Panji | Ponda | Sanvordem ";
s_a[12]=" Ahmedabad | Ahwa | Amod | Amreli | Anand | Anjar | Babra | Bardoli | Baroda | Barwala | Bayad | Bhanvad | Bharuch | Bhavnagar | Bhiloda | Bhuj | Borsad | Botad | Chanasma | Chhota Udaipur | Chotila | Dabhoi | Dahod | Damnagar | Dang | Dasada | Deesa | Dhandhuka | Dhanera | Dharampur | Dhari | Dholka | Dhoraji | Dhrangadhra | Dhrol | Dwarka | Gadhada | Gandhi Nagar | Gariadhar | Godhra | Gondal | Halol | Halvad | Harij | Himatnagar | Idar | Jambusar | Jamnagar | Jasdan | Jetpur | Jhagadia | Junagadh | Junagarh | Kalol | Keshod | Kheda | Khedbrahma | Kheralu | Kodinar | Kutiyana | Lakhtar | Lalpur | Limbdi | Limkheda | Lunavada | Mahuva | Maliya | Malpur | Manavadar | Mandvi | Mangrol | Modasa | Morvi | Muli | Mundra | Nadiad | Nakhatrana | Narmada | Nizar | Okha | Paddhari | Padra | Palanpur | Palitana | Patan | Porbandar | Prantij | Radhanpur | Rajkot | Rajpipla | Ranavav | Sanand | Sankheda | Savarkundla | Savli | Sayan | Sayla | Sidhpur | Sihor | Sojitra | Surat | Surendranagar | Talaja | Tharad | Thasra | Upleta | Vadgam | Vadodara | Valia | Vallabhipur | Valod | Valsad | Vanthali | Vapi | Vav | Veraval | Vijapur | Viramgam | Visavadar | Visnagar | Vyara | Waghodia | Wankaner ";
s_a[13]=" Ambala | Bahadurgarh | Barara | Barwala | Bawal | Bhiwani | Dabwali | Ellenabad | Faridabad | Fatehabad | Gharaunda | Gohana | Gurgaon | Hansi | Hisar | Jagadhari | Jhajjar | Jind | Kaithal | Kalanaur | Kalanwali | Kalka | Karnal | Kurukshetra | Loharu | Mahendragarh | Meham | Naraingarh | Narnaul | Narwana | Nilokheri | Nuh | Palwal | Panchkula | Panipat | Pehowa | Ratia | Rewari | Rohtak | Safidon | Sirsa | Sonipat | Tohana | Yamunanagar ";
s_a[14]=" Amb | Arki | Banjar | Bilaspur | Chamba | Dalhousie | Dehra Gopipur | Hamirpur | Kangra | Kullu | Mandi | Nahan | Nalagarh | Nurpur | Palampur | Pangi | Pooh | Rajgarh | Rohru | Shimla | Sirmaur | Solan | Sundernagar | Theog | Udaipur | Una";
s_a[15]=" Akhnoor | Anantnag | Bandipur | Baramulla | Budgam | Doda | Gulmarg | Jammu | Kargil | Kathua | Kishtwar | Kulgam | Kupwara | Leh | Nagrota | Nowshera | Pahalgam | Patnitop | Poonch | Pulwama | Rajouri | Ramban | Ramnagar | Reasi | Samba | Srinagar | Udhampur ";
s_a[16]=" Bagodar | Barhi | Barkagaon | Barwadih | Basia | Bermo | Bhandaria | Bokaro | Bundu | Chaibasa | Chainpur | Chandil | Chatra | Daltonganj | Deoghar | Dhanbad | Dumka | Dumri | Garhwa | Garu | Ghatsila | Giridih | Godda | Govindpur | Gumla | Hazaribagh | Hunterganj | Ichak | Jamshedpur | Jamtara | Japla | Jhinkpani | Khunti | Latehar | Lohardaga | Madhupur | Mandu | Manoharpur | Muri | Nala | Noamundi | Pakur | Patan | Rajmahal | Ramgarh | Ranchi | Sahibganj | Saraikela | Simaria | Simdega ";
s_a[17]=" Afzalpur | Aland | Alur | Anekal | Ankola | Arsikere | Athani | Aurad | Bableshwar | Badami | Bagalkot | Bagepalli | Bangalore | Bantwal | Basavakalyan | Basavapatna | Belgaum | Bellary | Belur | Bhadravati | Bhalki | Bhatkal | Bidar | Bijapur | Challakere | Chamrajnagar | Channagiri | Channapatna | Channarayapatna | Chikkanayakanahalli | Chikkodi | Chikmagalur | Chincholi | Chintamani | Chitradurga | Davanagere | Dharwad | Doddaballapur | Gadag | Gokak | Gubbi | Gulbarga | Gundlupet | Haliyal | Hampi | Hangal | Harapanahalli | Hassan | Haveri | Hebri | Hirekerur | Hiriyur | Holalkere | Honnali | Hosadurga | Hosakote | Hosanagara | Hospet | Hubli | Hukkeri | Hungund | Hunsur | Indi | Jagalur | Jamkhandi | Joida | Kadur | Kamalapur | Kanakapura | Kargal | Karkala | Karwar | Khanapur | Kolar | Kollegal | Koppa | Koppal | Kudligi | Kumta | Kundgol | Kunigal | Kurugodu | Lingsugur | Madikeri | Malavalli | Malur | Mandya | Mangalore | Manipal | Manvi | Mashal | Muddebihal | Mudhol | Mudigere | Mulbagal | Mundargi | Mysore | Nagamangala | Nanjangud | Nargund | Navalgund | Nelamangala | Pandavapura | Pavagada | Puttur | Raibag | Raichur | Ranebennur | Ron | Sagar | Sakleshpur | Salkani | Sandur | Saundatti | Savanur | Sedam | Shahapur | Shikaripura | Shimoga | Shirahatti | Shorapur | Siddapur | Sidlaghatta | Sindagi | Sindhanur | Sira | Sirsi | Siruguppa | Somwarpet | Sorab | Sringeri | Srirangapatna | Sullia | Tarikere | Tiptur | Tumkur | Turuvekere | Udupi | Virajpet | Wadi | Yellapur ";
s_a[18]=" Adoor | Alappuzha | Alathur | Alleppey | Alwaye | Attingal | Badagara | Calicut | Cannanore | Ernakulam | Idukki | Irinjalakuda | Kalpetta | Kanhangad | Kannur | Kochi | Koduvayur | Kollam | Kottayam | Kovalam | Kozhikode | Kunnamkulam | Malappuram | Manjeri | Mavelikkara | Munnar | Muvattupuzha | Palai | Palakkad | Palghat | Pathanamthitta | Payyanur | Perinthalmanna | Perumbavoor | Punalur | Quilon | Ranni | Shertallai | Shoranur | Taliparamba | Tellicherry | Thiruvananthapuram | Thodupuzha | Thrissur | Tirur | Tiruvalla | Trichur | Trivandrum | Uppala ";
s_a[19]=" North Island ";
s_a[20]=" Agar | Ajaigarh | Alirajpur | Amarpatan | Ambah | Anuppur | Arone | Ashoknagar | Ashta | Badnawar | Bagli | Baihar | Balaghat | Baldeogarh | Baldi | Banda | Bareli | Baroda | Barwani | Begamganj | Beohari | Berasia | Betul | Bhainsdehi | Bhander | Bhanpura | Bhikangaon | Bhind | Bhitarwar | Bhopal | Biaora | Bijawar | Bijaypur | Bina | Birsinghpur | Budhni | Burhanpur | Buxwaha | Chanderi | Chaurai | Chhatarpur | Chhindwara | Chicholi | Churhat | Dabra | Damoh | Datia | Deori | Depalpur | Dewas | Dhar | Dharampuri | Dindori | Gadarwara | Gairatganj | Gohad | Gopalganj | Guna | Gwalior | Harda | Harrai | Harsud | Hatta | Hoshangabad | Ichhawar | Indore | Isagarh | Itarsi | Jabalpur | Jagdalpur | Jaisinghnagar | Jaithari | Jaitpur | Jamai | Jaora | Jatara | Jawad | Jhabua | Jobat | Jora | Kannod | Kareli | Karera | Karhal | Karpa | Kasrawad | Katangi | Katni | Khachrod | Khajuraho | Khandwa | Khaniadhana | Khargone | Khategaon | Khetia | Khilchipur | Khirkiya | Khurai | Kolaras | Kotma | Kukshi | Kundam | Lakhnadon | Lanji | Maheshwar | Maihar | Majholi | Malhargarh | Manasa | Manawar | Mandla | Mandsaur | Manpur | Mauganj | Mawai | Mhow | Morena | Multai | Mungaoli | Nagod | Nainpur | Narsinghpur | Narwar | Nateran | Niwari | Pachmarhi | Pandhana | Pandhurna | Panna | Parasia | Patan | Patharia | Pawai | Petlawad | Piparia | Punasa | Raghogarh | Raghunathpur | Rahatgarh | Raisen | Rajgarh | Rajpur | Ratlam | Rehli | Rewa | Sabalgarh | Sagar | Sailana | Sanwer | Sarangpur | Sardarpur | Satna | Sehore | Sendhwa | Seondha | Seoni | Shahdol | Shahnagar | Shahpur | Shajapur | Sheopur | Shivpuri | Shujalpur | Sidhi | Sihora | Silwani | Singrauli | Sironj | Sitamau | Sohagpur | Susner | Tamia | Tarana | Tendukheda | Teonthar | Thandla | Tikamgarh | Udaipura | Ujjain | Umaria | Vidisha | Waraseoni ";
s_a[21]=" Achalpur | Aheri | Ahmednagar | Ahmedpur | Ajara | Akkalkot | Akola | Akot | Amagaon | Amalner | Ambad | Amravati | Arvi | Ashti | Aurangabad | Ausa | Babhulgaon | Balapur | Baramati | Barsi | Beed | Bhandara | Bhiwandi | Bhiwapur | Bhokar | Bhokardan | Bhoom | Bhor | Bhusawal | Buldhana | Butibori | Chalisgaon | Chandgad | Chandrapur | Chandur | Chikhali | Chinchwad | Chiplun | Chopda | Dahanu | Dapoli | Daryapur | Daund | Degloor | Deori | Dhanora | Dhule | Dhulia | Digras | Dindori | Gadhinglaj | Gangakhed | Gangapur | Gevrai | Ghatanji | Gondia | Goregaon | Guhagar | Hadgaon | Hinganghat | Hingoli | Igatpuri | Indapur | Islampur | Jalgaon | Jalna | Jamkhed | Junnar | Kagal | Kaij | Kalamb | Kalamnuri | Kalmeshwar | Kalwan | Kalyan | Kamptee | Kankavali | Kannad | Karad | Karjat | Karmala | Katol | Kedgaon | Khamgaon | Khed | Khopoli | Kinwat | Kolhapur | Kopargaon | Koregaon | Kudal | Kusumba | Langa | Latur | Lonar | Lonavala | Madha | Mahabaleshwar | Mahad | Mahagaon | Malegaon | Malgaon | Malkapur | Mangaon | Manmad | Mohadi | Mohol | Mokhada | Morshi | Mouda | Mukhed | Mul | Mumbai | Murbad | Murud | Nagpur | Nandgaon | Nandurbar | Narkhed | Nashik | Ner | Nilanga | Niphad | Osmanabad | Pachora | Paithan | Palghar | Pali | Pandharpur | Panhala | Paranda | Parbhani | Parola | Partur | Patan | Pathardi | Pathari | Patoda | Pauni | Pen | Phaltan | Pimpalner | Pirangut | Poladpur | Pune | Pusad | Pusegaon | Radhanagar | Rahuri | Rajapur | Rajgurunagar | Rajura | Ramtek | Ratnagiri | Raver | Risod | Roha | Sakri | Sangamner | Sangli | Sangola | Sanguem | Saoner | Saswad | Satana | Satara | Sawantwadi | Shahada | Shahapur | Shirol | Shirpur | Shirur | Shirwal | Sholapur | Shrigonda | Sillod | Sindkheda | Sinnar | Talasari | Taloda | Tasgaon | Thane | Trimbak | Tuljapur | Tumsar | Udgir | Umarkhed | Vengurla | Vijapur | Vita | Wada | Wai | Wani | Wardha | Warora | Washim | Yavatmal | Yawal | Yeola ";
s_a[22]=" Bishnupur | Chandel | Churachandpur | Imphal | Jiribam | Kakching | Mao | Thoubal ";
s_a[23]=" Baghmara | Cherrapunjee | Nongpoh | Nongstoin | Shillong | Tura";
s_a[24]=" Aizawl | Kolasib | Lawngtlai | Lunglei | Mamit | Saiha | Serchhip";
s_a[25]=" Dimapur | Kohima | Mokokchung | Mon | Phek | Tuensang | Wokha | Zunheboto ";
s_a[26]=" Angul | Aska | Athmallik | Attabira | Balangir | Balasore | Baleswar | Balugaon | Barbil | Bargarh | Baripada | Barkot | Basta | Bhadrak | Bhanjanagar | Bhawanipatna | Bhubaneswar | Birmaharajpur | Buguda | Chandbali | Cuttack | Deogarh | Dharamgarh | Dhenkanal | Digapahandi | G. Udayagiri | Gajapati | Ganjam | Gudari | Gunupur | Hindol | Jagatsinghapur | Jajpur | Jharsuguda | Kamakhyanagar | Kantamal | Kashipur | Kendrapara | Khordha | Khurda | Koraput | Kuchinda | Laxmipur | Malkangiri | Nandapur | Narsinghpur | Nayagarh | Padampur | Patnagarh | Pattamundai | Phulbani | Puri | Rairangpur | Rayagada | Rourkela | Sambalpur | Sohela | Sonapur | Soro | Subarnapur | Sunabeda | Talcher | Titlagarh | Udala ";
s_a[27]=" Karaikal | Mahe | Pondicherry | Villianur | Yanam ";
s_a[28]=" Abohar | Ajnala | Amritsar | Balachaur | Barnala | Batala | Bathinda | Chandigarh | Dasua | Dinanagar | Faridkot | Fatehgarh Sahib | Fazilka | Ferozepur | Hoshiarpur | Jagraon | Jalandhar | Kapurthala | Kharar | Kotkapura | Ludhiana | Malaut | Malerkotla | Mansa | Moga | Nabha | Nakodar | Nangal | Nawanshahr | Pathankot | Patiala | Patti | Phagwara | Phillaur | Rajpura | Raman | Rayya | Ropar | Rupnagar | Samana | Samrala | Sangrur | Sardulgarh | Sultanpur Lodhi | Sunam | Tarn Taran | Zira ";
s_a[29]=" Abu Road | Ahore | Ajmer | Aklera | Alwar | Amber | Amet | Anupgarh | Asind | Bali | Bamanwas | Banera | Bansur | Banswara | Baran | Bari | Barmer | Baseri | Bassi | Baswa | Bayana | Beawar | Begun | Behror | Bhadra | Bharatpur | Bhilwara | Bhinmal | Bikaner | Bilara | Bundi | Chhabra | Chirawa | Churu | Dausa | Deeg | Degana | Deogarh | Deoli | Desuri | Digod | Dudu | Dungarpur | Dungla | Fatehpur | Gangapur | Hanumangarh | Hindaun | Hindoli | Hurda | Jahazpur | Jaipur | Jaisalmer | Jalore | Jhalawar | Jhunjhunu | Jodhpur | Kaman | Kapasan | Karauli | Kekri | Keshoraipatan | Khetri | Kishanganj | Kishangarh | Kota | Kotputli | Kotra | Kotri | Kushalgarh | Ladnun | Lalsot | Malpura | Mandal | Mandalgarh | Mandawar | Mangrol | Merta | Nadbai | Nagaur | Nainwa | Nasirabad | Nathdwara | Nawa | Neem Ka Thana | Nimbahera | Nohar | Nokha | Padampur | Pali | Parbatsar | Phalodi | Pilani | Pindwara | Pirawa | Pokaran | Pratapgarh | Raipur | Raisinghnagar | Rajgarh | Rajsamand | Ramganj Mandi | Ramgarh | Rashmi | Ratangarh | Rupbas | Sagwara | Sahabad | Sanchore | Sangaria | Sangod | Sarada | Sardarshahar | Sarwar | Sawai Madhopur | Shahapura | Sheoganj | Shergarh | Sikar | Sirohi | Siwana | Sojat | Sri Dungargarh | Sri Ganganagar | Sri Madhopur | Sujangarh | Taranagar | Tibbi | Tijara | Todaraisingh | Tonk | Udaipur | Udaipurwati ";
s_a[30]=" Dikchu | Gangtok | Hema | Kerung | Lachen | Lema | Mangan | Namchi | Nanga | Nantang | Naya Bazar | Pemayangtse | Rangli | Sakyong | Singtam | Soreng | Tsetang | Yangang ";
s_a[31]=" Ambasamudram | Arakandanallur | Arantangi | Aravakurichi | Ariyalur | Arni | Attur | Batlagundu | Bhavani | Chengalpattu | Chengam | Chennai | Chidambaram | Chingleput | Coimbatore | Courtallam | Cuddalore | Cumbum | Devakottai | Dharmapuri | Dindigul | Erode | Gingee | Gobichettipalayam | Gudalur | Gudiyatham | Harur | Hosur | Kanchipuram | Kangayam | Kanyakumari | Karaikal | Karaikudi | Karur | Keeranur | Kodaikanal | Kodumudi | Kotagiri | Kovilpatti | Krishnagiri | Kulithalai | Kumbakonam | Kuzhithurai | Madurai | Manamadurai | Mannargudi | Mayiladuthurai | Mettupalayam | Mulanur | Musiri | Nagapattinam | Namakkal | Nanguneri | Natham | Neyveli | Ooty | Palacode | Palani | Papanasam | Perambalur | Perundurai | Pollachi | Polur | Pondicherry | Ponneri | Pudukkottai | Ramanathapuram | Rasipuram | Salem | Sivaganga | Sivakasi | Tenkasi | Thanjavur | Theni | Thoothukudi | Tindivanam | Tiruchengode | Tiruchirappalli | Tirupathur | Tirupur | Tiruttani | Tiruvallur | Tiruvannamalai | Trichy | Uthangarai | Vaniyambadi | Vedasandur | Vellore | Velur | Villupuram | Virudhunagar ";
s_a[32]=" Adilabad | Alampur | Andole | Asifabad | Banswada | Bellampalli | Bhadrachalam | Bhainsa | Bhongir | Bodhan | Chevella | Dichpalli | Eluru | Gadwal | Huzurnagar | Hyderabad | Ibrahimpatnam | Jagtial | Jangaon | Karimnagar | Khammam | Kothagudem | Madhira | Madnur | Mahabubabad | Mancherial | Manthani | Medak | Metpalli | Nagarkurnool | Nalgonda | Narayanpet | Narsapur | Nirmal | Nizamabad | Pargi | Peddapalli | Rayadurg | Sangareddy | Sathupalli | Shadnagar | Siddipet | Tanduru | Warangal | Yellandu | Zahirabad"
s_a[33]=" Agartala | Ambasa | Belonia | Kailashahar | Khowai ";
s_a[34]=" Achhnera | Agra | Akbarpur | Aliganj | Aligarh | Allahabad | Amethi | Amiliya | Amroha | Anola | Atrauli | Auraiya | Azamgarh | Baberu | Badaun | Baghpat | Bagpat | Baheri | Bahraich | Ballia | Balrampur | Banda | Bansgaon | Bansi | Barabanki | Bareilly | Basti | Bhadohi | Bharthana | Bharwari | Bhognipur | Bidhuna | Bikapur | Bilari | Bilgram | Bilhaur | Bindki | Bisalpur | Bisauli | Biswan | Budaun | Budhana | Bulandshahr | Chakia | Chandauli | Charkhari | Chhata | Chhibramau | Chirgaon | Dadri | Dalmau | Dataganj | Debai | Deoband | Deoria | Derapur | Dhampur | Dudhi | Etah | Etawah | Faizabad | Farrukhabad | Fatehpur | Firozabad | Ghatampur | Ghaziabad | Ghazipur | Ghosi | Gonda | Gorakhpur | Gunnaur | Hamirpur | Hapur | Hardoi | Harraiya | Hasanganj | Hasanpur | Hathras | Jalalabad | Jalaun | Jalesar | Jansath | Jarar | Jasrana | Jaunpur | Jhansi | Kadipur | Kaimganj | Kairana | Kaisarganj | Kalpi | Kannauj | Kanpur | Karhal | Kasganj | Kaushambi | Kerakat | Khaga | Khair | Khalilabad | Kheri | Konch | Kunda | Kushinagar | Lalganj | Lalitpur | Lucknow | Maharajganj | Mahoba | Mainpuri | Malihabad | Math | Mathura | Mau | Maudaha | Mawana | Meerut | Meja | Mirzapur | Misrikh | Modinagar | Moradabad | Musafirkhana | Muzaffarnagar | Nagina | Najibabad | Nakur | Nanpara | Naraini | Naugarh | Nawabganj | Noida | Orai | Padrauna | Pahasu | Patti | Phulpur | Pilibhit | Pratapgarh | Puranpur | Purwa | Rampur | Rath | Robertsganj | Sadabad | Safipur | Sagri | Saharanpur | Sahaswan | Sahjahanpur | Saidpur | Salempur | Salon | Sambhal | Sandila | Sardhana | Shahabad | Shahganj | Shahjahanpur | Shikohabad | Sidhauli | Sikandra Rao | Sikandrabad | Sitapur | Siyana | Soraon | Sultanpur | Tanda | Tarabganj | Tilhar | Unnao | Utraula | Varanasi | Zamania ";
s_a[35]=" Almora | Bageshwar | Bhatwari | Chakrata | Champawat | Dehradun | Deoprayag | Dharchula | Dunda | Haldwani | Haridwar | Joshimath | Kashipur | Khatima | Kichha | Lansdown | Mussoorie | Nainital | Pantnagar | Pithoragarh | Purola | Rajgarh | Ranikhet | Roorkee | Rudraprayag | Uttarkashi ";
s_a[36]=" Adra | Amlagora | Arambagh | Asansol | Balurghat | Bankura | Bardhaman | Basirhat | Birpara | Bolpur | Calcutta | Canning | Contai | Dantan | Darjeeling | Dhaniakhali | Dinajpur | Dinhata | Durgapur | Gangajalghati | Gangarampur | Ghatal | Guskara | Habra | Haldia | Harirampur | Howrah | Islampur | Jalpaiguri | Jhargram | Kalchini | Kalimpong | Kalna | Kandi | Karimpur | Katwa | Kharagpur | Khatra | Krishnanagar | Malda | Medinipur | Mirzapur | Murshidabad | Nalhati | Nayagarh | Raiganj | Rampur Hat | Ranaghat | Siliguri | Suri | Takipur | Tamluk";

function print_state(state_id){
	// given the id of the <select> tag as function argument, it inserts <option> tags
	var option_str = document.getElementById(state_id);
	option_str.length=0;
	option_str.options[0] = new Option('Select State','');
	option_str.selectedIndex = 0;
	for (var i=0; i<state_arr.length; i++) {
		option_str.options[option_str.length] = new Option(state_arr[i],state_arr[i]);
	}
}

function print_city(city_id, city_index){
	var option_str = document.getElementById(city_id);
	option_str.length=0;	// Fixed by Julian Woods
	option_str.options[0] = new Option('Select City','');
	option_str.selectedIndex = 0;
	var city_arr = s_a[city_index].split("|");
	for (var i=0; i<city_arr.length; i++) {
		option_str.options[option_str.length] = new Option(city_arr[i],city_arr[i]);
	}
}
