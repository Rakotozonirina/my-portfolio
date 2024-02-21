import i18n from "i18next"
import { initReactI18next } from "react-i18next"

const resources = {
    en: {
        translation: {
            "acceuil": "home",
            "Sur_moi": "on_me",
            "Projet": "project",
            "Reconnaissance": "testimonial",
            "Contact":"contact",
            "Profession1": "WEB INTEGRATOR AND",
            "Profession2": "FRONT END DEVELOPER",
            "Bonjour": "Hi!",
            "Jesuis": "I am",
            "Description": "I love building websites and if you need a web and front-end integrator capable of doing your project perfectly.",
            "Contactez":"Contact me!",
            "Telecharge": "CV Download",
            "Concerne": "Concern about me",
            "Mon_amour": "My love for building the front end of websites comes with a passion for overcoming obstacles. I am ready to take on any challenge that will allow me to fully exploit my skills and contribute meaningfully.",
            "Formation": "I followed a 9-month training course at sayna for a Front end specialty and all the basics of web development.",
            "Universiter": "MANAGEMENT IT",
            "Parcours": "I have followed an IT management course at the University of Mahajanga IUGM until now.",
            "Test": "A friend who owns a web development company at a web agency suggested that I test the creation of a web interface for a restaurant. My role was to act as front and integrator.",
            "Utilisé": "I used as tools :",
            "réaliser": "in order to create this site.",
            "Sayna": "I completed an assessment project at Sayna, involving many aspects and figures. My role was to act as front and integrator.",
            "Designer": "I suggested creating a portfolio, as she is a professional designer, part of D-clic and Sayna's learners. My role was to act as front and integrator.",
            "Avis": "He created a really exciting portfolio site for me, he followed the concept I asked him for. In addition, he even respected the deadline for the creation of my site even though it is well established 👌🤩 I am so convinced of his capacity and dynamism.",
            "Besoin": "If you need an Integrator and Front-end to do your project, ",
            "Parlant": "speaking here!",
            "Disponible": "I am available to you!",
            "Email": "Email",
            "Ville": "Country/ City",
        }
    },
    fr: {
        translation: {
            "acceuil": "acceuil",
            "Sur_moi": "sur_moi",
            "Projet": "projet",
            "Reconnaissance":"témoignage",
            "Contact":"contact",
            "Profession1": "INTEGRATEUR WEB ET",
            "Profession2": "FRONT END DEVELOPPEUR",
            "Bonjour": "Salut!",
            "Jesuis": "Je suis",
            "Description": "J’aime construire des sites web et si vous avez besoin un intégrateur web et front capable de faire votre projet parfaitement.",
            "Contactez":"Contactez moi!",
            "Telecharge": "CV Télécharger",
            "Concerne": "Concerne sur moi",
            "Mon_amour": "Mon amour pour la construction du front-end des sites web s'accompagne d'une passion pour surmonter les obstacles. Je suis prêt à relever tout défi qui me permettra d'exploiter pleinement mes compétences et de contribuer de manière significative.",
            "Formation": "J’ai suivi une formation de 9 mois chez sayna pour une spécialité Front end et toute les bases de developpement web.",
            "Universiter": "IMFORMATIQUE DE GESTION",
            "Parcours": "j’ai suivi un parcours de gestion informatique chez l’université de mahajanga IUGM jusqu’ à present.",
            "Test": "Un amis possède une boite de développement web au agence web m'a suggéré de faire un test de la création d'un interface web d'un restaurant. Mon role était d'effectuer le front et intégrateur.",
            "Utilisé": "J'ai utilisé comme outils :",
            "réaliser": "afin de réaliser ce site.",
            "Sayna": "J'ai mené à bien un projet d'évaluation chez Sayna, impliquant de nombreux aspects et figures. Mon role était d'effectuer le front et intégrateur.",
            "Designer": "J'ai suggéré la création d'un portfolio, car elle est une designer professionnelle, faisant partie des apprenants de D-clic et Sayna. Mon role était d'effectuer le front et intégrateur. ",
            "Avis": "Il m'a réalisé un site de portfolio vraiment excitant, il a bien suivi le concept que j'ai lui demandé.  En plus, il a même respecté le deadline de la réalisation de mon site alors que c'est bien établi 👌🤩 Je suis tellement convaincu pour son capacité et son dynamisme.",
            "Besoin": "Si vous avez besoin un Intégrateur et Front-end de faire votre projet, ",
            "Parlant": "en parlant ici!",
            "Disponible": "je suis disponible à vous!",
            "Email": "Email",
            "Ville": "Pays/ Ville",
        }
    },
    mg: {
        translation: {
            "acceuil": "tongasoa",
            "Sur_moi": "amiko",
            "Projet": "tetikasa",
            "Reconnaissance":"fijoroana_ho_vavolombelona",
            "Contact":"fifandraisana",
            "Profession1": "WEB INTEGRATOR SY",
            "Profession2": "DEVELOPER FRONT END",
            "Bonjour": "Salama!",
            "Jesuis": "Izaho dia",
            "Description": "Tiako ny manangana tranokala ary raha mila tranonkala sy integrator eo anoloana ianao afaka manao tsara ny tetikasanao.",
            "Contactez":"Mifandraisa amiko!",
            "Telecharge": "CV Download",
            "Concerne": "Mahakasika ny tenako",
            "Mon_amour": "Ny fitiavako manorina ny vohikala amin'ny faran'ny vohikala dia miaraka amin'ny finiavana handresy ireo sakana. Vonona aho ny hiatrika ny fanamby rehetra izay hamela ahy hitrandraka tanteraka ny fahaizako sy handray anjara amin'ny heviny.",
            "Formation": "Nanaraka fiofanana nandritra ny 9 volana tao amin'ny sayna aho ho an'ny sehatra Front end sy ny fototry ny fampivoarana tranonkala.",
            "Universiter": "FITANTANANA INFORMATIKA",
            "Parcours": "Nanaraka ny taranja fitantanana informatika teny amin’ny oniversiten’i Mahajanga IUGM aho hatramin’izao.",
            "Test": "Nisy namana iray manana orinasa mpamolavola tranonkala iray ao amin'ny masoivoho tranonkala iray nanoro hevitra ny hanandrana ny famoronana interface tsara ho an'ny trano fisakafoanana iray. Ny anjarako dia ny manao ny lohany sy ny integrator.",
            "Utilisé": "Nampiasa fitaovana :",
            "réaliser": "mba hamoronana ity tranokala ity.",
            "Sayna": "Nahavita tetikasa fanombanana tao amin'ny Sayna aho, nahitana lafin-javatra sy tarehimarika maro. Ny anjarako dia ny manao ny lohany sy ny integrator.",
            "Designer": "Nanolo-kevitra ny hamorona portfolio aho, satria mpamorona matihanina izy, anisan'ny mpianatra D-clic sy Sayna. Ny anjarako dia ny manao ny lohany sy ny integrator.",
            "Avis": "Namorona tranokala portfolio tena mampientam-po ho ahy izy, nanaraka ny foto-kevitra nangatahiko taminy izy. Fanampin'izay dia nanaja ny fe-potoana nanaovana ny tranokalako mihitsy aza izy na dia efa miorina tsara aza 👌🤩 Tena resy lahatra aho amin'ny fahaizany sy ny fahavitrihany.",
            "Besoin": "Raha mila mpandraharaha sy mpamatsy vaovao hanangonana ny tetikasao, ",
            "Parlant": "amin'ny antoko eto!",
            "Disponible": "Misy ahy ho anao!",
            "Email": "Mailaka",
            "Ville": "Firenena/ Tanàna",
        }
    }
};

i18n
.use(initReactI18next)
.init(
    {
        resources,
        lng: "fr",
        interpolation: {
            escapeValue: false 
        }
    }
)

export default i18n;