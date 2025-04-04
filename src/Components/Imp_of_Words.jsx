import React from 'react';
import { useState } from "react";

const Imp_of_Words = ({ language }) => {

  const [selectedPoem, setSelectedPoem] = useState(null);

  const poems = {
    mr: [
      {
        id: 1,
        title: "जगतगुरू संत तुकाराम महाराज शब्दांचे सामर्थ्य  व महत्व विशद करताना बोलतांना बोलतात",
        preview: "आम्हा घरी धन, शब्दांचीच रत्ने।\nशब्दांचीच शस्त्रे यत्न करू ।।\n...",
        fullContent: `आम्हा घरी धन, शब्दांचीच रत्ने।\nशब्दांचीच शस्त्रे यत्न करू ।।\n शब्दची आमुच्या जीवाची जीवन।\n शब्द वाटू धन जनलोका ।।\n तुका म्हणे पहा """शब्दची हा देव"""। \nशब्दांची गौरव पूजा करू ।। \nघासावा शब्द, तासावा शब्द ।\n तोलावा शब्द बोलण्यापूर्वी ।।\n शब्द हेची कातर। शब्द  सुई दोरे।\n बेतावेत शब्दं शास्त्रधारे ।।\n बोलावे मोजके नेमके खमंग खमके।\n ठेवावे भान देश काळ पात्राचे ।।\n बोलावे बरे बोलावे खरे।\n शब्दामध्ये झळकावी ज्ञान, कर्म, भक्ती ।।\n स्वानुभावातुन जन्मावा प्रत्येक शब्द।\n शब्दांमुळे दंगल शब्दांमुळे मंगल ।।\n शब्दाचे हे जंगल जागृत रहावा ।\n जिभेवर ताबा सर्व सुख दाता ।।\n पाणी वाणी नानी नासु नये ।।`,
      },

      {
        id: 2,
        title: "वैश्विक संत कबीर महाराज शब्दांचे सामर्थ्य  व महत्व विशद करताना बोलतांना बोलतात",
        preview: "शब्द संभाल के बोलिए, शब्द के हात न पाव।\nएक शब्द औषध करे, एक शब्द करे घाव ।।...",
        fullContent: " शब्द संभाल के बोलिए, शब्द के हात न पाव।\nएक शब्द औषध करे, एक शब्द करे घाव ।।\n शब्द का रखना ध्यान रे, मुख से निकला शब्द।\n वापीस फिर नही आयेगा, दिल किसीका तोडकर।।\n तुम्हे चैन न आयेगा, शब्द, का रखना ध्यान रे।\n शब्द का मुल्य जाणो, शब्द से बनती बीघडती।\nरुप कडवा भाता ना किसीको, सत्य मीन बोलिए ।।\n गुरु की अमृतवाणी सुनके, मुखमे अमृत घोलिए।\n मीन शब्द महान है, शब्द मे भरती ज्ञान ।।\n चलनी से गिरा हुआ अन्न, फिर न लगे हाथ में। \n कबीर कहत सुनो भाई साधु, \nशब्द का खेल शब्द में ||",
      },

      {
        id: 3,
        title: "प्रख्यात कवी व सामाजिक कार्यकर्ते शब्दांचे सामर्थ्य   व महत्व विशद करताना बोलतांना बोलतात",
        preview: "शब्दच मंगल, शब्दच जंगल, \n शब्दच भारी, शब्दच तारी,\n शब्दांनीच पेटती कित्येक घरे !!...",
        fullContent: "शब्दच मंगल, शब्दच जंगल, \n शब्दच भारी, शब्दच तारी,\n शब्दांनीच पेटती कित्येक घरे !!\n शब्दच सोहळा, शब्दांनीच येती मरण कळा!\n सावरावे शब्द सजवावे शब्द, आपुलकीने !!\n शब्दांमध्येच मर्म, स्नेहबंधाचे कर्म !\n चला बांधुया मैत्रीबंध, चला बांधुया मैत्रीबंध !!",
      },
      {
        id: 4,
        title: "महात्मा ज्योतीराव फुले शब्दांचे सामर्थ्य   व महत्व विशद करताना बोलतांना बोलतात",
        preview: "विद्येविना मती गेली। मतीविना निती गेली ।।\nनितीविना गती गेली। गतीविना वित गेले ।।...",
        fullContent: "विद्येविना मती गेली। मतीविना निती गेली ।।\nनितीविना गती गेली। गतीविना वित गेले ।।\nवित्तविना शुद्र खचले। इतके अनर्थ एका अविद्येने केले ।।",
      },
      {
        id: 5,
        title: "संत तुकाराम महाराज शब्दांचे सामर्थ्य   व महत्व विशद करताना बोलतांना बोलतात",
        preview: 'देहाची तिजोरी, भक्तिचाच ठेवा। उघड दार देवा आता, उघड दार देवा ।।...',
        fullContent: `देहाची तिजोरी, भक्तिचाच ठेवा। \nउघड दार देवा आता, उघड दार देवा ।। `,
      },
      {
        id: 6,
        title: "वैश्विक संत कबीर महाराज शब्दांचे सामर्थ्य   व महत्व विशद करताना बोलतांना बोलतात",
        preview: "कागज कि लेखी, मती कि रेखी, \nशब्दों की शक्ती से ही सिद्धी है।\nशब्द में भक्ति है...",
        fullContent: "कागज कि लेखी, मती कि रेखी, \nशब्दों की शक्ती से ही सिद्धी है।\nशब्द में भक्ति है, शब्द में सृष्टी है,\n शब्द से ही सबकुछ है।",
      },
      {
        id: 7,
        title: "छत्रपती शिवाजी महाराज शब्दांचे सामर्थ्य   व महत्व विशद करताना बोलतांना बोलतात",
        preview: "शब्द हा सैन्यापेक्षा श्रेष्ठ,\nशब्द हा शत्रुच्या मनाला जिंकतो....",
        fullContent: "शब्द हा सैन्यापेक्षा श्रेष्ठ,\nशब्द हा शत्रुच्या मनाला जिंकतो. \n ",
      },

      {
        id: 8,
        title: "छत्रपती शाहू महाराज सुध्दा शब्दंच कसे प्रजेसाठी आधार व सहारा असुन शब्दांचे महत्त्वासह सामर्थ्य विशद करताना बोलतात",
        preview: `'शब्दं' हा राज्याचा आधार | , \n'शब्दंच' प्रजेचा सहारा आहे. ||....`,
        fullContent: `'शब्दं' हा राज्याचा आधार | , \n'शब्दंच' प्रजेचा सहारा आहे. || `,
      },
      {
        id: 9,
        title: "संत तूकडोजी महाराज शब्दांचे सामर्थ्य   व महत्व विशद करताना बोलतांना बोलतात",
        preview: `राष्ट्रसंत तुकडोजी महाराज यांचे जवळ   मानसांना सजिव करण्यासाठी तात्कालातील जनलोकांजवळ नसलेली अनेक शब्द....`,
        fullContent: `राष्ट्रसंत तुकडोजी महाराज यांचे जवळ   मानसांना सजिव करण्यासाठी तात्कालातील जनलोकांजवळ नसलेली अनेक शब्द उपलब्ध होती. राष्ट्रसंतांच्या मनात जे समताधिष्ठित सत्य सत्यधिष्ठित समता संबंधित शब्द त्या काळातही राष्ट्रसंत तुकडोजी महाराज यांचे स्मरणात उपलब्ध होते ; ते शब्द आज उपलब्ध नाही . राष्ट्रसंतांनी शब्दांचे समताधिष्ठित सत्य सत्यधिष्ठित समता,स्वातंत्र्य , बंधुत्व या तत्वप्रणालीची नेहमी वेळोवेळी ग्वाहीच दिली . शब्दांचे सामर्थ्यासह शब्द विषयक शब्दविद्या व शब्द महत्व राष्ट्रसंतांना कळल्यामुळेच राष्ट्रसंत तुकडोजी महाराजांनी स्वतःचे मनातिल  शब्दंसंग्रहाचे  उपलब्धते व शब्द शक्ती द्वारे अशुभ कसे शुभ होते हे मोठ्या आत्मविश्वासाने विशद करतांना बोलतात.   \n\n                   "मै शब्द की खैरात हु ,सब शब्द मेरे पास है !\n मुर्दे जगा दु शब्द से , होता अशुभ का ऱ्हास !!"  \n                            असे भजन प्रवचनातुन नेहमी बोलले तेच त्यांचे अपुर्ण स्वप्न साकार करण्यासाठी  त्यांच्याच मनातील शुभ शब्दांची उपलब्धता  म्हणजे  'शब्दकोषविनाशब्द' शब्दविद्येतिल मौखिक साठा आजही असुन तोच शब्दसंग्रह जनलोकांना  प्राप्त व्हावा , जो प्रजेचा सहारा आहे. भारतीय @ महाभारतातीलच नव्हे तर विश्वातील जनलोकांपर्यंत सतशब्दांच्या जाणीवे अभावी व राष्ट्रसंत तुकडोजी महाराजांना अपेक्षित असलेले पुर्णतः शब्द सर्व मानवांपर्यत  पोहोचवु न शकल्याने व ते शब्द उच्चारच लोकमुखात न आल्याने कसे मानवी जिवांचे सर्व सुक्ष्म अतीसुक्ष्म अवयव जिवहीन म्हणजेच राष्ट्रसंताचे भाषेत जिव मुर्दाड झालेली आहेत ; अशा
        जिवहीन झालेल्या सुक्ष्म अतिसूक्ष्म अवयवांना आतातरी मानवांनी सजिव करने अत्यावश्यक आहे .  मानवी जिवांचा पालनपोषण सतशब्दीत शब्दकोषविनाशब्द  'उच्चाराने उपचार' केल्यास शेतकऱ्यांनी पिकविलेल्या अन्नाशिवायचे शब्दांन्न प्राप्त होईल. राष्ट्रसंत तुकडोजी महाराज यांचे 'शब्द की खैरात' मधील शब्दांनी अशुभाचा कसा ऱ्हास  होईल याबाबत राष्ट्रसंत तुकडोजी महाराज प्रवचनात अनेक वेळा बोलले. राष्ट्रसंतांनी नागपूर येथे १९३६ साली केलेले भजन प्रवचन ऐकून मात्र राष्ट्रपीता  महात्मा गांधी यांनी  प्राणाचे मौन सोडले इतके प्रभावी शब्दात त्यांचे भजन प्रवचन होते तर आता भारतीय @ महाभारतीयांचे शब्दान्नां अभावी प्रत्येक मानवाचे होणारे आजचे कुपोषण आतातरी दूर करून घ्यावे म्हणजे राष्ट्र समृद्ध होईल.
        \n\n म्हणूनच राष्ट्रसंत तुकडोजी महाराज पुन्हा बोलतात :- \n"शब्द हेच ईश्वर, शब्दच सर्वस्व |\n शब्द वाचून सृष्टी, सुनी दिसे जग ||"`,
      },
      {
        id: 10,
        title: "जागतिक संत गाडगेबाबा शब्दांचे सामर्थ्य   व महत्व विशद करताना बोलतांना बोलतात",
        preview: `जागतिक संत गाडगेबाबा यांनी सुध्दा वैश्विक संत तुकाराम महाराज यांच्या "शब्दची हा देव" या उक्ती प्रमाणे भायखळा....`,
        fullContent: `जागतिक संत गाडगेबाबा यांनी सुध्दा वैश्विक संत तुकाराम महाराज यांच्या "शब्दची हा देव" या उक्ती प्रमाणे भायखळा येथील अखेरच्या किर्तनातुन म्हणतात "जगात 'देव' आहे जगाची सेवा करा," 'देवहो'`,
      },
    ],
    en: [

      {
        id: 1,
        title: "Jagatguru Saint Tukaram Maharaj Explains the Power and Importance of Words",
        preview: "In our home, wealth lies in words, gems of speech.\nWords are our weapons, let us strive for them...",
        fullContent: `In our home, wealth lies in words, gems of speech.\nWords are our weapons, let us strive for them.\nWords are the life of our very existence.\nLet us distribute words as wealth among people.\nTuka says, see that "words themselves are divine."\nLet us worship the glory of words.\nSharpen words, polish words, \nWeigh words before speaking.\nWords can cut like scissors; words can stitch like a needle and thread.\nMeasure words carefully like the edge of a blade.\nSpeak concisely, precisely, with flavor and clarity.\nMaintain awareness of place, time, and audience.\nSpeak well, speak truthfully.\nLet words shine with knowledge, action, and devotion.\nEach word should be born from personal experience.\nWords can incite riots or bring harmony.\nThis jungle of words must be navigated carefully.\nControl over the tongue is the giver of all happiness.\nWater, speech, and wisdom should never be wasted.`,
      },

      {
        id: 2,
        title: "Universal Saint Kabir Maharaj Explains the Power and Importance of Words",
        preview: "Speak words with caution, for words have neither hands nor feet.\nOne word can heal, another can wound...",
        fullContent: `Speak words with caution, for words have neither hands nor feet.\nOne word can heal, another can wound.\nBe mindful of words, for once spoken, \nThey cannot return, nor mend a broken heart.\nYou will find no peace; be careful with words.\nUnderstand the value of words, for they create and destroy.\nBitter words are not welcome, always speak the truth.\nListen to the nectar- like words of the Guru, \nAnd fill your mouth with sweetness.\nWords are profound, they hold immense knowledge.\nOnce fallen from a sieve, grains cannot be retrieved.\nKabir says, listen, O noble soul, \nWords play the game of life within words.`,
       },
       {
        id: 3,
        title: "Renowned Poet and Social Worker Explains the Power and Importance of Words",
        preview: "Words bring blessings, words create forests.\nWords carry weight, words lead the way...",
        fullContent: `Words bring blessings, words create forests.\nWords carry weight, words lead the way.\nWords set countless homes ablaze!\nWords are celebrations, yet words bring the agony of death.\nChoose words carefully, adorn words with affection!\nWords hold the essence of emotions, the duty of bonds of love!\nLet us forge friendships through words,\nLet us build bridges of companionship through words!`,
        },
        
        {
        id: 4,
        title: "Mahatma Jyotirao Phule Explains the Power and Importance of Words",
        preview: "Without education, intelligence is lost.\nWithout intelligence, morality is lost...",
        fullContent: `Without education, intelligence is lost.\nWithout intelligence, morality is lost.\nWithout morality, progress is lost.\nWithout progress, wealth is lost.\nWithout wealth, the oppressed are crushed.\nSuch are the countless disasters caused by ignorance.`,
        },
        {
          id: 5,
          title: "Sant Tukaram Maharaj Explains the Power and Importance of Words",
          preview: "The body is a vault, devotion is the treasure. \nOpen the door, O Lord, open the door now...",
          fullContent: "The body is a vault, devotion is the treasure. \nOpen the door, O Lord, open the door now...",
        },
        {
          id: 6,
          title: "Universal Saint Kabir Maharaj Explains the Power and Importance of Words",
          preview: "Written on paper, a mark of wisdom, \nOnly through the power of words comes accomplishment.\nThere is devotion in words...",
          fullContent: "Written on paper, a mark of wisdom, \nOnly through the power of words comes accomplishment.\nThere is devotion in words, there is creation in words, \nEverything exists because of words.",
        },
        {
          id: 7,
          title: "Chhatrapati Shivaji Maharaj Explains the Power and Importance of Words",
          preview: "Words are greater than the army, \nWords conquer the enemy’s mind...",
          fullContent: "Words are greater than the army, \nWords conquer the enemy’s mind.",
        },
        {
          id: 8,
          title: "Chhatrapati Shahu Maharaj also speaks about how words serve as a support and refuge for the people, highlighting their significance and power",
          preview: `'Words' are the foundation of the state | , \n'Words alone' are the refuge of the people. ||....`,
          fullContent: `'Words' are the foundation of the state | , \n'Words alone' are the refuge of the people. || `,
        },
        {
          id: 9,
          title: "Sant Tukdoji Maharaj speaks about the power and importance of words",
          preview: `Rashtrasant Tukdoji Maharaj possessed many words that were unavailable to the people of his time to awaken minds....`,
          fullContent: `Rashtrasant Tukdoji Maharaj possessed many words that were unavailable to the people of his time to awaken minds. The words related to equality-based truth and truth-based equality that resided in Rashtrasant Tukdoji Maharaj's memory at that time are not available today. Rashtrasant repeatedly emphasized the principles of equality, truth, freedom, and fraternity through his words. Because he understood the power of words, Rashtrasant Tukdoji Maharaj confidently explained how misfortune could be turned into fortune through his collection of words.  
  
                     "I am the alms of words, all words belong to me! \n I can awaken the dead with words, and misfortune vanishes!!"  
  
                              He frequently spoke these words in his bhajan discourses. His vision was to make his collection of virtuous words available to the people, as they serve as a support for the people. Not only in Indian epics like the Mahabharata but also across the world, due to the lack of awareness about truthful words, Rashtrasant Tukdoji Maharaj's complete vision of spreading words to all humanity could not be fulfilled. Since these words were never spoken by people, the subtle and microscopic elements of human lives have become lifeless. In Rashtrasant's words, human beings have become deadened.  
  
          Now, at the very least, humanity must revive these lifeless elements. The nourishment of human lives should be enriched with truthful words. If words are used as remedies through pronunciation, people will receive nourishment beyond just the food grown by farmers. Rashtrasant Tukdoji Maharaj frequently spoke about how words from the "Charity of Words" could eradicate misfortune. When Rashtrasant delivered a bhajan discourse in Nagpur in 1936, Mahatma Gandhi himself broke his vow of silence after hearing it, so powerful were his words. Now, Indians and the world must eliminate today's malnutrition caused by a lack of nourishing words to make the nation prosperous.  
  
          \n\n Hence, Rashtrasant Tukdoji Maharaj speaks again: \n"Words are God, words are everything |\n Without words, the world appears empty ||"`,
        },
        {
          id: 10,
          title: "Global Saint Gadge Baba speaks about the power and importance of words",
          preview: `Global Saint Gadge Baba, following Universal Saint Tukaram Maharaj's saying, "Words are God," said in his final sermon at Byculla....`,
          fullContent: `Global Saint Gadge Baba, following Universal Saint Tukaram Maharaj's saying, "Words are God," said in his final sermon at Byculla, "There is God in the world, serve the world," 'O God'`,
        },
  
  
  
    ]
    };

const [expandedDohe, setExpandedDohe] = useState(null);
const [showAll, setShowAll] = useState(false);
const visibleDohe = showAll ? poems[language] : poems[language].slice(0, 3);

const toggleBlog = (id) => {
  setExpandedDohe(expandedDohe === id ? null : id);
};
return (
  <div className="p-6">

    {/* Grid Layout */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {visibleDohe.map((poem) => (
        <div key={poem.id} className="p-6 bg-white shadow-lg rounded-lg text-center transform transition-transform duration-300 hover:scale-105">
          <h3 className="text-xl font-semibold mb-2">{poem.title}</h3>
          <p className="text-gray-600 ">{poem.preview}</p>
          <button
            onClick={() => setSelectedPoem(poem)}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Read More
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

    {/* Modal Box */}
    {selectedPoem && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-20">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
          <h3 className="text-xl font-bold mb-2">{selectedPoem.title}</h3>
          <p className="text-gray-700  whitespace-pre-line">{selectedPoem.fullContent}</p>
          <button
            onClick={() => setSelectedPoem(null)}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            Close
          </button>
        </div>
      </div>
    )}
  </div>
);
}

export default Imp_of_Words;
