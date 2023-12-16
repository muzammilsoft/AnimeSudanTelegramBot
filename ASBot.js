const TelegramBot = require('node-telegram-bot-api');
const token = 'Bot Token Here!';

const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {

 bot.onText(/\/start/, (msg) => {
 
  bot.sendMessage(msg.chat.id, 
  `مرحبا! أنا بوت أنمي السودان و مستعد لمساعدتك
  للتعرف على المجموعة أكثر من خلال ما أقدمه لك
  ،احرص على الإنضمام لقناة البوت أولاً قبل أي شيء
  @Anime_Sudan
  بعد الإنضمام اختر من الأوامر أدناه لمعرفة ما تحتاج.`, {
  "reply_markup": {
   "keyboard" : [["من نحن؟","الفيالق"]  ,  ["أقسام أنمي السودان"], ["ركن المتجر","الإبلاغ عن شكوى"],[" المطور"]]
  }
  });

   })
 
 //الانتقال إلى من نحن
 
 let whoArewe = "من نحن؟"
 
 if(msg.text.includes(whoArewe)){
 whoAreWe()
 }
 

 
 //الإنتقال إلى قسم الفيالق
 
 let teams = "الفيالق"
 
 if(msg.text.includes(teams)){
 bot.sendMessage(msg.chat.id, `عذراً قسم الفيالق لا يزال تحت التطوير ಠ_ಠ `,
 {"reply_markup": {
 "keyboard":[["عودة إلى الرئيسية"]]
 }


//الانتقال الى أقسام أنمي السودان

let divisions = "أقسام أنمي السودان"

if(msg.text.includes(divisions)){
ASSections()
}

//AS STORE

let ASStore = "ركن المتجر"

if(msg.text.includes(ASStore)){


bot.sendMessage(msg.chat.id, `
نعتذر بشدة و لكن نظراً للظروف العصيبة التي تمر بها
البلاد، فعمل المتجر متوقف حالياً سنعلمكم في حال جد جديد
ندعو الله أن يحفظ السودان و أهله.`)

}

//الشكاوى

let reportUs = "الإبلاغ عن شكوى"

if(msg.text.includes(reportUs)){
reportUs()
}


//المطور

let dev = "المطور"

if(msg.text.includes(dev)){
developer()
}


})


//دالة من نحن؟
const ASdescription = `
أنمي السودان قد تبدو في اللحظة الأولى و كأنها 
مجرد مجموعة فيسبوك تضم الأوتاكو و عشاق الأنمي الياباني
في مكان واحد،قد يبدو ذلك صحيح إلى حد ما لكن في الواقع
أنمي السودان عبارة عن منظومة تشمل الشباب و المراهقين أو ما دون ذلك
ذوي المواهب الفريدة كالرسم ،التصميم، اصحاب ااحناجر الذهبية 
و غيرهم و الذين يشتركون في إهتمام واحد و موحد ألا و هو الأنمي.
  هدف المجموع بشكل غير مباشر هو صقل تلك المواهب 
  لمواجهة المستقبل و بكل خبرة في مبادرة أطلقاها المجموعة و هي 
  تحمل نفس اسم شعارها #معاً_نحو_الافضل`

const legionsDesc = `
حسناً زورو 🐸..
ها أنت ذا ضائع و تبحث عن فيلق يحتويك إذا كنت لا
تعرف ما هي الفيالق بعد يمكنك الرجوع للقائمة الرئيسية و اختيار 
"أقسام أنمي السودان" لمزيد من التفاصيل
أما الآن لنرى ماذا تمتلك من مهارات لتستفيد منها الفيالق، و
ما هي الفيالق القادرة على إستقطابك بناء على هذه 
القدرات او المهارات او الهوايات التي لديك.
`

const sectionsDesc = `أنمي السودان مقسمة لعدة أقسام و مجموعات
منفصلة لمختلف الإهتمامات عليك الإطلاع سريعاً عليها..`


const libraryDesc = `
**مكتبة أنمي السودان**
هي قسم لعشاق الكتب و الروايات و المطالعة يتفنن
فيها الأعضاء بكتاباتهم ساعين من أجل تلامس كلماتهم
القراء محبي الخواطر و العبر ، هي المكان الأنسب
ان كنت من ذاك النوع من الأشخاص لذا لا تتردد في اخذ
جولة قصيرة إلى هناك.
`;

const drawingWorkshop = `**مرسم أنمي السودان**
وجهة مثالية لرسامي الأنمي سواء كانوا محترفين أو هواة
يستعرض الأعضاء فيها رسوماتهم الفنية و يتسابقون فيما بينهم
لتحديد أفضلها، خذ رسوماتك معك و استعرضها الآن!`

const mangakaSection = `**Sudanese Mangaka**
هي ملتقى لصناع المانجا السودانيين ليبرزوا أعمالهم للجمهور
من كل أرجاء الوطن ، تعتبر هذه المجموعة وجهة مثالية
لعشاق و محبي القصص المصورة سواء كانوا مجرد قراء عاديين
أو رسامين منشئي محتوى فلا تتردد في أخذ جولة قصيرة هناك.`

const reporting = `
يستقبل البوت هنا الشكاوى و الإقتراجات منك فبا تتردد
في الإبلاغ عن المشاكل الفنية في البوت أو في المجموعة
بشكل عام ، اكتب ما تعاني منه هنا:
`

const botDev = `<b>مطور البوت</b>
KG SOFT follow social media platforms:
<a href="www.facebook.com/khartoum.ghoul"> فيسبوك | KG </a>
<a href="https://github.com/muzammilsoft">GitHub</a>`

function whoAreWe() {
bot.sendMessage(msg.chat.id, ASdescription)
}

//دالة و خوارزمية فيالق أنمي السودان

function legions() {
bot.sendMessage(msg.chat.id, legionsDesc,
 {"reply_markup" : {
 "keyboard": [["البحث عن فيلق"],["عودة إلى الرئيسية"]]}
 })

}

function ASSections() {

bot.sendMessage(msg.chat.id, 
sectionsDesc, {"reply_markup" : {
"keyboard": [["قسم المكتبة","قسم الرسم"],["قسم المانجا","الفيالق"],["أنمي السودان الحرة +AS","عودة إلى الرئيسية"]]}
})


if(msg.text.includes("قسم المكتبة")){

bot.sendMessage(msg.chat.id, libraryDesc, {"reply_markup" : {
"keyboard": [["إنضمام لقسم المكتبة"],["عودة إلى الرئيسية"]]}})
}

if(msg.text.includes("قسم الرسم")){
bot.sendMessage(msg.chat.id, drawingWorkshop, {"reply_markup" : {
"keyboard": [["الإنضمام للمرسم"],["العودة إلى الرئيسية"]]}})

}

if(msg.text.includes("قسم المانجا")){

bot.sendMessage(msg.chat.id, mangakaSection, {"reply_markup":
{"keyboard": [["زيارة Sudanese Mangaka"],["العودة إلى الرئيسية"]]}});

}

}

function reportUs() {
bot.sendMessage(msg.chat.id, reporting, {"reply_markup":
{"keyboard": [["عودة إلى الرئيسية"]]}})
}


