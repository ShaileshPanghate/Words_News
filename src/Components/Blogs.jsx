import React from 'react'
import { useState } from 'react';


const blogsData = {
 
  mr:[ 
    {
    id: 1,
    title: "2) भारत, हिन्दुस्तान, इंडिया च का म्हणतात?",
    preview: "A) भारत  ला भारत च का म्हणतात? \n  हिन्दुस्तान  ला हिंन्दुस्तान च का म्हणतात? इंडिया  ला इंडिया च का म्हणतात?...",
    content: ` A) " भारत " ला भारत च का म्हणतात?           " हिन्दुस्तान " ला हिंन्दुस्तान च का म्हणतात?               " *इंडिया " ला इंडिया च का म्हणतात?          " भारत "," हिंन्दुस्तान "  " इंडिया " हे 'तिन'ही एकच देशाचे व विश्वातील सर्व राष्ट्रांचे नावं,गावं, शहर विशेषतः भारतीय गावं, शहरांच्या नावांसह,प्रत्येक माणवांच्या नावांतच नव्हे तर विश्वातील सर्वभाषिक शब्दकोषातील शब्द बोलीभाषेच्या   उगमस्थानी सर्वसामान्य आदिमुकमानवांच्या मुखात कोणते? का ?  कशी ?  नैसर्गिक, प्राथमिक, प्रारंभिक, प्राकृत, प्राकृतिक, प्रकृतिक, पाककृतीक,  सांस्कृतिक, स्वास्थ्यवर्धक, वैज्ञानिक, वैश्विक, वैचारिक, सामाजिक, समताधिष्ठित , सत्यधिष्ठित शब्द म्हणजे  "शब्दकोषविनाशब्द" प्रामौखीक व मौखिक परंपरेतुन आले,असून त्यात काय? कसे? कोणते? "नैसर्गिक मुळ शब्द विज्ञान" आहे. B) प्रत्येक शब्दांच्या उगमस्थानी व उगमसमयी  शब्दांचा उगम झाला; तेंव्हा त्या सतनामी सत्य शब्दं उच्चारात काय  गुपित औषधीसह मानवी शरिरातील फायदे  लपलेली आहे? हे "शब्दपॅथी" द्वारे पाहून समजून घेणे आजच्या युगात विश्वातील प्रत्येक  मानवासाठी अत्यावश्यकच नव्हे तर जिवनावश्यक गरज आहे. C) म्हणूनच संत रविदास महाराज सुध्दा 'नाम' विषयक शब्दांचे सत्याधिष्टीत महत्त्व व समताधिष्ठित सामर्थ्य विषयक बोलतात.         'शब्द को शब्द से मिलाओ, तभी नाम मिलेगा !                   ज्यो ज्यो शब्द का मेल होगा, त्यो त्यो प्रेम बढेगा!!'`,
    conDohaTitle: ` D) जगतगुरू संत तुकाराम महाराज शब्दांचे सामर्थ्य व महत्व विशद करताना बोलतांना बोलतात :-`,
    conDoha: `  
    आम्हा घरी धन, शब्दांचीच रत्ने।
    शब्दांचीच शस्त्रे यत्न करू ।।
    शब्दची आमुच्या जीवाची जीवन।
    शब्द वाटू धन जनलोका ।।
    तुका म्हणे पहा """शब्दची हा देव"""।
    शब्दांची गौरव पूजा करू ।।
    घासावा शब्द, तासावा शब्द ।
    तोलावा शब्द बोलण्यापूर्वी ।।
    शब्द हेची कातर। शब्द सुई दोरे।
    बेतावेत शब्दं शास्त्रधारे ।।
    बोलावे मोजके नेमके खमंग खमके।
    ठेवावे भान देश काळ पात्राचे ।।
    बोलावे बरे बोलावे खरे।
    शब्दामध्ये झळकावी ज्ञान, कर्म, भक्ती ।।
    स्वानुभावातुन जन्मावा प्रत्येक शब्द।
    शब्दांमुळे दंगल शब्दांमुळे मंगल ।।
    शब्दाचे हे जंगल जागृत रहावा ।
    जिभेवर ताबा सर्व सुख दाता ।।
    पाणी वाणी नानी नासु नये ।।`,
    videoUrl: `https://youtube.com/shorts/GXIXh9_g47Q?si=BiBzpEUDJ1joNUhv`,
  },
  {
    id: 2,
    title: "3) ज्या देशात आपण जन्मलो",
    preview: `A) ज्या देशात आपण जन्मलो, वाढलो त्या राष्ट्राचे नाव कसे विज्ञानावरच नव्हे तर नैसर्गिक विज्ञानी तंत्रज्ञानावर...`,
    content: `A) ज्या देशात आपण जन्मलो, वाढलो त्या राष्ट्राचे नाव कसे विज्ञानावरच नव्हे तर नैसर्गिक विज्ञानी तंत्रज्ञानावर व समताधिष्ठित समानतेवर आधारित आहे, ज्यास विश्वातील सर्व जनतेला मान्य करावेच लागेल अशी कोणती भारत भुमितिल 'भ' ची 'भ'वानी असावी!  विश्वातील ज्या राष्ट्रांत आपण जन्मलो, त्या सर्व राष्ट्रांचे नावांसह गावांची नावे व सर्वभाषिक शब्दकोषातील शब्द विज्ञानावरच नव्हे तर भारतीय नैसर्गिक मुळ विज्ञानी तंत्रज्ञानावर व समताधिष्ठित समानतेवरच आधारित आहे. B) तोच  शब्दकोषविनाशब्द "शब्दपॅथी" चा मौल्यवान मौखिक विश्वशब्दकोशीय संग्रह आहे, त्या प्रत्येक शब्दांची माहिती व "भारत"ला "भारत"च, "हिंन्दुस्तान"ला "हिंन्दुस्तान"च, "इंडिया"ला "इंडिया"च का म्हणतात हे प्रत्येक भारतीय, हिंन्दुस्तानीय व इंडियन यांना माहिती होणे अत्यावश्यकच नव्हे तर जिवनावश्यक  असतांनाही विश्वातिल सर्व राष्ट्रांचे व भारतीय नागरिकांनाही नामातील नामांकित विज्ञान अंतिम क्षणापर्यंत कळतच नसेल तर या वैश्विक भारत देशातील व विश्वाचे राष्ट्रातील नागरिकांचा जिवन जगण्याचा काहीही अर्थ नसुन जिवनाची वेळ निरर्थक मार्गांवर व मार्गांमध्ये वाया घातलेला आहे हे सिद्ध होईल ते होऊ नये! हिच मनोमन मनोकामना मनोमनी यावी. `,
    conDohaTitle: `C) महात्मा ज्योतीराव फुले शब्दांचे सामर्थ्य व महत्व विशद करताना बोलतांना बोलतात :-`,
    conDoha: `
    विद्येविना मती गेली। मतीविना निती गेली ।।
    नितीविना गती गेली। गतीविना वित गेले ।।
    वित्तविना शुद्र खचले। इतके अनर्थ एका अविद्येने केले ।।`,
    videoUrl: `https://youtube.com/shorts/Wc7dIXt7hnw?si=ywepDXKN-eQdWanm`,
    // https://youtube.com/shorts/PO6mwluyYLY?si=nA3zB3rUIJNylPyZ
  },
  {
    id: 3,
    title: "4) नैसर्गिक मुळ शब्दांच्या उच्चारां द्वारेच उपचार",
    preview: `A) नैसर्गिक मुळ शब्दांच्या उच्चारां द्वारेच उपचार*            "नैसर्गिक मुळ शब्द विज्ञान"च्या   शब्दकोषविनाशब्द "शब्दपॅथी"...`,
    content: `A) नैसर्गिक मुळ शब्दांच्या उच्चारां द्वारेच उपचार*            "नैसर्गिक मुळ शब्द विज्ञान"च्या   शब्दकोषविनाशब्द "शब्दपॅथी" द्वारे  मिळणाऱ्या अविष्कारी नवशब्द मुखात उच्चारल्यामुळे  आपोआप उच्चारात लयबध्द व तालबद्धता  येते ज्यामुळे मानवी शरिरातील जी एक स्वयंचलित विद्युत प्रणाली आहे, ति विद्युत प्रणाली अधिक प्रभावीपणे प्रज्वलित व प्रवाहित होऊन विकसित होईल ज्यामुळे शरिरातील मेंदू,हृदय, फुफ्फुसासह सर्व संबंधित अंतर्गत अवयवांच्या व्यायामांव्दारे  शरिरातील निर्जीव, स्तब्ध, लुप्त झालेले सर्व सुक्ष्म अवयव सजिव व सक्रिय झाल्यामुळे शरिर प्रभावी पध्दतीने प्राणवायू शोषून घेते.  प्राणवायूने  रक्त शरिरात प्रभावीपणे पोहोचल्यामुळे हिमोग्लोबिनचे प्रमाण वाढते म्हणजेच रक्तप्रवाहासह रक्तवृध्दी स्वयंचलित सक्रिय होते.\n `,
    conDohaTitle: `B) वैश्विक संत कबीर महाराज शब्दांचे सामर्थ्य व महत्व विशद करताना बोलतांना बोलतात :-`,
    conDoha: `
                  शब्द संभाल के बोलिए, शब्द के हात न पाव।
              एक शब्द औषध करे, एक शब्द करे घाव ।।
              शब्द का रखना ध्यान रे, मुख से निकला शब्द।
              वापीस फिर नही आयेगा, दिल किसीका तोडकर।।
              तुम्हे चैन न आयेगा, शब्द, का रखना ध्यान रे।
              शब्द का मुल्य जाणो, शब्द से बनती बीघडती।
              रुप कडवा भाता ना किसीको, सत्य मीन बोलिए ।।
              गुरु की अमृतवाणी सुनके, मुखमे अमृत घोलिए।
              मीन शब्द महान है, शब्द मे भरती ज्ञान ।।
              चलनी से गिरा हुआ अन्न, फिर न लगे हाथ में।
              कबीर कहत सुनो भाई साधु,
              शब्द का खेल शब्द में ||`,
    videoUrl: `https://youtube.com/shorts/RWmCs3TohYI?si=r3aR7I4AuZYH64fH`,
  },
  {
    id: 4,
    title: "5) अत्याधुनिक युगात विज्ञान",
    preview: `A) आजच्या अत्याधुनिक युगात विज्ञानाने इतक्या मोठ्या प्रमाणात...`,
    content: `A) आजच्या अत्याधुनिक युगात विज्ञानाने इतक्या मोठ्या प्रमाणात अत्याधुनिक विकास व प्रगतीसह सर्व प्रकारचे भौतिक साधने उपलब्ध असल्यानंतरही मानवाचे सरासरी आयुर्मान/वयोमर्यादा वाढण्याऐवजी बहुतांश मानव कमी वयात बिमारीग्रस्त होउन अल्पायुष्यातच मृत्यू होता दिसत आहे.अशावेळी आपण  मृत्यू पासून मुक्तता तर देऊ शकत नाही. परंतु   
      अशा कोणत्या कला व युक्ती द्वारे मानवी दिर्घायुष्याची ईच्छाच नव्हे तर दिर्घायुष्य कसे प्राप्त करू शकतो? त्यासाठी मानवास अल्पायुष्यापासून दुःख मुक्तीसाठी  आविष्कारी शब्द म्हणजे 'शब्दकोषविनाशब्द' सतनामी  शब्द उच्चारांचा वापर   केला तरच दिर्घायुष्य  प्राप्त करता येते. B)  ज्यासाठी "नैसर्गिक मुळ शब्द विज्ञान" द्वारे दिली जाणारे 'शब्दकोषविनाशब्द'  मुखात दररोज उच्चारल्यास त्या उच्चारांद्वारेच आवाज/ध्वनी फुफ्फुसातील हवेच्या प्रवाहाने स्वरांच्या पटातुन (आजच्या वर्तमान काळात अस्तित्वात असलेल्या शब्दांच्या वा शब्दकोशीय शब्द उच्चाराच्या तुलनेत)  जास्त हवा जास्त वेगाने श्वासनलिकेत वाहते; त्यामुळे व्होकल फोल्ड म्हणजेच घशातील उतिंचे जोडामध्ये जास्त हवा जास्त वेगाने प्रवाहीत होते, ज्याचे जबरदस्त कंपनं स्वरयंत्रात प्रवाहित झाल्यानेच स्वरयंत्राव्दारे शब्दांचा ध्वनी/आवाज मोठा येउन याच प्रक्रियेमुळे मानवी शरिरातील सर्व स्नायू मोठ्या प्रमाणात सैल वा तानले गेल्यामुळे श्वासोच्छ्वासाच्या स्वरांत 'शब्दकोषविनाशब्दां'चा ध्वनी/आवाज मोठा येवून मानवी शरीरातील अंतर्गत सर्व सुक्ष्म अतीसुक्ष्म अवयवांना व्यायामीत करते. C)  अशा प्रकारे आजचे आधुनिक काळातील अस्तित्वात असलेले शब्दांसह शब्दकोषीय शब्द व "नैसर्गिक मुळ शब्द विज्ञान"चे 'शब्दकोषविनाशब्दां'  मधील मुख्य फरक असून त्याचा शोध आपण सत्यशोध 'शब्दपॅथी' द्वारे घ्यावा. ---D) *म्हणूनच वैश्विक संत कबीर महाराज म्हणतात: * """ शब्द संभाल के बोलिए, शब्द के हात न पाव।\nएक शब्द औषध करे, एक शब्द करे घाव ।।\n शब्द का रखना ध्यान रे, मुख से निकला शब्द।\n कबीरा फिर नही आयेगा, दिल किसीका तोडकर ।।\n तुम्हे चैन न आयेगा, शब्द, का रखना ध्यान रे।\n शब्द का मुल्य जाणो, शब्द से बनती बिघडती।\nरुप कडवा भाता ना किसीको, सत्य मीन बोलिए ।।\n गुरु की अमृतवाणी सुनके, मुखमे अमृत घोलिए।\n मीन शब्द महान है, शब्द मे भरती ज्ञान ।।\n चलनी से गिरा हुआ अन्न, फिर न लगे हाथ में। \n कबीर कहता सुनो भाई साधु, \nशब्द का खेल शब्द में || """ ** ---`,
      conDohaTitle: `E) प्रख्यात कवी व सामाजिक कार्यकर्ते शब्दांचे सामर्थ्य व महत्व विशद करताना बोलतांना बोलतात :- `,
      conDoha: `
      शब्दच मंगल, शब्दच जंगल,
      शब्दच भारी, शब्दच तारी,
      शब्दांनीच पेटती कित्येक घरे !!
      शब्दच सोहळा, शब्दांनीच येती मरण कळा!
      सावरावे शब्द सजवावे शब्द, आपुलकीने !!
      शब्दांमध्येच मर्म, स्नेहबंधाचे कर्म !
      चला बांधुया मैत्रीबंध, चला बांधुया मैत्रीबंध !!`,
    videoUrl: `https://youtube.com/shorts/GXIXh9_g47Q?si=BiBzpEUDJ1joNUhv`,
  },
  {
    id: 5,
    title: "6) आधुनिक जगात धन, संपत्ती, रुपये,पैसा",
    preview: `A) आजच्या आधुनिक जगात मानवाजवळ अतोनात धन, संपत्ती, रुपये...`,
    content: `A) आजच्या आधुनिक जगात मानवाजवळ अतोनात धन, संपत्ती, रुपये,पैसा व सर्व काही सोयी, सवलती, सुविधा उपलब्ध असतांना व मानवाचे शारीरिक कल्याणासाठी नेहमी तत्पर असणारी  नैसर्गिक , पर्यावरण, सृष्टी तत्पर असतांनाही मानवी शरीराच्या प्रतिकार शक्तीच्या नाशासह  अवमुल्यन व नैतिक मूल्यांची अधोगती झालेली दिसत आहे. एवढेच नव्हे तर पर्यावरणशास्त्र, निसर्गशास्त्र व सृष्टीचे नियम मानवी शरीराच्या जिवशास्त्राशी  शतकानुशतकांपासुन जुळलेलेच दिसत नाही.मानवी शरिराची जुळवणी निसर्गशास्त्र, पर्यावरणशास्त्र,  जिवशास्त्राशी व नागरिकांचे स्वास्थ्य विषयक मैत्रीभाव व नागरिकांचे निती नैतिकशास्त्राशी  झालेली नसुन त्याची काय शाश्वत कारण आहेत?ते पाहून समजून घेणे काळाची गरज आहे. B) ज्यामुळेच आपण सर्वजण  काही आस्तिक तर काही नास्तिक तर काही  वास्तविक तिन भागांशिवाय  वेगवेगळ्या ठिकाणी वेगवेगळ्या विचारधारेला विभागलेले आहेत.या सर्व  मानवांना पर्यावरण म्हणजे काय? निसर्ग म्हणजे काय ? सृष्टी म्हणजे काय? हे सर्व काही कळलेले असुन ही  डोळ्यांनी दिसत नाही. C) निसर्ग, पर्यावरण, सृष्टी यांच्या संगमातूनच वैश्विक एकता व एकात्मता कशी कायम करावी ह्याचे मुळ स्वरुप आज तरी  "नैसर्गिक मुळ शब्द विज्ञान"
      "शब्दकोषविनाशब्द"चे 'शब्दपॅथी' मध्ये आहे ते समजून घेणे काळाची गरज बनली आहे अन्यथा मानवाला मानवी मुल्य व त्याचे शरिर  जसे  आले  तसेच व्यर्थ वाया  जाउन 'काया', 'वाचा', 'मन' याची एकता एकात्मता कशी निर्माण होते याची शाश्वत प्रगल्भता मिळणार नाही. ज्यामुळे अमनुष्यता वाढुन  शरिराचे वृध्दींगतते ऐवजी शारीरिक ह्रास होइल; याची जाणीव जागृती ठेवणे अत्यावश्यकच नव्हे तर जिवनावश्यक आहे.`,
      conDohaTitle: `D) संत तुकाराम महाराज शब्दांचे सामर्थ्य व महत्व विशद करताना बोलतांना बोलतात :-`,
      conDoha: `
      देहाची तिजोरी, भक्तिचाच ठेवा।
      उघड दार देवा आता, उघड दार देवा ।।`,
    videoUrl: `https://youtube.com/shorts/Wc7dIXt7hnw?si=ywepDXKN-eQdWanm`,
  },
  {
    id: 6,
    title: "7) नैसर्गिक शब्दबोल व उच्चार",
    preview: `A) निसर्ग संस्कारित नैसर्गिक, प्राथमिक, प्रारंभिक, प्राकृत, प्राकृतिक, प्रकृतिक, पाककृतीक, सांस्कृतिक...`,
    content: `A) निसर्ग संस्कारित नैसर्गिक, प्राथमिक, प्रारंभिक, प्राकृत, प्राकृतिक, प्रकृतिक, पाककृतीक, सांस्कृतिक रितीने निर्माण झालेले शब्दबोल व उच्चार मात्र मानवी कपाळ,                              तीन मेंदू, जिभ, दातं, टाळु,लाळग्रंथी,कान,नाक, डोळे,गाल,घसा, हृदय , फुफ्फुस,लहान आतडी, मोठी आतडी, किडनी, बोंबली, गूदद्वार ई.सर्व संबंधित  अंतर्गत अवयवांच्या नस, नाड्या व मानवी शरीराच्या  सुक्ष्म अतीसुक्ष्म अवयवांना प्रभावीपणे स्पर्श करून शरिरातील सर्व सुक्ष्म अतीसुक्ष्म छिद्र सछिद्रांची उघडझाप करणारी आविष्कारी शब्दं आहेत. B) आविष्कारी शब्द मात्र भारतीय विज्ञानी तंत्रज्ञानाचे आधारावर आदीमुकमानव, आदीमुळनिवासीय भारतीय  पुर्वजांचे मुखातूनच  
      निघालेली भारतातील "भ"ची "भ'वाणी"  कठोर पण *स्वास्थ्यवर्धक, वैज्ञानिक, वैश्विक,वैचारिक, सामाजिक, समतिक, सत्कीक  पण टनक ठेवनारी  'शब्दकोषवीनाशब्द' अनेक शब्द एका काळात होती.पण आजच्या साहित्यात व शब्दकोषात आज मुळीच उपलब्ध नाही. तरी पण सर्व आविष्कारी व अविस्मरणीय नैसर्गिक मुळ शब्दं मानवी शरीराचे विज्ञानाशी निगडित व स्वास्थ्यवर्धक  असतांनाही ही सर्व शब्दं आपल्या देशातुनच नव्हे तर विश्वातील सर्व भाषेंच्या विश्व शब्दकोषांतुन गायब झालेली दिसतात. त्याच शब्दांना आता "नैसर्गिक मुळ शब्द विज्ञान" चे 'शब्दकोषविनाशब्द' शब्दांचा संग्रह म्हणजेच प्रामौखिक वा मौखिक परंपरेनुसारचा 'शब्दपॅथी'चा संग्रह असुन तो आपणा सर्वांसाठी आज उपलब्ध आहे;ज्याचा फायदा आपण आपले जिवन दिर्घायुष्य  करण्यासाठी घेणे अत्यावश्यकच नव्हे तर जिवनावश्यक आहे.`,
      conDohaTitle: `C) छत्रपती शिवाजी महाराज शब्दांचे सामर्थ्य व महत्व विशद करताना बोलतांना बोलतात :-`,
      conDoha: `
      शब्द हा सैन्यापेक्षा श्रेष्ठ,
      शब्द हा शत्रुच्या मनाला जिंकतो.
      `,
    videoUrl: `https://youtube.com/shorts/o5Em7P71fpk?si=JbNHIgV1pKuK6icu`,
  },
  {
    id: 7,
    title: "8) शब्दकोषविनाशब्द उच्चारा व्दारे व्यायामाने उपचार!!",
    preview: `A) मेंदु व हाडांच्या झिजेसह वात विकार थांबेल,  रक्तदाबासह श्वास संतुलन....`,
    content: `A) मेंदु व हाडांच्या झिजेसह वात विकार थांबेल,  रक्तदाबासह श्वास संतुलन, फुफ्फुस सुदृढ, पाचनतंत्र विकास, पाचनशक्ती वृद्धी , विविध शब्दांन्नं वृद्धी व्दारे  प्रतिकार शक्तीतही वाढ होईल. 
    .                                       🗣️🧑‍🧑‍🧒‍🧒शब्दध्वणीचे उगमस्थान फुफ्फुस व  रक्त,वायु,पाणी,अन्न शुद्धीकरणाचे जनक 
     🫁फुफ्फुस ,🫀हृदय ,🧠 मस्तिष्क,  👅जिभव्दारे पाचनतंत्राचे सर्व अंगांचा व्यायाम अधिक प्रभावी  पद्धतीने करण्यासाठी  'शब्दकोषविनाशब्द'   उपयोग करून उच्चार केल्यास पाचनशक्ती वाढुन शारीरिक शक्ती व प्रतिकार शक्तीसह नविन कार्यक्षमता ही  वाढते. B) मानवी शरीराला नियंत्रित करणारा सर्वांत महत्त्वाचा जर कोणता अवयव असेल तर तो मेंदू असुन त्याची चार भागांत विभागणी जरी असली तरी 🧠 मेंदू तिन आहेत. आजच्या काळात 🧠मस्तिष्क  व 🦾🩻🦿 हाडांच्या झिजेसह  वातविकार थांबविणे मानवी शरीराची नितांत गरज आहे.🧠मेंदु व 💪🩻🦵 हाडांच्या झिजेसह वातविकार  थांबवण्यासाठी 🫀 रक्तदाबसह क्ष्वासांचे संतुलन, 🫁फुफ्फुस सुदृढ प्रफुल्लित, मेंदूचा व्यायामीत  विकास ,🫀 सशक्त हृदय,👅पाचनतंत्रीय सर्व अवयवांचे व्यायाम व व्यायामाव्दारे विविध शब्दांन्नं प्राप्ती करणेसाठी "नैसर्गिक मुळ शब्द विज्ञान"ची 🩺"शब्दपॅथी"🩺 मार्फत पुरविल्या जाणारे 'शब्दकोषविनाशब्द' उपयोग करून उच्चार  व्यायामाने प्राप्त  विविध शब्दांन्नांव्दारे शरीरातील  सुक्ष्म व अतिसूक्ष्म  छिद्र सछिद्रांची प्रभावी पद्धतीने उघडझाप  करून निर्जिव अवयवांना रक्तपुरवठ्यासह विविध शब्दांन्नांने सक्रिय करूण त्यास शरिराचे अंतिम टोकापर्यंत पोहचविण्याचे कार्यासह सतकार्य करते. C) अविष्कारीत 'शब्दकोषविनाशब्द' उच्चारांच्या ध्वनी  कंपनांद्वारे मानवी मनातील आवेश भाव भावनांच्या विद्युत लहरी अधिक  ♨️प्रभावीपणे 🪭 प्रफुल्लित, 🔥प्रज्वलित होऊन 🪸प्रवाहीत झाल्याने रक्तदाबासह श्वास संतुलीत होऊन तिनही 🧠 मेंदुंच्या  ईच्छेसह विकास जलद गतिने प्रज्वलीत झाल्याने मेंदूंच्या पेशीं व 💪🩻🦵 हाडांच्या झिजेसह वातविकार थांबेल. ज्यामुळे "🧠मेंदू , 🫀हृदय,🫁 फुफ्फुस,👅जिभेसह  पाचनतंत्राचे सर्व अंगांचे व्यायामाने क्षमता वाढुन शरिराचे पाचनशक्ती वाढल्याने प्रतिकारक शक्तीसह कार्यक्षमता वाढुन वातविकार, वादविवाद थांबविते; मात्र  ते 'संयुक्त कुटुंब पध्दती' चे संवादकीय संवादानेच होईल.`,
     conDohaTitle: `D) वैश्विक संत कबीर महाराज शब्दांचे सामर्थ्य व महत्व विशद करताना बोलतांना बोलतात :-`,
     conDoha: `वैश्विक संत कबीर महाराज शब्दांचे सामर्थ्य व महत्व विशद करताना बोलतांना बोलतात :-
     कागज कि लेखी, मती कि रेखी,
     शब्दों की शक्ती से ही सिद्धी है।
     शब्द में भक्ति है, शब्द में सृष्टी है,
     शब्द से ही सबकुछ है।`,
    videoUrl: `https://youtube.com/shorts/GXIXh9_g47Q?si=BiBzpEUDJ1joNUhv`,
  },
  {
    id: 8,
    title: "9) भारत देश सत्याचा शोध आहे",
    preview: `A) भारत" देश सत्याचा शोध आहे; पण काही लोक "भारत" भरत राजाचे नावावर शिक्कामोर्तब...`,
    content: `A) "भारत" देश सत्याचा शोध आहे; पण काही लोक "भारत" भरत राजाचे नावावर शिक्कामोर्तब करतील पण भारत@भरत हे दोन्ही शब्द हे कसे विज्ञानवादी समताधिष्ठित, सत्यधिष्ठित समानतेवर आधारित असुन विश्वातील सर्व जनतेला मान्य करावाच लागुन अंतर्गत सुक्ष्म अतिसूक्ष्म अवयवांच्या व्यायाम होइल असा 'शब्दकोषवीनाशब्द, राहिल.`,
    conDohaTitle: `B) वैश्विक संत कबीर महाराज शब्दांचे सामर्थ्य व महत्व विशद करताना बोलतांना बोलतात :-`,
    conDoha: `
    शब्द संभाल के बोलिए, शब्द के हात न पाव।
    एक शब्द औषध करे, एक शब्द करे घाव ।।
    शब्द का रखना ध्यान रे, मुख से निकला शब्द।
    वापीस फिर नही आयेगा, दिल किसीका तोडकर।।
    तुम्हे चैन न आयेगा, शब्द, का रखना ध्यान रे।
    शब्द का मुल्य जाणो, शब्द से बनती बिघडती | 
    रुप कडवा भाता ना किसीको, सत्य मीन बोलिए ।।
    गुरु की अमृतवाणी सुनके, मुखमे अमृत घोलिए।
    मीन शब्द महान है, शब्द मे भरती ज्ञान ।।
    चलनी से गिरा हुआ अन्न, फिर न लगे हाथ में।
    कबीर कहत सुनो भाई साधु,
    शब्द का खेल शब्द में ||`,
    videoUrl: `https://youtube.com/shorts/Wc7dIXt7hnw?si=ywepDXKN-eQdWanm`,
  },
  {
    id: 9,
    title: ` "Free ! Free ! Free ! 10) शब्दकोषविनाशब्दाचे मोफत प्रात्यक्षिक" \n\n "पाणी"शब्दाचा "शब्दकोषविनाशब्द" `,
    preview: `A) "पाणी"शब्दाचा "शब्दकोषविनाशब्द" नैसर्गिक मुळ शब्द विज्ञान"🌈 चे...`,
    content: `A) नैसर्गिक मुळ शब्द विज्ञान"🌈 चे '              ⚖️      ⛩️      ⚖️ "शब्दकोषविनाशब्द" 🩺"'शब्दपॅथी'"🩺चे जे अनेक व असंख्य शब्दं निर्माण झालीत त्याबाबतचे प्रत्येक शब्दांचे निरनिराळे प्रात्यक्षिक खालील प्रमाणे राहील.    उदाहरणार्थ:-                      आदिमुळमुकमानव एका काळात रानटी व मुक अवस्थेत समुहाने राहत असतांना दुष्काळामुळे अनभिज्ञ निर्जनस्थळी जंगलात राहत फिरत भटकतांना तहान लागल्यावर नदी नाले ओढे शोधूनही पाणी  मिळत नव्हते.  मुकमानव एकमेकांना सांकेतिक  संकेत, इशारे हातवारे करून पाणी मागत होते, पण ते संकेत कशासाठी? व का ? आहे हे सोबतच्या मुक मानवांना जेंव्हा  कळतच नव्हते व पाणी मिळतच नव्हते. B) अशावेळी तृष्णातृप्ती करिता कोणत्याही मार्गाने येणारे पाणी सुद्धा प्यायला मागेपुढे पाहत नसत तरीही पाणी मिळतच नाही.म्हणून नदी, नाले, ओढे व पाणवठे कोरडे असलेल्या ठिकाणी कधी कधी खड्डे खोदून ही पाणी मिळतच नव्हते.पाणी शोधता शोधता शारीरिक क्षमताही कमजोर होत होती, तरी पाणी मिळतच नव्हते. C) म्हणून मुक मुकमानवाद्वारे केविलवाणा  संकेत व कृती म्हणून मुखाचे दोन्ही ओठांना ओठावर ओठ ठेवून वेळोवेळी ओठ खालीवर वा वरखाली केल्याच्या संकेत व कृतीतून निघालेल्या ध्वनी🗣️तुन   प्रथम "प्प" नंतर "प्पा"अक्षरा सारखे ध्वनी आले पण पाणी मिळालेच नाही. D) पाण्यासाठी पुन्हा पुन्हा  "प्प" "प्पा" ध्वनी🗣️ उत्पत्तीचे मुळ कृती व संकेतांची पुनरावृत्ती करत नंतरची क्रिया प्रति प्रक्रिया, प्रक्रिया प्रति प्रतिप्रक्रिया व कृती प्रति प्रकृती द्वारे निळ्या आकाशी    नभमेघातुन पाणी येते ज्या दिशेने येते; त्या दिशेने तहानलेल्या, दमलेल्या व थकलेल्या आवाजात मुख दाखवत मुक मानवांनी कधी नाकाने तर कधी मुखाने श्वासोच्छवास घेतांना त्या मिश्रणाने  नाकातून  'ना' तर कधी निळ्या आकाशातील "णी" अक्षरांचे ध्वनी सारखा ध्वनी 🗣️ आवाज निघाला. E) त्यामुळे 'ना' 'णी' अक्षरांच्या ध्वनीं पैकी 'णी' अक्षराच्या ध्वनीला "प्पा" अक्षराच्या ध्वनी  मागे सोबत जोडले नंतरच्या दोन्ही ध्वनींच्या संयुक्त 🗣️ कृती व संकेता द्वारे  'पाणी' ची 'प्रतिकृती' व 'मुद्रा' म्हणून "प्पाणी" या शब्दाची निर्मिती व अर्थ प्रथमतः प्रथम एकाचवेळी   कळल्यावर 'प्पाणी' मात्र मिळालेच नाही. F) शेवटी प्राणोत्क्रमण व निर्वाण समयपुर्वी मधुमेही रुग्णांच्या मुखात व घस्याला जसी कोरड पडते! 
    त्यापेक्षाही जास्त  कोरड  मुक मानवाचे मुखात होती. तृष्णा तृप्ती साठी पुर्वीचे सर्व संकेत कृत्या पाण्यासाठी व्याकूळलेल्या अक्राळ विक्राळतेने तळमळीचे लहरी भावात याचना विनवणी व्यक्त करता करता ओरडत असतांना जिभेला खालीवर वरखाली करण्याची कृति संकेताद्वारे "ळ"अक्षराच्या सारखा  ध्वनी🗣️आवाज आल्याने त्या "'ळ'" अक्षराच्या ध्वनीस "'प्पाणी"' तील "प्पा"अक्षराच्या ध्वनी मागे  जोडलेवर '"प्प्ळाणी"'या तिनं अक्षरांचे संयुक्त शब्दध्वनीं व्दारेच लाळ ग्रंथी सक्रिय व थायरॉईड ग्रंथी संतुलित होउन मुखात लाळ प्रचुर प्रमाणात आल्याने तात्पुरती तृष्णातृप्ती "'प्प्ळाणी"' शब्दध्वनीं व्दारे करुन लाळे चे पाणीद्वारे प्रथमोपचार करून तात्पुरती तहान भागवून प्राणांतिक नासाडीला  रोख लावुन पुनर्जीवन प्राप्त केले. G) "शब्दकोषविनाशब्द"         'प्प्ळाणी' शब्दाचे उच्चारानेच मानवी शरिरातील अंतर्गत  🔭 अवयवांच्या 🔬सुक्ष्म 🔬 अतीसुक्ष्म  🔬 छिद्रे 🔬 सछिद्रांची तिव्रतेणे उघडझाप करून निर्जिव  सुक्ष्म, अतीसुक्ष्म अवयवं  सजिव करून  
    'शब्दपॅथी' चे प्रथमोपचारा द्वारे स्वतःचा प्राण स्वतःच संचित करून लाळेच्या पाण्याद्वारे स्वतःस 'स्वयं दिप भव' करून घेतले. आजच्या"शब्दपॅथी" चे 'शब्दकोषविनाशब्दां' चे तिन*वा सात*वा दहा  टप्प्यातील प्रत्येक शब्दांव्दारे शारिरीक कल्याणाचे फायदे व महत्त्व लक्षात घेता,  मौल्यवान आविष्कारी सतशब्दांच्या   🩺 *उच्चारां🩺 व्दारेच 🩺 उपचार🩺 प्रभावीपणे प्रज्वलित करून मानवाला  निरोगी स्वास्थ्य निर्माण करता येते. शब्दांचा अनुभव  स्वनुभवाची अनुभुती शब्दशः प्रत्यक्ष जाणुन घेतल्यानंतर शब्द उच्चार ध्वणी 🗣️ व्दारे अंतर्गत🔭 अवयवांच्या 🔬सुक्ष्म अतीसुक्ष्म🔭  छिद्र🔬 सछिद्रांची🔬 उघडझाप करतील ते अवयव खालील प्रमाणे आहेत. 💹🧠👂👃👀👅👄🦷🫁🫀🩻🪸🦠  "नैसर्गिक मुळ शब्द विज्ञान" 'शब्दकोषविनाशब्द' "शब्दपॅथी" व्दारे आज अस्तित्वात असलेल्या 'शिव्या' सुध्दा 'शिव्या' नसुन सतकृत शब्दान्न असल्याने त्याशिवाय असंख्य गुणकारी सतशब्द शब्दविद्ये व्दारे   "शब्दकोषविनाशब्द" प्रामौखीक, मौखिक परंपरेतील मौखिक रीतीने प्राप्त असुन   निरोगी स्वास्थ्यासाठी लाभकारी आहेत. H) आमच्या मार्फत दिली जाणाऱ्या प्रत्येक शब्दांची नोंद आमच्या पुस्तिकेत  घेतल्यानंतर त्या शब्दांचे   'संचालक मंडळ' येथे पाठविल्यावर  निराकरणासाठी 'कार्यकारी संचालक ' यांचेकडे     नोंदणीकृत झालेवर 'शब्दकोषविनाशब्द'         समुहाचे नोंद भारतीय कापीराइट कायदा 1976 व भारतीय पेटेंट कायदा ,१९७० ची  अंमलबजावणी नंतर वा प्रक्रिया पूर्ण केल्यानंतरच मर्यादीत ठरलेल्या मुदतीत शब्दांचे  समुह संचाच्या लाट द्वारे मागणीनुसार अवगत करून दिली जातिल यांची नोंद घ्यावी. हिच सविनय विनंती आहे. `,
    conDohaTitle: `I) छत्रपती शाहू महाराज सुध्दा शब्दंच कसे प्रजेसाठी आधार व सहारा असुन शब्दांचे महत्त्वासह सामर्थ्य विशद करताना बोलतात :-`,
    conDoha: `
    'शब्दं' हा राज्याचा आधार | , \n'शब्दंच' प्रजेचा सहारा आहे. ||`,
    videoUrl: `https://youtube.com/shorts/o5Em7P71fpk?si=JbNHIgV1pKuK6icu`,
  },
  ],
  en:[ 
    {
      "id": 1,
      "title": "2) Why we called Bharat, Hindustan, and India?",
      "preview": "A) Why is Bharat called Bharat? \n Why is Hindustan called Hindustan? \n Why is India called India?...",
      "content": `A) Why is "Bharat" called Bharat? Why is "Hindustan" called Hindustan? Why is "*India" called India?  
      "Bharat," "Hindustan," and "India" are all names of the same country, and like all nations in the world, the names of Indian towns and cities, as well as human names, originate from ancient linguistic traditions.   
     B) What? Why? How? Natural, primary, primitive, Prakrit, organic, cultural, health-enhancing, scientific, universal, intellectual, social, equality-based, and truth-based words are part of the **"ShabdakoshaVinashabd"** (words without  dictionaries). These words have emerged from oral traditions and are deeply rooted in the linguistic evolution of early humans.  
      At the time of their origin, what medicinal secrets and human body benefits were hidden in the pronunciation of these truthful, sacred words? Understanding this through "Shabdapathy" (the science of words) has become not just essential but a necessity for every human in today's era.  
      C) That is why Sant Ravidas Maharaj also speaks about the truth-based importance and equality-driven power of names and words:  
      **'Connect one word with another, only then will you find the true Name!  
      The more words unite, the more love will grow!!'**`,
      
      "conDohaTitle": `D) "Jagatguru Sant Tukaram Maharaj explains the power and significance of words while speaking:"`,
      
      "conDoha": `  
      "In our home, wealth consists of words as precious as gems.  
      Words are our weapons, and we strive to use them wisely.  
  
      Words are the very life of our soul.  
      We share the wealth of words with the people.  
  
      Tukaram says, 'See, **words themselves are divine**.'  
      Let us honor and worship the greatness of words.  
  
      Sharpen your words, refine your words.  
      Weigh your words before speaking.  
  
      Words can be as delicate as cotton, yet as sharp as a sword.  
      Choose words wisely, as if handling the edge of a blade.  
  
      Speak measured, precise, and impactful words.  
      Be mindful of the place, time, and audience.  
  
      Speak well, speak truthfully.  
      Let wisdom, action, and devotion shine through words.  
  
      Every word must be born out of personal experience.  
      Words can incite conflict; words can bring peace.  
  
      The jungle of words must be navigated with awareness.  
      Control over the tongue brings ultimate happiness.  
  
      Water, speech, and wealth must never be wasted."`,
  
      "videoUrl": `https://youtube.com/shorts/GXIXh9_g47Q?si=BiBzpEUDJ1joNUhv`
  },
  {
    "id": 2,
    "title": "3) The Country Where We Were Born",
    "preview": "A) The name of the nation where we were born and raised is not only based on science but also on natural scientific technology...",
    "content": "A) The name of the nation where we were born and raised is not only based on science but also on natural scientific technology and equality-based justice, which the entire world must acknowledge. What should be the 'Voice' of 'Bharat' in the land of India? The names of all the nations where we were born, along with the names of villages and words from all linguistic dictionaries, are not only based on science but also on Indian natural scientific technology and equality-based justice.B) That very word without dictionary, 'Shabdpathy,' is a valuable oral universal dictionary collection. Understanding why 'Bharat' is called 'Bharat,' 'Hindustan' is called 'Hindustan,' and 'India' is called 'India' is not only essential but also a necessity for every Indian, Hindustani, and Indian. If even by the last moment, the scientific significance of these names is not understood by the world's nations and Indian citizens, then the life lived by these global and Indian citizens will be meaningless and wasted in futile pursuits. This should not happen! This is the heartfelt wish that should arise in every mind.",
    "conDohaTitle": "C) Mahatma Jyotirao Phule, explaining the power and importance of words, says:",
    "conDoha": "\n    Without education, wisdom is lost. Without wisdom, morality is lost.\n    Without morality, progress is lost. Without progress, wealth is lost.\n    Without wealth, the downtrodden suffer. All these disasters stem from a single ignorance.\n    ",
    "videoUrl": "https://youtube.com/shorts/Wc7dIXt7hnw?si=ywepDXKN-eQdWanm"
  },
  {
    "id": 3,
    "title": "4)Healing Through the Pronunciation of Natural origin Words",
    "preview": "A) Healing through the pronunciation of natural origin words - 'Shabdpathy' from 'Natural origin Word Science'...",
    "content": "A) Healing through the pronunciation of natural origin words - 'Shabdpathy' from 'Natural origin Word Science' brings forth newly discovered words. When spoken, they naturally acquire rhythm and cadence, which enhance the human body's self-regulating electrical system. This system gets more effectively activated and conducted, thereby improving the functioning of the brain, heart, lungs, and all internal organs. The pronunciation of these words acts as an exercise for these organs, reactivating dormant, stagnant, or lost micro-organs, making them lively and functional. Consequently, the body absorbs oxygen more efficiently, which increases hemoglobin levels and boosts blood circulation and regeneration automatically.",
    "conDohaTitle": "B) Global Saint Kabir Maharaj, explaining the power and importance of words, says:",
    "conDoha": "\n              Speak words carefully, words have neither hands nor feet.\n              One word can heal, another can wound.\n              Be mindful of words, once spoken they never return.\n              Breaking someone’s heart will not bring you peace.\n              Understand the value of words, they shape destinies.\n              Bitter words please no one, always speak the truth.\n              Listen to the saint’s nectar-like words, fill your speech with sweetness.\n              The word is supreme, it carries knowledge.\n              Food spilled from a sieve cannot be gathered back.\n              Kabir says, listen dear saints, words shape the world.\n              ",
    "videoUrl": "https://youtube.com/shorts/RWmCs3TohYI?si=r3aR7I4AuZYH64fH"
  },
  {
    id: 4,
    title: "5) Science in the Modern Era",
    preview: `A) In today's advanced era, science has progressed so much...`,
    content: `A) In today's advanced era, despite the availability of highly developed means and scientific progress, the average human lifespan does not seem to be increasing. Instead, many people are falling sick at a young age and facing premature death. While we cannot eliminate death, is there a way to achieve longevity?
    By using specific techniques and practices, humans can not only desire a long life but also attain it. One such method involves the pronunciation of 'ShabdakoshaVinashShabd'—a set of phonetic words derived from "Natural Origin Word Science. B)" If spoken daily, these words create a unique airflow in the vocal cords, allowing more air to pass rapidly through the trachea compared to conventional words. This increased airflow causes intense vibrations in the vocal folds, amplifying the sound of speech. C) As a result, this phonetic process stimulates and exercises even the most delicate muscles and organs within the human body.
     This is the key difference between modern dictionary words and the 'ShabdakoshaVinashShabd' derived from "Natural Origin Word Science." D) The truth behind this can be explored through the study of 'Shabdpathy' (Word Therapy). --- **
    "Choose your words wisely, as words have no hands or feet.
    One word can heal, while another can wound.
    Be mindful of your words, for once spoken, they do not return.
    A bitter tongue pleases no one; speak only the truth.
    Listen to the sacred words of the Guru and let your speech be sweet like nectar.
    Words are powerful; they carry wisdom and knowledge.
    Just as fallen grains cannot be picked up again,
    Kabir says—words create and destroy." ** ---`,
    conDohaTitle: `E) Renowned poets and social reformers highlight the power and importance of words:`,
    conDoha: `
    Words can be auspicious, words can be destructive,
    Words can uplift, words can condemn,
    Words ignite flames in countless homes!!
    Words bring joy, words bring sorrow!
    Choose words carefully, speak with kindness!!
    Words hold deep meaning, they define relationships!
    Let us forge bonds of friendship through words!!`,
    videoUrl: `https://youtube.com/shorts/GXIXh9_g47Q?si=BiBzpEUDJ1joNUhv`,
  },
  {
    id: 5,
    title: "6) Wealth, Property, and Money in the Modern World",
    preview: `A) In today's modern world, humans possess immense wealth, property...`,
    content: `A) In today's modern world, humans possess immense wealth, property, money, and countless luxuries. Despite this, the immune system of the human body is weakening, and moral values are declining. Even though nature, the environment, and creation itself are always striving for human well-being, there is a growing disconnect between humanity and the natural sciences, environmental sciences, and the biological sciences that have existed for centuries.
    B) Humans are divided into different ideologies—some are theistic, some atheistic, and some rationalists. Despite their awareness of nature, environment, and creation, they fail to perceive their true essence. The ultimate harmony of the universe lies in the convergence of nature, environment, and creation.
    C) The fundamental truth of how this universal unity can be maintained is embedded in "Natural origin Word Science" and 'Shabdapathy.' Understanding these principles is crucial in today's time. Otherwise, humanity will continue to decline in moral and physical aspects. The realization of how the unity of 'Body, Speech, and Mind' is established will lead to a profound understanding of human values. Failing to do so will only increase inhumanity, causing more physical deterioration rather than growth. It is essential to be aware of this and take necessary steps to preserve human well-being.`,
    conDohaTitle: `D) Saint Tukaram Maharaj emphasizes the power and significance of words:`,
    conDoha: `
    The body is a treasure chest, and devotion is its wealth.
    Open the door to the divine now, open the door to the divine.`,
    videoUrl: `https://youtube.com/shorts/Wc7dIXt7hnw?si=ywepDXKN-eQdWanm`,
  },
  {
    id: 6,
    title: "7) Natural Speech and Pronunciation",
    preview: `A) Nature-inspired natural, primary, primitive, original, organic, cultural...`,
    content: `A) Nature-inspired natural, primary, primitive, original, organic, cultural speech and pronunciation directly influence the human forehead, three brains, tongue, teeth, palate, salivary glands, ears, nose, eyes, cheeks, throat, heart, lungs, small intestine, large intestine, kidneys, rectum, and numerous other internal organs.
    B) These words are a part of an ancient linguistic system discovered by early Indian scientists. The Indian language once had phonetic words that were strict but promoted health, scientific understanding, philosophical insights, and social harmony. Unfortunately, these words are now missing from modern literature and dictionaries.
    However, these invaluable natural origin words, associated with human physiology and well-being, have been compiled into "Natural origin Word Science" through 'Shabdapathy.' This knowledge is now available for everyone, and using it for achieving longevity and health is not just necessary but essential.
    `,
    conDohaTitle: `C) Chhatrapati Shivaji Maharaj highlights the power and importance of words:`,
    conDoha: `
    Words are mightier than an army,
    Words conquer the minds of enemies.`,
    videoUrl: `https://youtube.com/shorts/o5Em7P71fpk?si=JbNHIgV1pKuK6icu`,
  },
  {
    "id": 7,
    "title": `8) Treatment through pronounciation of "words without dictionries"`,
    "preview": "A) Prevention of brain and bone degeneration along with balancing blood pressure and breath...",
    "content": `A) Prevention of brain and bone degeneration along with balancing blood pressure and breath, strengthening the lungs, enhancing the digestive system, increasing digestive power, and boosting immunity through the development of various words.\n\n 🗣️🧑‍🧑‍🧒‍🧒 The origin of sound lies in the lungs and the purification of blood, air, water, and food.\n 🫁Lungs, 🫀Heart, 🧠Brain, 👅Tongue - When exercised effectively using 'Words Without Dictionary,' it enhances digestion, increases physical strength, and boosts immunity, along with improving efficiency. B) The brain, which controls the human body, is divided into four parts but functionally has three. In today’s world, preventing brain and bone degeneration along with stopping rheumatism has become a necessity.\n\n C) 🧠Brain and 💪🩻🦵Bone degeneration along with rheumatism can be prevented by balancing blood pressure and breath, strengthening the lungs, developing the brain through exercise, and enhancing the digestive system. Through the natural origin word science of "Word Therapy" using 'Words Without Dictionary,' it enables subtle and micro pores in the body to function effectively. This scientific sound-based therapy stimulates inactive organs by regulating blood supply and enhancing their functionality.\n\n The vibrational energy from these words helps regulate blood pressure, breath, and brain activity, which ultimately leads to a reduction in brain cell and bone degeneration. This improves the efficiency of the brain, heart, lungs, and digestive system, strengthening the body's immunity and productivity.`,
    "conDohaTitle": "D) Global Saint Kabir Maharaj emphasizes the power and importance of words:",
    "conDoha": "The words on paper, the markings of intellect,\nOnly through words can one attain success.\nThere is devotion in words, there is creation in words,\nEverything exists because of words.",
    "videoUrl": "https://youtube.com/shorts/GXIXh9_g47Q?si=BiBzpEUDJ1joNUhv"
    },
    {
    "id": 8,
    "title": "9) Bharat is the Search for Truth",
    "preview": "A) Bharat is the search for truth; however, some associate it solely with King Bharat's name...",
    "content": "A) Bharat is the search for truth; however, some associate it solely with King Bharat’s name. But both 'Bharat' and 'Bharat' are deeply originated in scientific, egalitarian, and truth-based principles. This understanding is essential for all humanity as it ensures internal physical exercise through 'Words Without Dictionary'.",
    "conDohaTitle": "B) Global Saint Kabir Maharaj emphasizes the power and importance of words:",
    "conDoha": "Speak with care, words have no hands or feet.\nOne word can heal, another can wound.\nBe mindful of words, once spoken,\nThey can never be taken back.\nWords have power to create and destroy.\nBitter words are never liked, always speak the truth.\nListen to the divine words of the Guru,\nAnd let them fill your mouth with nectar.\nWords are great, words contain knowledge.\nLike spilled grains that cannot be picked up,\nKabir says, the game of words is supreme.",
    "videoUrl": "https://youtube.com/shorts/Wc7dIXt7hnw?si=ywepDXKN-eQdWanm"
    },
    {
    "id": 9,
    "title": "Free! Free! Free! 10) 'Words Without Dictionary' Live Demonstration \n\n The Word 'Water' in 'Words Without Dictionary'",
    "preview": "A) The word 'Water' in 'Words Without Dictionary' based on Natural origin Word Science...",
    "content": `A) Natural origin Word Science introduces 'Words Without Dictionary' through 'Word Therapy' with numerous words created over time. Here is a demonstration:\n\n  In ancient times, primitive humans lived together in groups in a wild and mute state. During a drought, while wandering through unfamiliar, deserted jungles, they struggled to find water despite searching rivers, streams, and springs. These mute humans would communicate with each other through gestures, signs, and hand movements, attempting to convey their thirst. However, the others often failed to understand these signals—what they meant and why they were being made—resulting in no water being found.

    B) In such desperate thirst, they would not hesitate to drink any water that came their way. But water remained elusive. Even after digging holes in dried riverbeds and barren places, they couldn't find any. As the search for water continued, their physical strength dwindled, yet the thirst remained unquenched.
    
    C) Out of helplessness, as a gesture and expression, these mute humans began pressing their lips together, moving them up and down, creating a sound. From this action, the first vocal expression emerged—“ppa”—then “ppaa.” But still, water did not appear.
    
    D) Repeated attempts to express thirst using the same sounds—“ppa” and “ppaa”—along with actions and gestures, eventually resulted in new sounds. As they gasped for air, exhausted and longing for water, sounds resembling “na” and “ṇi” were produced. These came from mixing nasal and oral breath, often while looking up at the blue sky and clouds in hope of rain.
    
    E) Out of these utterances, the “ṇi” sound got linked with the “ppa” sound. Through the combination of these two—gesture and sound—the symbolic word “ppaani” (water) was born. At that moment, for the first time, the meaning of this expression was mutually understood. Still, actual water was not found.
    
    F) Eventually, on the brink of death, their mouths became more parched than even a diabetic's during a health crisis. In desperation, while expressing their deep anguish, they moved their tongues vigorously, creating a new sound similar to “ḷ.” When this “ḷ” sound was added to “ppa,” the expression evolved into “ppḷaaṇi.” This three-part sound activated the salivary and thyroid glands, leading to an increase in saliva. This saliva momentarily quenched their thirst, preventing imminent death and granting temporary rejuvenation.
    
    G) The sound “ppḷaaṇi”—a "wordless word from a vocabulary-less language"—had such vibrational power that it awakened dormant, microscopic inner organs through its intensity. This marked the beginning of “Shabdapathy” (healing through words), enabling humans to self-heal by activating saliva as a temporary solution for thirst and survival, thus reclaiming life force through sound alone.
    
    In today’s "Shabdapathy" system, these rare, invented, and sacred sounds—spread across 3, 7, or 10 stages—can lead to physical well-being through powerful word pronunciations. Once these sound-experiences are personally felt, their vibrations can activate even the most subtle bodily functions, positively impacting organs such as:
    
    💹🧠👂👃👀👅👄🦷🫁🫀🩻🪸🦠
    
    "Natural Root Word Science," through this sound-healing method called Shabdapathy, acknowledges even traditionally considered “abusive” words as powerful sacred expressions containing hidden wellness effects. Through oral tradition and practical experience, countless such beneficial words have been passed down and are invaluable for achieving better health.
    
    H) Each word given through our practice is recorded in our booklet and sent to our Director’s Board for resolution. Once registered with the Executive Director and following due legal processes under the Indian Copyright Act, 1976, and Indian Patent Act, 1970, the compiled group of such words will be shared upon request, within a limited and regulated timeframe.`,
    "conDohaTitle": "I) Chhatrapati Shahu Maharaj also emphasizes the power and significance of words:",
    "conDoha": "Words are the foundation of a kingdom,\nWords are the support of the people.\n",
    "videoUrl": "https://youtube.com/shorts/o5Em7P71fpk?si=JbNHIgV1pKuK6icu"
    }


  ]
};
const Blogs = ({language}) => {
  const [expandedBlog, setExpandedBlog] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const visibleBlogs = showAll ? blogsData[language] : blogsData[language].slice(0, 3);
 

  const toggleBlog = (id) => {
    setExpandedBlog(expandedBlog === id ? null : id);
  };

  return (

    <section className="py-10 px-6 max-w-8xl mx-auto">
      {/* <h2 className="text-3xl font-bold text-center mb-8">Blogs</h2> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleBlogs.map((blog) => ( 
          <div key={blog.id} className="p-6 bg-white shadow-lg rounded-xl text-center  transform transition-transform duration-300 hover:scale-105">
            <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
            <p className="text-gray-600 text-justify">{expandedBlog === blog.id ? blog.content : blog.preview}

              <br />
              <a
                href={blog.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-bold hover:underline"
              >
                Watch on YouTube
              </a></p>
              <h6 className="text-xl  mb-2">{expandedBlog === blog.id ? blog.conDohaTitle : ""}</h6>
            <p className="text-gray-600 text-justify">{expandedBlog === blog.id ? blog.conDoha : ""} </p>
            <button
              onClick={() => toggleBlog(blog.id)}
              className="mt-4 px-4 py-2 w-36 bg-blue-600 text-center align-middle text-white rounded-lg hover:bg-blue-700 transition"
            >
              {expandedBlog === blog.id ? "Show Less" : "Know More"}
            </button>
          </div>

        ))}

      </div>
      <button
        onClick={() => setShowAll(!showAll)}
        className="px-6 py-2 mt-10 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transform transition-transform duration-300 hover:scale-120"
      >
        {showAll ? "Show Less" : "Show More"}
      </button>
    </section>

  )
}

export default Blogs
