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
            title2: ` Words without dictionaries "Shabdapathy of natural origin word science " `,
            // Words without dictionary" of "Natural Origin Word Science
            sub_heading: `  By examining the science of natural Origin  words, we aim to transform fundamental concepts into more impactful and expressive words, rather than leaving them as mere ideas. This process enhances the power, structure, and beauty of language, leading to the pursuit of truth and wisdom.
            
            Through the application of Shabdakosha Vinashabd sound therapy, we explore how human longevity, well-being, and beauty can be enhanced. By integrating self-awareness and spiritual realization, our approach enables individuals to attain a fulfilling, joyful, and enlightened life, ultimately guiding them towards a century-long, harmonious existence.`,
            headingDetails: `1) "Treatment through Pronunciation"`,
            details: `A) We, the people of Bharat (India) and the Mahabharata lineage, are the inheritors of eternal truth and are committed to awakening the spirit of truth by unveiling timeless wisdom. Through the actions and reactions of true words, as well as processes and counter-processes, we inspire scientific unity in global thought using natural words that enhance the power, structure, and beauty of language in the pursuit of truth and wisdom.
            
            In our sacred work, sound, rhythm, and meaning play a crucial role. B) Using the scientifically unexplored power of phonetic vibrations, we activate every organ of the human body, accelerating their movements and functioning at an enhanced pace. Through pronunciation-based healing, we stimulate the micro and ultra-micro pores of internal organs, enabling a natural bodily exercise that ignites one's life force, leading to self-illumination ('Swayam Deep Bhava').
            
            C) Words that have been refined and transformed through true phonetics can be applied to poetry, ghazals, songs, qawwalis, essays, literature, dohas, abhangas, aartis, prayers, couplets, shlokas, meters, and even screenwriting, TV series, short films, and cinematic writing. By converting conceptualized thoughts into true phonetic words, we can make them linguistically and rhythmically readable, engaging, and impactful.
            
            With a scientific perspective and an unwavering commitment to truth and equality, we analyze and compose literature that resonates with global audiences, offering them physical, intellectual, and emotional well-being through the power of words. Only after self-experiencing its benefits, do we extend its impact to others, ensuring that our work is authentic and effective.
            
            To understand every language and its literature, we utilize innovative linguistic knowledge, integrating communication skills and creativity to connect with the world. Our approach ensures that each word from global lexicons is scientifically interpreted and aligned with universal truth and equality.
            
            Through 'Natural Origin Word Science', we supply refined phonetic words ('Shabdakosha Vinashabd') via 'Shabdpathy'—an approach that provides language-based healing and knowledge transfer with the prior consent of the recipient.`,
            latest: ` "Our Latest Innovative Writtings"`,
            imgAbout: "The concept of NOWSBANSIU originates from the idea of natural origin word science formation through letters, inspired by the curves, twists, and ups and downs of the dense forest paths in the Melghat region. This symbolizes the creation of fundamental words that uphold equality-based truth and truth-based equality, envisioning a scientifically advanced Bharat originated in the wisdom of the Mahabharata.As a representation of this vision, the Bansi Group's students symbolically showcase the unity and integration of the seven religions, offering a glimpse of the Melghats harmony through a remarkable Meghdhavi moment.",
            Doha: `D) Rashtrasant Tukdoji Maharaj had access to many words that were not available to the common people of his time to awaken human consciousness. The words related to equality-based truth and truth-based equality, which were present in the memory of Rashtrasant Tukdoji Maharaj at that time, are not available today. Rashtrasant consistently affirmed the principles of equality-based truth, truth-based equality, freedom, and fraternity through his words.

            Since Rashtrasant understood the power of words, their significance, and the knowledge associated with them, he confidently expressed how inauspiciousness could be turned into auspiciousness through the availability and power of words from his own mind. He would often say in his devotional discourses:
            
            "I am the Availability of lot of words, I have all the words!
            With words, I can awaken the dead, and inauspiciousness diminishes!"
            
            The availability of these sacred words from Rashtrasant's mind, which remain part of oral tradition even today, should reach the people, as they serve as a pillar of support for society. Not only in Indian or Mahabharata's traditions but also across the world, the lack of awareness about righteous words has prevented the fulfillment of Rashtrasant Tukdoji Maharaj’s vision. Because these words were neither conveyed to all humanity nor spoken aloud by the people, it has resulted in the metaphorical lifelessness of human beings, as Rashtrasant described.
            
            Now, it is crucial to revive the subtle and micro elements of human existence that have become lifeless. E) If human lives are nurtured through righteous words from the Wordless Dictionary, then words will become nourishment just as food grown by farmers sustains physical health.
            
            Rashtrasant Tukdoji Maharaj often spoke in his sermons about how the words from his "Charity of Words" could diminish inauspiciousness. His devotional discourse in Nagpur in 1936 was so powerful that Mahatma Gandhi himself broke his vow of silence upon hearing it.
            
            Today, the lack of these words has led to malnourishment in every human being. If this is remedied now, the nation will become prosperous.`,
            dohe: "Importance of Words",
            scan: "Experience the magic of words in a new way! Using natural words, I strive to explore the power, structure, and beauty of language in the quest for truth. 📌 Scan now and immerse yourself in the art of language!",
            headLast: `11) What are the consequences or side effects on humans if words disappear? Guidance from great saints on this`,
            lastDetails: `That is why the global Saint Kabir Maharaj also, in Hindi, refers to "Adika," meaning from the primordial mute human to the primordial root human, describing how the original inhabitants expressed their words and how their life force (prana) existed.
            By eliminating the biological and medicinal words of these prana-infused human beings—essentially sentencing them to death—new non-biological words were introduced by the Indians@Mahabharatians, instilling fear ("bhiv" meaning fear) in humans.
            As a result of bringing these unnatural words into their mouths, what consequences followed?
            It is in this context that the global Saint Kabir Maharaj once again speaks in a Dohā (couplet), as follows…:-       `,
            lastDetailsheading: `"The word is our beginning, the word itself resides within the soul!
            Yet, by destroying that very word, we seek refuge in fear!!"`,
            lastDetails2: ` The Maharashtrian saint Avadhoot Maharaj (Vithoba Savanga) also followed the experiences and spiritual realizations of Saint Kabir Maharaj. Through his own self-experience, he orally conveyed in Marathi the natural root words of word science that he had received.
            Since there were no physicians (Vaidyas) left, the imagination of words began to disappear, which raised concerns about its adverse effects on the human body. He explained how:    
            Distorted words (Shabda Vikriti) can lead to tuberculosis-like diseases in the body.
            Pure words (Shabda Satkriti), when used as a medicine, can reduce arrogance and doubt.
            Through oral traditions, Avadhooti Bhajans emphasized the importance of words, their power, and scientific knowledge. By enhancing the listening abilities of people, he aimed to ignite self-awareness ("Swayam Deep Bhav").
            While singing and reciting Avadhooti Bhajans, he conveyed this wisdom as follows: :-  `,
            lastDetailsheading2: `The word drowned, imagination perished!
            Arrogance became a consuming disease!!
            Medicine was given, the disease of doubt vanished!
            The marketplace of words faded, life fell silent!!
            The Guru, the royal healer, was found!
            Yet, you did not realize it!!
            The Guru guides through the devotion of listening!
            Engage in daily contemplation with insightful vision!! `,
            lastDetails3: ` That is, in the past, many great personalities, kings, emperors, saints, and sages—Tathagata Gautama Buddha, Bhagwan Mahavir Jain, Prophet Muhammad, Lord Jesus, Sufi saints, Guru Nanak, Chanakya, Emperor Ashoka the Great, World Saint Kabir Maharaj, Jagadguru Sant Tukaram, Guru Gobind Singh, Rashtrasant Tukdoji Maharaj, truth-seeker Mahatma Jyotiba Phule, Sant Ravidas, Chhatrapati Shivaji Maharaj, Emperor Akbar, Samarth Ramdas Swami, Bal Gangadhar Tilak, Nivrutti Maharaj, Sant Dnyaneshwar, Shahu Maharaj, Swami Vivekananda, Sane Guruji, Dr. Babasaheb Ambedkar, Sant Gadge Baba, and many others—taught how to understand words through their teachings.
            However, because we did not listen carefully to our ancestors' thoughts and wisdom, we never truly grasped the essence of "learning." Therefore, embracing the "Balanced and Disciplined True Learning" is not just desirable but essential for life. If words disappear, then the ideas within them will remain mere imagination. To transform these ideas into real, actionable concepts, there must be a "wordless-word therapy," where the true meaning of words is understood. If the essence of words is realized, then disputes and conflicts arising from controversial words will cease to exist.
            According to Sant Avadhoot Maharaj, when the market of words fades away, just as darkness follows the setting of the sun, moon, and stars, similarly, if the stars of wisdom vanish, true faith itself will be mistaken for blind faith, and blind faith will be mistaken for true faith. In today’s world, many ancient words of our ancestors have either disappeared or been altered. If they are restored to their original form, then through the pronunciation of word without dictionaries, not only can primary treatments and remedies be provided, but also, despite having these healing words, many human lives are being lost prematurely simply because they are not accessed or used.`,
            lastDetailsheading3: `What are the effects on humans if words disappear? Guidance from great saints on this`,
            lastDetails4: `Today, disputes over caste, religion, sects, temples, mosques, viharas, churches, gurdwaras, dargahs, and even the 33 crore deities, gods, and lords arise solely from verbal arguments over names and places. However, beyond these disputes, the very pronunciation of these sacred words serves as a form of therapy. The vibrations generated by uttering these words contribute to the internal exercise of human organs, facilitating the opening and closing of microscopic pores in the body. Despite this natural healing process, the absence of proper word therapy has led humanity to suffer from various severe diseases.
            Not only Indians but the entire global society has become afflicted by different ailments due to a lack of awareness. A sick person, even after undergoing expensive medical treatments and surgeries, sometimes fails to recover. Over time, they become silent, losing their ability to speak. In the end, despite accumulating wealth, luxuries, properties, and riches, they succumb to an untimely death. Instead of reaching this stage, it is vital to adopt word therapy ("Shabdapathy") from the beginning. This involves the systematic pronunciation of meaningful words that serve as both first aid and full treatment for various illnesses.
            For us Indians, Hindustanis, and citizens of the world, strengthening human health through scientific knowledge of words and their exercise-based education is crucial. This enhances the body's natural immunity and self-empowerment. By promoting structured word education, we can initiate a movement that will not only unify India but also strengthen our historical ties with regions such as Afghanistan (1876), Burma (1935), Sri Lanka (1937), Bhutan (1906), Nepal (1907), and Pakistan (Bangladesh 1971, formerly 1947). This self-empowerment through word science will drive collective struggle and unity.
            In the future, we must prevent the immeasurable loss caused by a lack of systematic word-based education. We often hear the phrase:
            "Jo bhi kahenge sach hi kahenge, sach ke shiva aur kuch na kahenge"
            ("Whatever we say will be the truth, and we will speak nothing but the truth").
            To truly realize this vision, we must scientifically explore the origins of natural words through Shabdopathy (Word Therapy). This involves understanding and practicing words that have existed naturally along with their historical context, phonetic effects, and impact on human well-being.
            Today, let us contribute to this noble cause by scientifically analyzing the names of our countries, cities, ancestors, and controversial words from all languages across the world. Understanding words beyond their conventional meanings will help us shape a future where knowledge, self-awareness, and health go hand in hand.  
            `,
            lastDetailsheading4: ` Global Saint Gadge Baba also, following the words of Universal Saint Tukaram Maharaj, "Shabdachi Ha Dev" (Words themselves are God), said in his final sermon at Byculla, "God exists in the world; serve the world," O Divine One. `,
            lastDetails5: `By empowering oneself, not only can one achieve longevity but also a century-long life. In daily usage, "Shabdakoshavinashabd" (words beyond the dictionary) consists of various types of words—some suitable for expression, while others depend on time, place, and context. The relative impact of words must be assessed according to the situation, determining whether they should be spoken or withheld.
            Interactive words are categorized, allocated by quota, defined, enriched, and scheduled systematically, governed by terms and conditions. Until the word group's limit is reached, sensitive words are regulated through a "Control Center", which holds the reserved right to authorize or restrict words.

            However, in the public interest, if there is a strong and genuine demand from the people, the decision of the Control Center may be reconsidered or denied. This awareness must be upheld.
            
            Namah Satah Kaalah! (Salutations to the Eternal Time!)
            Shataḥ Shataḥ Naman! (A Hundredfold Salutations!)`,
        },
        mr: {
            title1: `नाउजबंन्सीयु कंपनी`,
            title2: `"नैसर्गिक मुळ शब्द विज्ञान" ची 'शब्दकोषविनाशब्द' "शब्दपॅथी"`,
            sub_heading: ` नैसर्गिक मुळ शब्दांचे विज्ञान तपासून सतकल्पनांना कल्पनाच न ठेवता त्या कल्पनाशक्तीला अधिक प्रभावी शब्दांमध्ये रुपांतरित करून भाषेची शक्ती, रचना आणि सौंदर्याचा शोध,सत्यशोध शोधून मानवी सौंदर्यात वृद्धी व मानवास दिर्घायुष्यी कसे करता येईल याचा सत्यशोधकीय शोध शब्दकोषविनाशब्द ध्वनी उच्चारा व्दारेच उपचार केल्यास मानवी जीवनात आत्मज्ञानानं प्रेरित होऊन साक्षात्कारी आनंदी मेघ्धावी जिवन जगण्याची कला, तृप्ती,आनंदी व शतकायूष्यी जिवन कसे जगता येईल याचा प्रयत्न करत असतो."`,
            headingDetails: `1)" उच्चारा   व्दारेच  उपचार"`,
            details: `A) आम्ही भारतिय @ महाभारतिय लोक व भारत देश एक शास्वत सत्याचे धनी असल्याने  सत्याच्या भावना जागृत करण्यासाठी शास्वत सत्य प्रकट करत असतो. सतशब्दांच्या कृती प्रतिकृतीं, प्रक्रिया प्रतिप्रक्रियांव्दारे  वैज्ञानिक एकतेच्या वैश्विक कल्पनांना सतकल्पनाशक्तीत प्रेरणा देणारे नैसर्गिक शब्द वापरून भाषेची शक्ती, रचना आणि सौंदर्याचा सत्यशोध  शोधण्याचा प्रयत्नही करत असतो. आमच्या कार्यांचे  सत्कार्यामध्ये  स्वर, लय व अर्था व्दारेच सतशब्दीत शब्दकोषविनाशब्दांनी मानवी शरिरातील होत असलेल्या हालचाली अधिक गतीने सक्रिय  करण्यासाठी अविष्कारीत ध्वनी उच्चारा व्दारेच मानवी शरिरातील सर्व अवयवांचे सुक्ष्म अतीसुक्ष्म छिद्रांची उघडझाप अधिक तिव्र गतीने सक्रिय होउन उच्चारा व्दारेच उपचार करतील . \nB) अशाप्रकारे मानवी शरिरातील सर्व अंतर्गत अवयवांचा व्यायाम नैसर्गिक पद्धतीने स्वतःव्दारे स्वतःचा प्राण    'स्वयं दिप भव'  करण्यासाठी प्रभावी  प्रक्रियाप्रतिप्रक्रिया प्रज्वलित करण्यास प्रेरित होत असतो. अक्षरा व्दारे सतशब्दीत झालेल्या कविता, गझल, गित, कव्वाली, निबंध, साहित्य, दोहे, अभंग, आरती, प्रार्थना, शेर,  श्लोक, वृत्त वाहिन्यां, मालिका, लघुचित्रपट, चित्रपटांचे लेखनाचे लेखक व कवीच्या सतसंकल्पित कल्पनांना सतशब्दीत शब्दकोषविनाशब्दांचे सतकल्पनेव्दारे रुपांतरित करून व्यायामित वाचनिय करता येते. C) सत्यसमताधिष्ठिते सोबत  वैज्ञानिक दृष्टीकोनातून लेखन विश्लेषण यांचा प्रभावीपणे वैश्विक संवाद साधण्यासाठी, विश्वातील प्रत्येक प्रेक्षकांना प्रेक्षकांचे शारिरिक कल्याण  करतांना समन्वयी सहकार्याने स्वतःचे आयुष्य स्वतःच कल्याणित झाल्याच्या अनुभवाची अनुभूती व्दारे लाभान्वित झालेवरच आमचे पुर्वसम्मतीने इतर सर्वांना  लाभार्थीत  करण्याचे कार्य करावे वा आम्ही कार्य करत आहोतच. प्रत्येक भाषेतील साहित्य आणि भाषा समजुन घेण्यासाठी योग्य ज्ञानाचे आविष्कारी योगदाणाने  भाषिक कौशल्यासह संभाषण, सर्जनशीलता एकत्रीत करून विश्वातील सर्वभाषिक शब्दकोषातील प्रत्येक शब्दाला वैज्ञानिक, समताधिष्ठित सत्य व सत्यधिष्ठित समता आधारित  विश्वव्यापी एकता एकात्मता  "नैसर्गिक मुळ शब्द विज्ञान" व्दारे 'शब्दकोषविनाशब्द'   म्हणजेच सतशब्दांचा पुरवठा '"शब्दपॅथी'" व्दारेच संबंधिताच्या पुर्वसम्मतीनेच देत आहोत.`,
            latest: "आमचे नाविन्यपूर्ण नवीनतम लेखन",
            imgAbout: `NOWSBANSIU     बाबतीत संकल्पना सतकल्पनांचा उगम व उत्पत्ती मेळघाट जन्मभूमी असलेल्या  आळ-वळण, नागमोळी व चढउतार मार्गाने घनदाट जंगलातील चिन्हांकित मुळ आकडे,  अक्षरांनीच "नैसर्गिक मुळ शब्द विज्ञान" चे सत्यशोधनाद्वारे वैश्विक समताधिष्ठित सत्य व सत्यधिष्ठित समताधारी विज्ञानाने भारत @ महाभारतात सात धर्मांची एकता व एकात्मतेचे दर्शन देताना मेळघाटातील बंसी ग्रुप चे विद्यार्थी  विद्यार्थिनींचे प्रतिकात्मक उद्घाटनप्रसंगी   मेघ्धावी क्षणचित्र.`,
            Doha: `D) म्हणूनच राष्ट्रसंत तुकडोजी महाराज यांचे जवळ मानसांना सजिव करण्यासाठी तात्कालातील जनलोकांजवळ नसलेली अनेक शब्द उपलब्ध होती. राष्ट्रसंतांच्या मनात जे समताधिष्ठित सत्य सत्यधिष्ठित समता संबंधित शब्द त्या काळातही राष्ट्रसंत तुकडोजी महाराज यांचे स्मरणात उपलब्ध होते; ते शब्द आज उपलब्ध नाही. राष्ट्रसंतांनी शब्दांचे समताधिष्ठित सत्य सत्यधिष्ठित समता, स्वातंत्र्य , बंधुत्व या तत्वप्रणालीची नेहमी वेळोवेळी ग्वाहीच दिली. शब्दांचे सामर्थ्यासह शब्द विषयक शब्दविद्या व शब्द महत्व राष्ट्रसंतांना कळल्यामुळेच राष्ट्रसंत तुकडोजी महाराजांनी स्वतःचे मनातिल शब्दंसंग्रहाचे उपलब्धते व शब्द शक्ती द्वारे अशुभ कसे शुभ होते हे मोठ्या आत्मविश्वासाने विशद करतांना बोलतात. "मै शब्द की खैरात हु , सब शब्द मेरे पास है ! मुर्दे जगा दु शब्द से , होता अशुभ का ऱ्हास !!" असे भजन प्रवचनातुन नेहमी बोलले तेच त्यांचे अपुर्ण स्वप्न साकार करण्यासाठी त्यांच्याच मनातील शुभ शब्दांची उपलब्धता म्हणजे 'शब्दकोषविनाशब्द' शब्दविद्येतिल मौखिक साठा आजही असुन तोच शब्दसंग्रह जनलोकांना प्राप्त व्हावा , जो प्रजेचा सहारा आहे. भारतीय @ महाभारतातीलच नव्हे तर विश्वातील जनलोकांपर्यंत सतशब्दांच्या जाणीवे अभावी व राष्ट्रसंत तुकडोजी महाराजांना अपेक्षित असलेले पुर्णतः शब्द सर्व मानवांपर्यत पोहोचवु न शकल्याने व ते शब्द उच्चारच लोकमुखात न आल्याने कसे मानवी जिवांचे सर्व सुक्ष्म अतीसुक्ष्म अवयव जिवहीन म्हणजेच राष्ट्रसंताचे भाषेत जिव मुर्दाड झालेली आहेत ; अशा
            जिवहीन झालेल्या सुक्ष्म अतिसूक्ष्म अवयवांना आतातरी मानवांनी सजिव करने अत्यावश्यक आहे . E) मानवी जिवांचा पालनपोषण सतशब्दीत शब्दकोषविनाशब्द 'उच्चाराने उपचार' केल्यास शेतकऱ्यांनी पिकविलेल्या अन्नाशिवायचे शब्दांन्न प्राप्त होईल. राष्ट्रसंत तुकडोजी महाराज यांचे 'शब्द की खैरात' मधील शब्दांनी अशुभाचा कसा ऱ्हास होईल याबाबत राष्ट्रसंत तुकडोजी महाराज प्रवचनात अनेक वेळा बोलले. राष्ट्रसंतांनी नागपूर येथे १९३६ साली केलेले भजन प्रवचन ऐकून मात्र राष्ट्रपीता महात्मा गांधी यांनी प्राणाचे मौन सोडले इतके प्रभावी शब्दात त्यांचे भजन प्रवचन होते तर आता भारतीय @ महाभारतीयांचे शब्दान्नां अभावी प्रत्येक मानवाचे होणारे आजचे कुपोषण आतातरी दूर करून घ्यावे म्हणजे राष्ट्र समृद्ध होईल.`,
            dohe: "शब्दांचे सामर्थ्य व महत्व",
            scan: "शब्दांच्या जादूचा नवा अनुभव घ्या! नैसर्गिक शब्द वापरून भाषेची शक्ती, रचना आणि सौंदर्याचे शोधाचा सत्यशोध शोधण्याचा प्रयत्न करत असतो. 🩺 शब्दकोषविनाशब्दां 🩺 करिता आत्ताच स्कॅन करा आणि भाषेच्या कलेत मग्न व्हा!",
            headLast: `11) शब्द गायब झाल्यास मानवावर काय परिणाम वा दुष्परिणाम होतात ? याबाबत महान संतांचे मार्गदर्शन`,
            lastDetails: `A) म्हणूनच वैश्विक संत कबीर महाराज सुध्दा हिंदीतून आदिका म्हणजे आदीमुकमानव ते आदिमुळमानवांचे उच्चारलेल्या शब्दांत आदिमुळनिवासियांचा   कसा मानवी जिव (प्राण) होता त्याच प्राण प्रतिष्ठांकित मानवांच्या जैविक व औषधीय शब्दांना मारून म्हणजे मृत्युदंडीत करून मानवाला 'भिव' म्हणजे भिती  दाखवणारे नवनवीन अजैविक शब्द भारतीय@महाभारतीयांनी मुखात आणल्याने काय  परिणाम झाले. B) म्हणून तसेच वैश्विक संत कबिर  महाराज पुन्हा दोहा बोलतात ते येणेप्रमाणे :-       `,
            lastDetailsheading: `"शब्द हमारा आदिका, शब्द ही पैठा जिव ! तेही शब्द को मारिके,हम खोजत है भिव !!`,
            lastDetails2: `C) वरिलच हिंदीतील दोह्याचे महाराष्ट्रीयन संत अवधूत महाराज (विठोबा सावंगा) यांनी सुद्धा संत कबिर महाराजांचे अनुभव अनुभुतीचे अनुकरण
             स्वानुभवाने मराठी भाषेत मौखिक परंपरेनुसार त्यांना प्राप्त झालेली शब्दविद्येतिल नैसर्गिक मुळ शब्दांसह वैद्य न राहिल्याने कशा शब्द कल्पनाच गायब
              होण्याची संभावना असुन ज्यामुळे मानवी शरीरावर त्याचे काय दुष्परिणाम होतात व होतिल ? याबाबत शब्द विकृततेने शरिराला कसा क्षयरोग जाहतो 
               व शब्द सतकृततेने कसे औषध दिधले(दिले) तर अहंकारी संशय कमी होतो;
                याबाबत शिष्यांना मौखिक परंपरेतून अवधुती भजनात शब्दांचे महत्त्व, समर्थता, विज्ञाणी ज्ञाना बाबत जनतेची  श्रवणशक्ती वृध्दींगततेव्दारे 'स्वयं दिप भव'
                 करण्यासाठी  अवधूती भजन गायन करतांना गातात व  बोलतात ते येणेप्रमाणे :- . 
                  `,
            lastDetailsheading2: `'"'शब्द बुडाला, कल्पना मेली! अहंकारी क्षयरोग जाहला!! औषध दिधले, संशय रोग गेला!
            शब्द बाजार मावळला, जिव मौन झाला!! गुरू राज वैद्य भेटला!    आपणास नाही जाहला!! गुरू करें श्रवण भक्ती ! करी नित्य मनन दृष्टांत युक्ती !! "'`,
            lastDetails3: `D) म्हणजेच यापूर्वी सुद्धा अनेक थोर महापुरुष,राजे, महाराज, संत, महात्मे, तथागत भ. बुद्ध,भ.महाविर जैन, मो.पैगंबर, प्रभु येशू, सुफी संत , गुरू नानक चाणक्य, देवनामप्रिय सम्राट अशोक, विश्वसंत कबीर महाराज, जगदगुरू संत तुकाराम, गुरू गोविंदसिंग, राष्ट्रसंत तुकडोजी महाराज, सत्यशोधक महात्मा ज्योतिबा फुले, संत रविदास, शिवाजी महाराज, अकबर बादशहा,समर्थ रामदास स्वामी, बाळ गंगाधर टिळक, निवृत्ती महाराज, संत ज्ञानेश्वर, शाहू महाराज, स्वामी विवेकानंद, साने गुरुजी, डॉ बाबासाहेब आंबेडकर, संत गाडगेबाबा सारखे अनेकांनी शिकवणी द्वारे  शब्दशः शब्दांतिल शब्द कसे शिकावे हे शिकवले पण पुर्वजांचे विचार समजून घेवून त्यांना कायमचे श्रवण न केल्याने आपणास "शिका" हे कळलेच नाही; त्यामुळे नाविन्यपूर्ण  "समान व्यायामीत सतशीक्षण" घेणे अपेक्षितच नव्हे तर जिवनावश्यक आहे. E) शब्दांतील शब्द गायब झाली तर त्यातील कल्पना कल्पनाच राहु नये,तर त्या संकल्पनांना सतकल्पनेत रूपांतर करून अंमलात आणण्यासाठी "शब्दकोषविनाशब्दां"ची चिकित्सा होऊन शब्दांतिल सतशब्द  कळले तर वादग्रस्त शब्दांबाबत चे कायम स्वरुपी वाद, संशयाचे वातावरण व झगडे आहेत ते निर्माणच होणार नाहीत. संत अवधूत महाराज यांच्या म्हणण्यानुसार शब्द बाजार मावळला म्हणजे चंद्र सूर्य तारे  मावळल्यानंतर जसा अंधार पडतो तसेच शब्दंविद्येसह सितारे मावळले तर   सतश्रद्धेस सुद्धा अंधश्रद्धा व अंधश्रद्धेस सुद्धा सतश्रद्धा म्हटल्या जाते व जाईल. F) आजच्या प्रचलित शब्दांतील पुर्वजांचे गायब वा बदल झालेले अक्षर व शब्द पुर्ववत झाल्यास शब्दकोषविनाशब्दांचे उच्चारा व्दारेच प्रथमोपचार, उपचार व शब्दांन्न असुन सुद्धा  ते न मिळाल्याने बहुतांश मानवी जिवांचे प्राण  अल्पायुष्यातच गतप्राण होत आहेत.`,
            lastDetailsheading3: ``,
            lastDetails4: `G) आज जात, पात, धर्म, पंथ, मंदिर, मस्जिद, विहार, चर्च, गुरूद्वार, दर्ग्यासह ३३कोटी देव भगवान प्रभु सहित सर्व शब्दांचे शाब्दिक नावं गावांचे वादावरूनच  एकमेकांशी वादग्रस्त चकमकीं चे रोगांशिवाय  त्याच सतशब्दांच्या ध्वनी  उच्चारा व्दारेच मानवी शरीरातील अंतर्गत अवयवांच्या व्यायामाने सुक्ष्म अतीसुक्ष्म छिद्रांची उघड झाप करण्यासाठी लागणारा शब्दोपचारासह प्रथमोपचार व उपचार होते, तरीही त्या उपचाराअभावी   मानवी शरिराचे अंतिम टोकाला शब्दान्न न पोहोचल्याने आपण सर्व विविध दुर्धर रोगाने पछाडलेलो आहोत. H) अशाप्रकारे आपण सर्व भारतीयच नव्हे तर संपूर्ण विश्व समाज व्यवस्थेतच   जाणीव जागृती अभावी वेगवेगळ्या  रोगांनी  रोगग्रस्त झालेलो आहे . रोगग्रस्त मानव प्रथम   खर्चीक औषधोपचारासह शस्त्रक्रिया केल्यावरही कधी कधी सफलता प्राप्त न झाल्याने कालांतराने मौन मुके होतात आणि शेवटी कमावलेला धनसंपत्ती,  द्रव्य, ऐशोआराम, ऐश्वर्य, जमीन जायदाद, रूपये सर्व काही सोडून  कमी वयात मृत्यूच्या आहारी जाण्याऐवजी सुरवातीलाच शब्दकोषविनाशब्दांचे  उच्चारा व्दारेच प्रथमोपचारसह उपचारासाठी लागणारी  निष्णात चिकित्सेसाठी वेळोवेळी वेळीच शब्दकोषविनाशब्द ध्वनी उच्चारानेच उपचार दिल्या जाते ते शब्द त्वरित घ्यावी. I) आम्हा भारतीय, इंडियन, हिंन्दुस्तानी यांचे मानवी आरोग्याचे सशक्तीकरण व्यायामित सतशिक्षित शब्दज्ञान विज्ञानचे शब्दविद्येव्दारेच प्राप्त करून त्या रोगप्रतिकारक व रोगप्रतिबंधक शक्तीचा वापर  स्वसशक्तीकरणासाठी  सतशीक्षणाची मोहिम राबविल्यानेच महाभारतातील (अफगाणिस्तान १८७६ ब्रह्मदेश १९३५, श्रीलंका १९३७ भुतान १९०६, नेपाळ १९०७, पाकिस्तान(बांग्लादेश१९७१)१९४७ ) सुद्धा एकता एकात्मतेच्या  स्वसशक्तीकरणासाठी सर्व मिळून संघर्ष करू लागतील. भारतीय, इंडियन,हिन्दुस्तानीयांचे  भविष्यात कधीही भरून न निघणारे सतशब्दांच्या समान व्यायामीत सतशीक्षणा अभावी अपरिमित नुकसान यापुर्वी झाले ते आपल्या सहकार्याने यापुढे होणार नाही. पर्यायाने आपण जे नेहमी ऐकतो की,   "जो भी कहेंगे सच ही कहेंगे सच के शिवा और कुछ ना कहेंगे" हे ब्रीद वाक्य आहे पण ते सफलतापुर्वक सिध्द व्हावे! J) म्हणून  नाविन्यपूर्ण          "नैसर्गिक मुळ शब्द विज्ञान" चे 'शब्दकोषविनाशब्द'   "शब्दपॅथी" द्वारे  शब्द ज्ञान व विज्ञान ची चिकित्सा  शब्द ध्वनींच्या शब्द उच्चारानेच मानवी शरीराचा प्रथमोपचारासह    उपचार, सर्व सतशब्दीत नैसर्गिक मुळ शब्दांचे नाव गावासह पुर्वजांचा इतिहास, व्यायामीत शब्दांचे सतशीक्षण, सतशब्दांव्दारे शब्दान्न, शब्दांच्या क्रिया प्रती प्रक्रिया व कृती प्रती प्रकृती ची पध्दत जाणून घेण्यासाठी आजच आपल्या  देशाचे  व आपले शहरांचे नावासह आपल्या कुटुंबातील सर्व नावं गावांचे नावांसह विवादास्पद नावं  वा विश्वातील कोणत्याही भाषेंतील  शब्दं वा देशांचे नावं गावांचे नावं, शहरांचे नावं  शास्त्रीय दृष्टिकोनातून समजून घेण्यासाठी  योगदान  घ्यावे.  
            `,
            lastDetailsheading4: `K) जागतिक संत गाडगेबाबा यांनी सुध्दा वैश्विक संत तुकाराम महाराज यांच्या "शब्दची हा देव" या उक्ती प्रमाणे भायखळा येथील अखेरच्या किर्तनातुन म्हणतात "जगात 'देव' आहे जगाची सेवा करा," 'देवहो'.  `,
            lastDetails5: `L) स्वसशक्तीकरण करून दिर्घायुष्यच नव्हे तर शतकायुष्यमान होण्यासाठी सर्वच्या  सर्व दररोजच्या वापरातील "शब्दकोषविनाशब्द शब्दसंचानुसार  शब्दांचे अनेक प्रकार असुन त्यापैकी काही देण्या योग्य तर काही स्थळ ,काळ सापेक्ष असुन परिस्थितीनुसार परिणामांची सापेक्षता तपासून देय वा नादेय असुन संवादात्मक शब्द  लाॅटने , कोटा ठरवून ,निर्धारित , मुल्यवर्धित , कालबद्ध पद्धतीने अटी व शर्तींच्या अधिन असुन शब्दसमुह मर्यादा पुर्ततेपर्यंत संवेदनशील शब्द "नियंत्रण कक्ष" मार्फत अधिकृत वा अनधिकृत ठरविण्याचा हक्क व अधिकार राखिव ठेवलेले आहेत. तरी पण जनतेच्या हितार्थ जनतेची प्रचंड प्रमाणात आग्रही मागणीसह प्रामाणिक मागणी असल्यास नियंत्रण कक्ष चा निर्णय बदलवुन देण्यात येईल वा नाकारण्यात येईल. प्रत्येक शब्द भविष्यकालीन प्रतिलिप्याधिकाराचे अधिन ठेवूनच देण्यात येईल.आपणास प्राप्त झालेली "शब्दकोषविनाशब्द" सारखे समसमान शब्द  सत्वाधिकार शिवाय लिखित स्वरूपात कोठेही आढळल्यास शब्दप्राप्तीपासुन २४ तासात वेबसाईट  विनाविलंब कळवावे अन्यथा कापी राईट अधिनियमाच्या अधिन  "शब्दकोषविनाशब्द" चे सत्वाधिकार गृहित धरण्यात येईल ; याची जाणीव जागृती ठेवून दखल घ्यावी . . नम: सत: काळ:!!! शत: शत: नमन!!!"`,


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
                    <section className="py-10 px-10 sm:px-16  lg:px-8 max-w-7xl mx-auto text-center">
                        {/* Heading */}
                        <h1 className="text-black font-bold  text-center text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-3xl leading-relaxed  animate-slideIn">
                            {content[language].headingDetails}
                        </h1>
                        <br />
                        {/* Additional Details */}
                        <p className=" text-2xl px-10 text-justify sm:text-3xl md:text-4xl lg:text-6sxl xl:text-2xl leading-relaxed text-gray-700  animate-slideIn mt-6">
                            {content[language].details}
                        </p>
                        <p className=" text-2xl  px-10 text-justify sm:text-3xl md:text-4xl lg:text-6sxl xl:text-2xl leading-relaxed text-gray-700  animate-slideIn mt-6">
                            {content[language].Doha}
                        </p>

                        <br />
                        <div className="flex w-full justify-center gap-4">
                            <img
                                src="SAshok.jpeg"
                                alt="Symbol"
                                className="w-24 sm:w-32 md:w-40 lg:w-48 rounded-lg shadow-lg lazy"
                            />
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Sunita_Williams_in_2018.jpg"
                                alt="Symbol"
                                className="w-24 sm:w-32 md:w-40 lg:w-48 rounded-lg shadow-lg lazy"
                            />
                        </div>
                        <br />
                        <div className="flex w-full justify-center gap-4">
                            <img
                                src="person.jpeg"
                                alt="Symbol"
                                className="w-24 sm:w-32 md:w-40 lg:w-48 rounded-lg shadow-lg lazy"
                            />
                        </div>

                        {/* Image & Chat Section */}
                        <div className="flex  w-full flex-col px-10 sm:flex-row items-center mt-8 gap-6">
                            <img
                                src="ourStudents.jpeg"
                                alt="Our Students"
                                className="w-full sm:w-1/2 rounded-lg shadow-lg lazy"
                            />
                            <div className="text-center ">
                                <p className="text-gray-700 text-justify sm:text-lg md:text-lg text-2xl xl:text-2xl animate-slideIn">
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


                        {/* Video Section */}
                        <div className="grid grid-cols-1 px-8 sm:grid-cols-2 gap-6 mt-8">
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
                    <section className="py-10 px-8 text-center  animate-slideIn">
                        <h2 className="animate-slideIn text-3xl font-bold text-gray-800 underline mb-4">{content[language].latest}</h2>
                        <Blogs language={language}/>
                    </section>

                    <div className="flex w-full justify-center ">
                        <img
                            src="Book.jpeg"
                            alt="Our Students"
                            className="w-60 sm:w-60 md:w-60 lg:w-4xl rounded-lg shadow-lg lazy"
                        />

                    </div>
                    <section className="py-10 px-8 text-center animate-slideIn">
                        <h2 className="animate-slideIn text-3xl font-bold text-gray-800 underline mb-4">{content[language].dohe}</h2>
                        <Imp_of_Words language={language}/>
                    </section>
                    <section>
                        <div className=" items-center text-center gap-6 ">
                            {/* Text Section */}
                            <br />
                        <h2 className="animate-slideIn ml-14 mr-14 text-3xl font-bold text-gray-800 underline mb-4">{content[language].headLast}</h2>
                            <br />
                            <p className="text-gray-700  text-justify ml-14 mr-14 text-2xl sm:text-3xl md:text-4xl lg:text-6sxl xl:text-2xl leading-relaxed animate-slideIn">{content[language].lastDetails}</p>
                            <h6 className="text-gray-1000  text-justify ml-14 mr-14  text-2xl sm:text-3xl md:text-4xl lg:text-6sxl xl:text-2xl leading-relaxed ">{content[language].lastDetailsheading}</h6>
                            <br />
                            <p className="text-gray-700   text-justify ml-14 mr-14  text-2xl sm:text-3xl md:text-4xl lg:text-6sxl xl:text-2xl leading-relaxed animate-slideIn">{content[language].lastDetails2}</p>
                            <h6 className="text-gray-1000 text-justify ml-14 mr-14  text-2xl sm:text-3xl md:text-4xl lg:text-6sxl xl:text-2xl leading-relaxed ">{content[language].lastDetailsheading2}</h6>
                            <br />
                            <p className="text-gray-700   text-justify ml-14 mr-14 text-2xl sm:text-3xl md:text-4xl lg:text-6sxl xl:text-2xl leading-relaxed animate-slideIn">{content[language].lastDetails3}</p>
                            {/* <h6 className="text-gray-1000  text-justify ml-14 mr-14  text-2xl sm:text-3xl md:text-4xl lg:text-6sxl xl:text-2xl leading-relaxed ">{content[language].lastDetailsheading3}</h6> */}
                            <br />
                            <p className="text-gray-700  text-justify ml-14 mr-14  text-2xl sm:text-3xl md:text-4xl lg:text-6sxl xl:text-2xl leading-relaxed animate-slideIn">{content[language].lastDetails4}</p>
                            <h6 className="text-gray-1000  text-justify ml-14 mr-14  text-2xl sm:text-3xl md:text-4xl lg:text-6sxl xl:text-2xl leading-relaxed ">{content[language].lastDetailsheading4}</h6>
                            <br />
                            <p className="text-gray-700  text-justify ml-14 mr-14  text-2xl sm:text-3xl md:text-4xl lg:text-6sxl xl:text-2xl leading-relaxed animate-slideIn">{content[language].lastDetails5}</p>

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
