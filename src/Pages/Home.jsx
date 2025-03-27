import { useState, useEffect } from "react";
import Navbar from "../Components/Navbr";
import { ArrowRight, ArrowUp, Loader, MessageCircle } from "lucide-react";
import Blogs from "../Components/Blogs";
import Imp_of_Words from "../Components/Imp_of_Words";


const Home = () => {
    const [language, setLanguage] = useState("mr");

    const [isVisible, setIsVisible] = useState(false);
    const [loading, setLoading] = useState(true);

    // Show button after scrolling down 200px
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);

        const handleScroll = () => setIsVisible(window.scrollY > 200);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Scroll to top function
    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });


    const content = {
        en: {
            title1: `NOWSBANSIU COMPANY`,
            title2: `"Words without dictionary" of "Natural Origin Word Science"  `,
            sub_heading: `  By examining the science of natural root words, we aim to transform fundamental concepts into more impactful and expressive words, rather than leaving them as mere ideas. This process enhances the power, structure, and beauty of language, leading to the pursuit of truth and wisdom.
            
            Through the application of Shabdakosha Vinashabd sound therapy, we explore how human longevity, well-being, and beauty can be enhanced. By integrating self-awareness and spiritual realization, our approach enables individuals to attain a fulfilling, joyful, and enlightened life, ultimately guiding them towards a century-long, harmonious existence.`,
            headingDetails: `"Treatment through Pronunciation"`,
            details: ` We, the people of Bharat (India) and the Mahabharata lineage, are the inheritors of eternal truth and are committed to awakening the spirit of truth by unveiling timeless wisdom. Through the actions and reactions of true words, as well as processes and counter-processes, we inspire scientific unity in global thought using natural words that enhance the power, structure, and beauty of language in the pursuit of truth and wisdom.
            
            In our sacred work, sound, rhythm, and meaning play a crucial role. Using the scientifically unexplored power of phonetic vibrations, we activate every organ of the human body, accelerating their movements and functioning at an enhanced pace. Through pronunciation-based healing, we stimulate the micro and ultra-micro pores of internal organs, enabling a natural bodily exercise that ignites one's life force, leading to self-illumination ('Swayam Deep Bhava').
            
            Words that have been refined and transformed through true phonetics can be applied to poetry, ghazals, songs, qawwalis, essays, literature, dohas, abhangas, aartis, prayers, couplets, shlokas, meters, and even screenwriting, TV series, short films, and cinematic writing. By converting conceptualized thoughts into true phonetic words, we can make them linguistically and rhythmically readable, engaging, and impactful.
            
            With a scientific perspective and an unwavering commitment to truth and equality, we analyze and compose literature that resonates with global audiences, offering them physical, intellectual, and emotional well-being through the power of words. Only after self-experiencing its benefits, do we extend its impact to others, ensuring that our work is authentic and effective.
            
            To understand every language and its literature, we utilize innovative linguistic knowledge, integrating communication skills and creativity to connect with the world. Our approach ensures that each word from global lexicons is scientifically interpreted and aligned with universal truth and equality.
            
            Through 'Natural Root Word Science', we supply refined phonetic words ('Shabdakosha Vinashabd') via 'Shabdpathy'—an approach that provides language-based healing and knowledge transfer with the prior consent of the recipient.`,
            latest: "Our Latest Writtings",
            imgAbout: "The concept of NOWSBANSIU originates from the idea of natural word formation through letters, inspired by the curves, twists, and ups and downs of the dense forest paths in the Melghat region. This symbolizes the creation of fundamental words that uphold equality-based truth and truth-based equality, envisioning a scientifically advanced India rooted in the wisdom of the Mahabharata.As a representation of this vision, the Bansi Group's students symbolically showcase the unity and integration of the seven religions, offering a glimpse of the Melghats harmony through a remarkable Meghdhavi moment.",
            dohe: "Importance of Words",
            scan: "Experience the magic of words in a new way! Using natural words, I strive to explore the power, structure, and beauty of language in the quest for truth. 📌 Scan now and immerse yourself in the art of language!",
            lastDetails: `That is why the universal saint Kabir Maharaj also, through Hindi, speaks of "Adika", meaning from the primeval mute human to the primeval root human, describing how the original inhabitants pronounced words and how human life (Prana) existed.

            By eliminating and sentencing to death the biological and medicinal words that were originally enshrined in human life (Prana), new non-biological words were introduced into the mouths of Indians@Mahabharatians, instilling fear (Bhiv) in humanity.
            
            As a result, Saint Kabir Maharaj once again recites a Dohā (couplet), highlighting the impact of these changes.   :-       `,
            lastDetailsheading: `"Words are our beginning, words are the essence of life!
            Yet, by destroying those very words, we search for existence. !!"`,
            lastDetails2: ` Maharashtrian saint Avadhoot Maharaj (Vithoba Savanga) also followed the experiences of Saint Kabir Maharaj and, through his own realizations, orally conveyed the natural root words he received in Marathi. Due to the absence of a true physician of words, there is a possibility that word-based concepts may disappear. This disappearance has harmful effects on the human body, leading to various diseases. He explained how the corruption of words can cause a metaphorical "tuberculosis" of the body, while the righteous use of words acts as a medicine, reducing the disease of ego-driven doubt. Through oral tradition, Avadhoot Maharaj used his devotional songs (bhajans) to emphasize the power, significance, and scientific wisdom of words. He aimed to enhance people's auditory perception and awaken them to self-enlightenment ("Swayam Deep Bhav") through these songs.

            He sang and spoke in his devotional bhajans:
            "Words drowned, imagination perished! The arrogant fell ill with tuberculosis!!
            Medicine was given, and the disease of doubt vanished! The word market faded, and life became silent!!
            The Guru, the true physician, was found! And thus, the illness did not afflict us!!
            The Guru instills devotion through listening! He provides daily contemplation and insightful guidance!!"
            
            Many great historical figures, saints, and philosophers—including Gautama Buddha, Mahavira Jain, Prophet Muhammad, Jesus Christ, Sufi saints, Guru Nanak, Chanakya, Emperor Ashoka, Saint Kabir Maharaj, Jagadguru Sant Tukaram, Guru Gobind Singh, Rashtrasant Tukdoji Maharaj, Mahatma Jyotirao Phule, Sant Ravidas, Chhatrapati Shivaji Maharaj, Emperor Akbar, Samarth Ramdas Swami, Bal Gangadhar Tilak, Sant Nivrutti Maharaj, Sant Dnyaneshwar, Shahu Maharaj, Swami Vivekananda, Sane Guruji, Dr. Babasaheb Ambedkar, and Sant Gadge Baba—have all taught the significance of learning words in their true essence. However, because previous generations' teachings were not properly understood or continuously listened to, people failed to grasp the true meaning of "learning."
            
            Thus, innovative and balanced word-based education is not just desirable but essential for life itself. If words vanish, their associated ideas will cease to exist as mere concepts. Instead, those ideas must be transformed into "Satkalpana" (righteous thoughts) and put into practice through the systematic study of "Shabdakosha-Vina-Shabda" (the science of words beyond dictionaries). If people truly understand the righteous essence of words, then the ongoing conflicts, disputes, and debates over controversial words will no longer arise.
            
            According to Saint Avadhoot Maharaj, when the market of words fades, it is akin to the setting of the moon, sun, and stars, which brings darkness. If the science of words and knowledge disappears, then blind faith may be mistaken for true faith, and vice versa. Many of our ancestors' words have either disappeared or been altered. If they are restored to their original form, then the pronunciation of these Shabdakosha-Vina-Shabda will serve as the first and ultimate remedy for healing. However, despite the existence of words, their true meaning has been lost, leading to a shortened human lifespan and an increase in untimely deaths.`,
            lastDetailsheading2: `देहाची तिजोरी, भक्तिचाच ठेवा।
            उघड दार देवा आता, उघड दार देवा ।।`,
            lastDetails3: `Today, disputes arise over caste, religion, sects, temples, mosques, monasteries, churches, gurdwaras, dargahs, and even the 33 crore deities, gods, and divine figures. These conflicts are driven solely by words—names and places—which lead to arguments and clashes. However, without realizing it, these very words, when pronounced through sound therapy, can serve as treatment and first aid by stimulating micro and ultra-micro pores in the human body through internal organ exercises. Yet, due to the lack of such treatments, the human body fails to reach its optimal state through words, leaving us all afflicted by various chronic diseases.

            Thus, not only in India but across the entire global social system, a lack of awareness has resulted in widespread ailments. Disease-stricken individuals often rely on expensive medicines and surgeries, but even these treatments sometimes fail. Eventually, they become silent and mute, losing their ability to express themselves. In the end, they must abandon their accumulated wealth, luxuries, properties, and riches, facing an untimely death. Instead of succumbing to this fate, one must seek timely treatment through the pronunciation of "Shabdakosha-Vina-Shabd" (words beyond the dictionary), which serves as an immediate remedy.
            
            For Indians, Hindustanis, and Bharatiyas, strengthening human health is possible through word science and knowledge, which enhances immunity and prevents diseases. By implementing a structured campaign of word-based education, we can reclaim the unity and strength once shared by the Indian subcontinent, including Afghanistan (1876), Burma (1935), Sri Lanka (1937), Bhutan (1906), Nepal (1907), and Pakistan (which included Bangladesh until 1971) (1947). Through this self-empowerment, all will join forces to resist division and conflict.
            
            The loss incurred due to a lack of word-based education and structured verbal exercise has been enormous. However, with collective efforts, we can prevent further damage. As the saying goes:
            
            "We will only speak the truth and nothing but the truth."
            
            But for this statement to be successfully realized, it is essential to adopt the innovative "Natural Root Word Science" (Shabdakosha-Vina-Shabd) "Shabdopathy", where word knowledge and word science serve as both first aid and medical treatment for the human body. Through word pronunciation therapy, the history of our ancestors, the scientific understanding of words, their actions and reactions, and the processes that shape them can be explored.
            
            Therefore, I urge everyone to contribute to this cause by learning about their country, city, village, and even disputed names across various global languages, to scientifically analyze the significance of words, places, and names. By self-empowerment, not only can we attain longevity, but we can also achieve a century-long lifespan. The daily use of words from "Shabdakosha-Vina-Shabd", based on predefined structured word flow and principles, will ultimately lead to reserved and preserved sensitive words, ensuring a sustainable and enriched verbal system.
            
            Namah Satah Kalah!
            A Hundredfold Salutations !!!`,
            lastDetailsheading3: `देहाची तिजोरी, भक्तिचाच ठेवा।
            उघड दार देवा आता, उघड दार देवा ।।`,
            lastDetails4: ``,
            lastDetailsheading4: ``,
            lastDetails4: ``,
        },
        mr: {
            title1: `नाउजबंन्सीयु कंपनी`,
            title2: `"नैसर्गिक मुळ शब्द विज्ञान" ची 'शब्दकोषविनाशब्द' "शब्दपॅथी"`,
            sub_heading: ` नैसर्गिक मुळ शब्दांचे विज्ञान तपासून सतकल्पनांना कल्पनाच न ठेवता त्या कल्पनाशक्तीला अधिक प्रभावी शब्दांमध्ये रुपांतरित करून भाषेची शक्ती, रचना आणि सौंदर्याचा शोध,सत्यशोध शोधून मानवी सौंदर्यात वृद्धी व मानवास दिर्घायुष्यी कसे करता येईल याचा सत्यशोधकीय शोध शब्दकोषविनाशब्द ध्वनी उच्चारा व्दारेच उपचार केल्यास मानवी जीवनात आत्मज्ञानानं प्रेरित होऊन साक्षात्कारी आनंदी मेघ्धावी जिवन जगण्याची कला, तृप्ती,आनंदी व शतकायूष्यी जिवन कसे जगता येईल याचा प्रयत्न करत असतो."`,
            headingDetails: `"उच्चारा   व्दारेच  उपचार"`,
            details: ` आम्ही भारतिय @ महाभारतिय लोक व भारत देश एक शास्वत सत्याचे धनी असल्याने  सत्याच्या भावना जागृत करण्यासाठी शास्वत सत्य प्रकट करत असतो. सतशब्दांच्या कृती प्रतिकृतीं, प्रक्रिया प्रतिप्रक्रियांव्दारे  वैज्ञानिक एकतेच्या वैश्विक कल्पनांना सतकल्पनाशक्तीत प्रेरणा देणारे नैसर्गिक शब्द वापरून भाषेची शक्ती, रचना आणि सौंदर्याचा सत्यशोध  शोधण्याचा प्रयत्नही करत असतो. आमच्या   कार्यांचे  सत्कार्यामध्ये  स्वर , लय व  अर्था व्दारेच सतशब्दीत शब्दकोषविनाशब्दांनी मानवी शरिरातील होत असलेल्या हालचाली अधिक गतीने सक्रिय  करण्यासाठी अविष्कारीत ध्वनी उच्चारा व्दारेच मानवी शरिरातील सर्व अवयवांचे सुक्ष्म अतीसुक्ष्म छिद्रांची उघडझाप अधिक तिव्र गतीने सक्रिय होउन उच्चारा व्दारेच उपचार करतील .  अशाप्रकारे मानवी शरिरातील सर्व अंतर्गत अवयवांचा व्यायाम नैसर्गिक पद्धतीने स्वतःव्दारे स्वतःचा प्राण    'स्वयं दिप भव'  करण्यासाठी प्रभावी  प्रक्रियाप्रतिप्रक्रिया प्रज्वलित करण्यास प्रेरित होत असतो. अक्षरा व्दारे सतशब्दीत झालेल्या कविता, गझल,गित, कव्वाली, निबंध, साहित्य, दोहे, अभंग, आरती,प्रार्थना,शेर,  श्लोक, वृत्त    वाहिन्यां,मालिका,लघुचित्रपट, चित्रपटांचे लेखनाचे लेखक व कवीच्या सतसंकल्पित कल्पनांना सतशब्दीत शब्दकोषविनाशब्दांचे     सतकल्पनेव्दारे रुपांतरित करून व्यायामित वाचनिय करता येते . सत्यसमताधिष्ठिते सोबत  वैज्ञानिक दृष्टीकोनातून लेखन विश्लेषण यांचा प्रभावीपणे वैश्विक संवाद साधण्यासाठी, विश्वातील प्रत्येक प्रेक्षकांना प्रेक्षकांचे शारिरिक कल्याण  करतांना समन्वयी सहकार्याने स्वतःचे आयुष्य स्वतःच कल्याणित झाल्याच्या अनुभवाची अनुभूती व्दारे लाभान्वित झालेवरच आमचे पुर्वसम्मतीने इतर सर्वांना  लाभार्थीत  करण्याचे कार्य करावे वा आम्ही कार्य करत आहोतच. प्रत्येक भाषेतील साहित्य आणि भाषा समजुन घेण्यासाठी योग्य ज्ञानाचे आविष्कारी         योगदाणाने  भाषिक      कौशल्यासह संभाषण, सर्जनशीलता एकत्रीत करून विश्वातील सर्वभाषिक शब्दकोषातील प्रत्येक शब्दाला वैज्ञानिक, समताधिष्ठित सत्य व सत्यधिष्ठित समता आधारित  विश्वव्यापी एकता एकात्मता  "नैसर्गिक मुळ शब्द विज्ञान" व्दारे 'शब्दकोषविनाशब्द'   म्हणजेच सतशब्दांचा पुरवठा '"शब्दपॅथी'" व्दारेच संबंधिताच्या पुर्वसम्मतीनेच देत आहोत.`,
            latest: "आमचे नवीनतम लेखन",
            imgAbout: `NOWSBANSIU     बाबतीत संकल्पना सतकल्पनांचा उगम व उत्पत्ती मेळघाट जन्मभूमी असलेल्या  आळ-वळण,  नागमोळी व चढउतार मार्गाने घनदाट जंगलातील चिन्हांकित मुळ आकडे,  अक्षरांनीच "नैसर्गिक मुळ शब्द विज्ञान" चे सत्यशोधनाद्वारे वैश्विक समताधिष्ठित सत्य व सत्यधिष्ठित      समताधारी विज्ञानाने भारत @ महाभारतात    सात धर्मांची एकता व एकात्मतेचे दर्शन देताना मेळघाटातील बंसी ग्रुप चे विद्यार्थी  विद्यार्थिनींचे प्रतिकात्मक उद्घाटनप्रसंगी   मेघ्धावी क्षणचित्र.`,
            dohe: "शब्दांचे सामर्थ्य व महत्व",
            scan: "शब्दांच्या जादूचा नवा अनुभव घ्या! नैसर्गिक शब्द वापरून भाषेची शक्ती, रचना आणि सौंदर्याचे शोधाचा सत्यशोध शोधण्याचा प्रयत्न करत असतो.📌 आत्ता स्कॅन करा आणि भाषेच्या कलेत मग्न व्हा!",
            lastDetails: `म्हणूनच वैश्विक संत कबीर महाराज सुध्दा हिंदीतून आदिका म्हणजे आदीमुकमानव ते आदिमुळमानवांचे उच्चारलेल्या शब्दांत आदिमुळनिवासियांचा   कसा मानवी जिव (प्राण) होता त्याच प्राण प्रतिष्ठांकित मानवांच्या जैविक व औषधीय शब्दांना मारून म्हणजे मृत्युदंडीत करून मानवाला 'भिव' म्हणजे भिती  दाखवणारे नवनवीन अजैविक शब्द भारतीय@महाभारतीयांनी मुखात आणल्याने काय  परिणाम झाले तेच वैश्विक संत कबिर  महाराज पुन्हा दोहा बोलतात    :-       `,
            lastDetailsheading: `"शब्द हमारा आदिका, शब्द ही पैठा जिव ! तेही शब्द को मारिके,हम खोजत है भिव !!`,
            lastDetails2: ` याच हिंदीतील दोह्याचे महाराष्ट्रीयन संत अवधूत महाराज (विठोबा सावंगा) यांनी सुद्धा संत कबिर महाराजांचे अनुभव अनुभुतीचे अनुकरण स्वानुभवाने मराठी भाषेत मौखिक परंपरेनुसार त्यांना प्राप्त झालेली शब्दविद्येतिल नैसर्गिक मुळ शब्दांसह वैद्य न राहिल्याने कशा शब्द कल्पनाच गायब होण्याची संभावना असुन ज्यामुळे मानवी शरीरावर त्याचे काय दुष्परिणाम होतात व होतिल ? याबाबत शब्द विकृततेने शरिराला कसा क्षयरोग जाहतो  व शब्द सतकृततेने कसे औषध दिधले(दिले) तर अहंकारी संशय कमी होतो; याबाबत शिष्यांना मौखिक परंपरेतून अवधुती भजनात शब्दांचे महत्त्व, समर्थता, विज्ञाणी ज्ञाना बाबत जनतेची  श्रवणशक्ती वृध्दींगततेव्दारे 'स्वयं दिप भव' करण्यासाठी  अवधूती भजन गायन करतांना गातात व  बोलतात. '"'शब्द बुडाला, कल्पना मेली! अहंकारी क्षयरोग जाहला!! औषध दिधले, संशय रोग गेला! शब्द बाजार मावळला, जिव मौन झाला!! गुरू राज वैद्य भेटला!    आपणास नाही जाहला!! गुरू करें श्रवण भक्ती ! करी नित्य मनन दृष्टांत युक्ती !! "' म्हणजेच यापूर्वी सुद्धा अनेक थोर महापुरुष,राजे, महाराज, संत, महात्मे, तथागत भ. बुद्ध,भ.महाविर जैन, मो.पैगंबर, प्रभु येशू, सुफी संत , गुरू नानक चाणक्य, देवनामप्रिय सम्राट अशोक, विश्वसंत कबीर महाराज, जगदगुरू संत तुकाराम, गुरू गोविंदसिंग, राष्ट्रसंत तुकडोजी महाराज, सत्यशोधक महात्मा ज्योतिबा फुले, संत रविदास, शिवाजी महाराज, अकबर बादशहा,समर्थ रामदास स्वामी ,बाळ गंगाधर टिळक, निवृत्ती महाराज, संत ज्ञानेश्वर, शाहू महाराज, स्वामी विवेकानंद,साने गुरुजी, डॉ बाबासाहेब आंबेडकर, संत गाडगेबाबा सारखे अनेकांनी शिकवणी द्वारे  शब्दशः शब्दांतिल शब्द कसे शिकावे हे शिकवले पण पुर्वजांचे विचार समजून घेवून त्यांना कायमचे श्रवण न केल्याने आपणास "शिका" हे कळलेच नाही; त्यामुळे नाविन्यपूर्ण  "समान व्यायामीत सतशीक्षण" घेणे अपेक्षितच नव्हे तर जिवनावश्यक आहे. शब्दांतील शब्द गायब झाली तर त्यातील कल्पना कल्पनाच राहु नये,तर त्या संकल्पनांना सतकल्पनेत रूपांतर करून अंमलात आणण्यासाठी "शब्दकोषविनाशब्दां"ची चिकित्सा होऊन शब्दांतिल सतशब्द  कळले तर वादग्रस्त शब्दांबाबत चे कायम स्वरुपी वाद, संशयाचे वातावरण व झगडे आहेत ते निर्माणच होणार नाहीत. संत अवधूत महाराज यांच्या म्हणण्यानुसार शब्द बाजार मावळला म्हणजे चंद्र सूर्य तारे  मावळल्यानंतर जसा अंधार पडतो तसेच शब्दंविद्येसह सितारे मावळले तर   सतश्रद्धेस सुद्धा अंधश्रद्धा व अंधश्रद्धेस सुद्धा सतश्रद्धा म्हटल्या जाते व जाईल. आजच्या प्रचलित शब्दांतील पुर्वजांचे गायब वा बदल झालेले अक्षर व शब्द पुर्ववत झाल्यास शब्दकोषविनाशब्दांचे उच्चारा व्दारेच प्रथमोपचार, उपचार व शब्दांन्न असुन सुद्धा  ते न मिळाल्याने बहुतांश मानवी जिवांचे प्राण  अल्पायुष्यातच गतप्राण होत आहेत.`,
            lastDetailsheading2: `देहाची तिजोरी, भक्तिचाच ठेवा।
            उघड दार देवा आता, उघड दार देवा ।।`,
            lastDetails3: `आज जात,पात, धर्म, पंथ, मंदिर , मस्जिद, विहार , चर्च, गुरूद्वार, दर्ग्यासह ३३कोटी देव भगवान प्रभु सहित सर्व शब्दांचे शाब्दिक नावं गावांचे वादावरूनच  एकमेकांशी वादग्रस्त चकमकीं चे रोगांशिवाय  त्याच सतशब्दांच्या ध्वनी  उच्चारा व्दारेच मानवी शरीरातील अंतर्गत अवयवांच्या व्यायामाने सुक्ष्म अतीसुक्ष्म छिद्रांची उघड झाप करण्यासाठी लागणारा शब्दोपचारासह प्रथमोपचार व उपचार होते, तरीही त्या उपचाराअभावी   मानवी शरिराचे अंतिम टोकाला शब्दान्न न पोहोचल्याने आपण सर्व विविध दुर्धर रोगाने पछाडलेलो आहोत.अशाप्रकारे आपण सर्व भारतीयच नव्हे तर संपूर्ण विश्व समाज व्यवस्थेतच   जाणीव जागृती अभावी वेगवेगळ्या  रोगांनी  रोगग्रस्त झालेलो आहे . रोगग्रस्त मानव प्रथम   खर्चीक औषधोपचारासह शस्त्रक्रिया केल्यावरही कधी कधी सफलता प्राप्त न झाल्याने कालांतराने मौन मुके होतात आणि शेवटी कमावलेला धनसंपत्ती,  द्रव्य, ऐशोआराम, ऐश्वर्य, जमीन जायदाद, रूपये सर्व काही सोडून  कमी वयात मृत्यूच्या आहारी जाण्याऐवजी सुरवातीलाच शब्दकोषविनाशब्दांचे  उच्चारा व्दारेच प्रथमोपचारसह उपचारासाठी लागणारी  निष्णात चिकित्सेसाठी वेळोवेळी वेळीच शब्दकोषविनाशब्द ध्वनी उच्चारानेच उपचार दिल्या जाते ते शब्द त्वरित घ्यावी. आम्हा भारतीय, इंडियन, हिंन्दुस्तानी यांचे मानवी आरोग्याचे सशक्तीकरण व्यायामित सतशिक्षित शब्दज्ञान विज्ञानचे शब्दविद्येव्दारेच प्राप्त करून त्या रोगप्रतिकारक व रोगप्रतिबंधक शक्तीचा वापर  स्वसशक्तीकरणासाठी  सतशीक्षणाची मोहिम राबविल्यानेच महाभारतातील (अफगाणिस्तान १८७६ ब्रह्मदेश १९३५, श्रीलंका १९३७ भुतान १९०६, नेपाळ १९०७, पाकिस्तान(बांग्लादेश१९७१)१९४७ ) सुद्धा एकता एकात्मतेच्या  स्वसशक्तीकरणासाठी सर्व मिळून संघर्ष करू लागतील.  भारतीय, इंडियन,हिन्दुस्तानीयांचे  भविष्यात कधीही भरून न निघणारे सतशब्दांच्या समान व्यायामीत सतशीक्षणा अभावी अपरिमित नुकसान यापुर्वी झाले ते आपल्या सहकार्याने यापुढे होणार नाही. पर्यायाने आपण जे नेहमी ऐकतो की,   "जो भी कहेंगे सच ही कहेंगे सच के शिवा और कुछ ना कहेंगे" हे ब्रीद वाक्य आहे पण ते सफलतापुर्वक सिध्द व्हावे! म्हणून  नाविन्यपूर्ण          "नैसर्गिक मुळ शब्द विज्ञान" चे 'शब्दकोषविनाशब्द'   "शब्दपॅथी" द्वारे  शब्द ज्ञान व विज्ञान ची चिकित्सा  शब्द ध्वनींच्या शब्द उच्चारानेच मानवी शरीराचा प्रथमोपचारासह    उपचार, सर्व सतशब्दीत नैसर्गिक मुळ शब्दांचे नाव गावासह पुर्वजांचा इतिहास, व्यायामीत शब्दांचे सतशीक्षण, सतशब्दांव्दारे शब्दान्न, शब्दांच्या क्रिया प्रती प्रक्रिया व कृती प्रती प्रकृती ची पध्दत जाणून घेण्यासाठी आजच आपल्या  देशाचे  व आपले शहरांचे नावासह आपल्या कुटुंबातील सर्व नावं गावांचे नावांसह विवादास्पद नावं  वा विश्वातील कोणत्याही भाषेंतील  शब्दं वा देशांचे नावं गावांचे नावं, शहरांचे नावं  शास्त्रीय दृष्टिकोनातून समजून घेण्यासाठी  योगदान  घ्यावे.               स्वसशक्तीकरण करून दिर्घायुष्यच नव्हे तर शतकायुषमान होण्यासाठी सर्वच्या  सर्व दररोजच्या वापरातील शब्दकोषविनाशब्द शब्दसंचानुसार असलेल्या  लाटचा कोटा निर्धारित पध्दतीने  मुल्यवर्धित कालबद्ध पद्धतीने अटी व शर्तींच्या अधिन ठरविलेल्या शब्दसमुह मर्यादेच्या पुर्ततेनंतर संवेदनशील शब्द राखिव ठेवून देण्यात येईल......                    नम: सत: काळ:!!!    शत: शत: नमन!!!`,
            lastDetailsheading3: `देहाची तिजोरी, भक्तिचाच ठेवा।
            उघड दार देवा आता, उघड दार देवा ।।`,
            lastDetails4: ``,
            lastDetailsheading4: ``,
            lastDetails4: ``,
        }
    };
    return (
        <div className="font-sans bg-gray-100 min-h-screen w-full flex items-center justify-center">

            {loading ? (<div className="flex-col gap-4 w-full flex items-center justify-center">
                <div className="w-28 h-28 border-8 text-blue-400 text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-blue-400 rounded-full">
                </div>
            </div>) : (
                <div>
                    {/* Navbar */}
                    < Navbar className="relative w-full  z-50 bg-white shadow-md py-4 px-8 flex justify-between items-center" language={language} setLanguage={setLanguage} />

                    {/* Hero Section */}

                    <section className="relative min-h-[50vh] w-full px-4 py-12 text-white flex flex-col justify-center items-center sm:items-start bg-cover bg-center overflow-hidden">
                        {/* Background Overlay with Blur Effect */}
                        <div
                            className="absolute inset-0 bg-cover bg-center w-full"
                            style={{ backgroundImage: "url(./Banner.png)", backdropFilter: "blur(8px)" }}
                        ></div>

                        {/* Content Section */}
                        <div className="relative z-20 w-full px-10  text-center sm:text-left ">
                            {/* Title */}
                            <h1 className="text-white font-bold text-center text-5xl sm:text-4xl md:text-4xl lg:text-6xl xl:text-5xl leading-tight animate-slideIn">
                                {content[language].title1}
                            </h1>
                            <br /><br />
                            <h1 className="text-white font-bold  text-center text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-3xl leading-relaxed  animate-slideIn">
                                {content[language].title2}
                            </h1>
                            <br />
                            <br />
                            {/* Sub-heading */}
                            <h4 className="text-white text-center mt-4 text-2xl xl:text-2xl animate-slideIn">
                                {content[language].sub_heading}
                            </h4>

                            {/* WhatsApp Button */}
                            <div className="flex justify-center sm:justify-start mt-6 gap-5">
                                <button
                                    onClick={() => window.open("https://wa.me/7757814825", "_blank")}
                                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl shadow-lg flex items-center justify-center gap-2 group transform transition-transform duration-300 hover:scale-105"
                                >
                                    Chat On WhatsApp
                                    <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 " />
                                </button>
                                <button
                                    onClick={() => window.open("https://forms.gle/HDM8EcSsguhgXXR29", "_blank")}
                                    className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
                                >
                                    Fill Google Form

                                </button>

                            </div>
                        </div>
                    </section><br />
                    {/* Images */}
                    <section >
                        <div className="flex w-full justify-center gap-4">
                            <img
                                src="symbol.webp"
                                alt="Symbol"
                                className="w-24 sm:w-32 md:w-40 lg:w-48 rounded-lg shadow-lg lazy"
                            />
                            <img
                                src="flag.jpeg"
                                alt="Flag"
                                className="w-32 sm:w-40 md:w-48 lg:w-56 rounded-lg shadow-lg lazy"
                            />
                        </div>

                    </section>

                    {/* About */}
                    <section className="py-10 px-10 sm:px-14  lg:px-8 max-w-7xl mx-auto text-center">
                        {/* Heading */}
                        <h1 className="text-black font-bold  text-center text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-3xl leading-relaxed  animate-slideIn">
                            {content[language].headingDetails}
                        </h1>
                        <br />
                        {/* Additional Details */}
                        <p className=" text-2xl sm:text-3xl md:text-4xl lg:text-6sxl xl:text-2xl leading-relaxed text-gray-700  animate-slideIn mt-6">
                            {content[language].details}
                        </p>

                        <br />
                        <div className="flex w-full justify-center gap-4">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Sunita_Williams_in_2018.jpg"
                                alt="Symbol"
                                className="w-24 sm:w-32 md:w-40 lg:w-48 rounded-lg shadow-lg lazy"
                            />
                            <img
                                src="SAshok.jpeg"
                                alt="Symbol"
                                className="w-24 sm:w-32 md:w-40 lg:w-48 rounded-lg shadow-lg lazy"
                            /> </div>
                        {/* Image & Chat Section */}
                        <div className="flex  w-full flex-col sm:flex-row items-center mt-8 gap-6">
                            <img
                                src="ourStudents.jpeg"
                                alt="Our Students"
                                className="w-full sm:w-1/2 rounded-lg shadow-lg lazy"
                            />
                            <div className="text-center sm:text-left">
                                <p className="text-gray-700  sm:text-lg md:text-lg text-2xl xl:text-2xl animate-slideIn">
                                    {content[language].imgAbout}
                                </p>
                                <button
                                    onClick={() => window.open("https://wa.me/7757814825", "_blank")}
                                    className="mt-6 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl shadow-lg flex items-center justify-center gap-2 group transform transition-transform duration-300 hover:scale-110"
                                >
                                    Chat On WhatsApp
                                    <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </button>
                            </div>

                        </div>
                        <br />

                        <div className="flex w-full justify-center gap-4">
                            <img
                                src="Book.jpeg"
                                alt="Our Students"
                                className="w-44 sm:w-40 md:w-48 lg:w-4xl rounded-lg shadow-lg lazy"
                            />
                            <img
                                src="person.jpeg"
                                alt="Our Students"
                                className="w-32 sm:w-40 md:w-48 lg:w-96 rounded-lg shadow-lg lazy"
                            />
                        </div>
                        {/* Video Section */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                            {/* YouTube Video */}
                            <div className="w-full aspect-w-16 aspect-h-9">
                                <iframe
                                    className="w-full h-full rounded-lg shadow-lg"
                                    src="https://www.youtube.com/embed/hjnIAQYrmK4?si=MvXEsIymvUpNVGaO"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allowFullScreen
                                ></iframe>
                            </div>

                            {/* Local Video */}
                            <div className="w-full aspect-w-16 aspect-h-9">
                                <video
                                    className="w-full h-full rounded-lg shadow-lg"
                                    controls
                                >
                                    <source src="wordSciVideoCompressed.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </section>



                    {/*BLOGS */}
                    <section className="py-10 px-6 text-center  animate-slideIn">
                        <h2 className="animate-slideIn text-3xl font-bold text-gray-800 underline mb-4">{content[language].latest}</h2>
                        <Blogs />
                    </section>


                    <section className="py-10 px-6 text-center animate-slideIn">
                        <h2 className="animate-slideIn text-3xl font-bold text-gray-800 underline mb-4">{content[language].dohe}</h2>
                        <Imp_of_Words />
                    </section>
                    <section>
                        <div className=" items-center gap-6">
                            {/* Text Section */}
                            <br />
                            <br />
                            <p className="text-gray-700 text-justify ml-14 mr-14 text-2xl sm:text-3xl md:text-4xl lg:text-6sxl xl:text-2xl leading-relaxed animate-slideIn">{content[language].lastDetails}</p>
                            <h6 className="text-gray-900  text-justify ml-14 mr-14  text-2xl sm:text-3xl md:text-4xl lg:text-6sxl xl:text-2xl leading-relaxed ">{content[language].lastDetailsheading}</h6>
                            <br />
                            <p className="text-gray-700 text-justify ml-14 mr-14  text-2xl sm:text-3xl md:text-4xl lg:text-6sxl xl:text-2xl leading-relaxed animate-slideIn">{content[language].lastDetails2}</p>
                            {/* <h6 className="text-gray-900  text-justify ml-14 mr-14  text-2xl sm:text-3xl md:text-4xl lg:text-6sxl xl:text-2xl leading-relaxed ">{content[language].lastDetailsheading2}</h6> */}
                            <br />
                            <p className="text-gray-700 text-justify ml-14 mr-14 text-2xl sm:text-3xl md:text-4xl lg:text-6sxl xl:text-2xl leading-relaxed animate-slideIn">{content[language].lastDetails3}</p>
                            {/* <h6 className="text-gray-900  text-justify ml-14 mr-14  text-2xl sm:text-3xl md:text-4xl lg:text-6sxl xl:text-2xl leading-relaxed ">{content[language].lastDetailsheading3}</h6> */}
                        </div>
                    </section>
                   
                    <br />
                    <div className="flex w-full justify-center gap-2">
                        <img
                            src="bodyStructure.jpeg"
                            alt="Our Students"
                            className="w-44 sm:w-40 md:w-48 lg:w-2xl lg:h-xl rounded-lg shadow-lg lazy"
                        />
                        <img
                            src="brainParts.jpeg"
                            alt="Our Students"
                            className="w-32 sm:w-40 md:w-48 lg:w-2xl lg:h-xl rounded-lg shadow-lg lazy"
                        />
                    </div>

                    
                   
                    <section className="flex flex-col md:flex-row items-center justify-between py-12 px-8 max-w-5xl mx-auto bg-gray-50 shadow-lg rounded-lg">
                        <div className="text-center md:text-left">
                            <p className="text-gray-800 text-xl sm:text-xl font-medium max-w-md animate-slideIn">
                                {content[language].scan}
                            </p>
                            <div className="mt-6">
                                <button
                                    onClick={() => window.open("https://forms.gle/HDM8EcSsguhgXXR29", "_blank")}
                                    className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300"
                                >
                                    Fill Google Form

                                </button>
                            </div>
                        </div>
                        
                        <img
                            src="scanner.jpeg"
                            alt="Scan QR Code"
                            className="w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 h-auto mt-8 md:mt-0 rounded-lg shadow-md lazy"
                        />
                    </section>
                    <br />
                    <br />
                    {/* Footer */}
                    <footer className="py-6 px-6 bg-gray-900 text-white text-center">
                        &copy; 2025. All Rights Reserved.
                    </footer>

                    {/* for top arrow */}
                    {isVisible && (
                        <button
                            onClick={scrollToTop}
                            className="fixed bottom-6 right-6 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition transform hover:scale-110"
                        >
                            <ArrowUp className="w-6 h-6" />
                        </button>
                    )}
                    <button
                        onClick={() => window.open("https://wa.me/7757814825", "_blank")}
                        className="fixed bottom-20 right-6 p-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition transform hover:scale-110"
                    >
                        <MessageCircle className="w-6 h-6" />
                    </button>
                </div>
            )}
        </div>
    );
}

export default Home;
