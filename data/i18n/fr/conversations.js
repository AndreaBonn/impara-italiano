/* ============================================================
   Textes dans la langue de l'élève (fr) pour data/core/conversations.js
   Les clés renvoient aux id de la couche neutre ; les tableaux se
   joignent par index, leur longueur doit donc correspondre à core.
   Vérifié par scripts/parity.mjs.

   Remarque : les réponses modèles en italien vivent dans core et sont
   enregistrées en audio, donc une consigne qui mène à « Sono dalla
   Polonia » parle toujours de la Pologne ici. Changer le pays
   obligerait à régénérer les mp3.
   ============================================================ */
LINGUAI.addStrings("fr", {
  "conv:bar-mattina": {
    title: "Petit-déjeuner au bar",
    setting: "Lundi, 8 h 15. Tu entres dans le bar du coin. Le barman connaît ton visage.",
    closing: "Trois minutes, un café, pas une seconde de perdue. C'est ça, le petit-déjeuner italien.",
    turns: [
      { tr: "Bonjour ! Je vous sers quoi ?" },
      { task: "Dis bonjour et commande un café et un cornetto.", tr: "Bonjour, un café et un cornetto s'il vous plaît." },
      { tr: "Le cornetto nature ou fourré à la crème ?" },
      { task: "Dis que tu le préfères nature.", tr: "Nature, merci." },
      { tr: "Parfait. Ça fait deux euros trente." },
      { task: "Dis que tu paies par carte.", tr: "Je peux payer par carte ?" },
      { tr: "Bien sûr, le terminal est juste là. Bonne journée !" },
      { task: "Remercie et dis au revoir.", tr: "Merci, bonne journée !" }
    ]
  },
  "conv:presentarsi": {
    title: "Premier jour de cours",
    setting: "Une école de langues à Florence. Quelqu'un s'assoit à côté de toi avant le cours.",
    closing: "Quatre phrases et tu as ta première amitié italienne. Il n'en faut pas plus.",
    turns: [
      { tr: "Salut ! Je peux m'asseoir ici ?" },
      { task: "Accepte, gentiment.", tr: "Bien sûr, vas-y !" },
      { tr: "Merci. Moi c'est Matteo, et toi ?" },
      { task: "Présente-toi en donnant ton prénom.", tr: "Je m'appelle Anna." },
      { tr: "Enchanté ! Tu viens d'où ?" },
      { task: "Dis que tu viens de Pologne : c'est la réponse modèle enregistrée.", tr: "Je viens de Pologne." },
      { tr: "Super ! Et tu fais quoi dans la vie ?" },
      { task: "Dis quel est ton métier (professeure, par exemple).", tr: "Je suis professeure." }
    ]
  },
  "conv:mercato": {
    title: "Au marché du quartier",
    setting: "Samedi matin, un marché en plein air. Le vendeur crie ses prix d'un trottoir à l'autre.",
    closing: "Au marché, ce qui compte c'est le rythme et la précision. Etti, chili, basta così.",
    turns: [
      { tr: "Et voilà madame, je vous mets quoi ! De belles tomates aujourd'hui." },
      { task: "Demande un kilo de tomates.", tr: "Un kilo de tomates, s'il vous plaît." },
      { tr: "Voilà. Avec ceci ? Les pommes ne sont pas chères aujourd'hui." },
      { task: "Demande le prix des pommes.", tr: "Elles font combien, les pommes ?" },
      { tr: "Deux euros le kilo. Un vrai sucre." },
      { task: "Dis que ce sera tout et demande le total.", tr: "Ce sera tout, ça fait combien ?" },
      { tr: "Quatre euros cinquante. Merci !" }
    ]
  },
  "conv:ristorante": {
    title: "Dîner au restaurant",
    setting: "Le soir, un restaurant, sans réservation. Le serveur arrive avec les cartes.",
    closing: "Commander en italien suit un ordre fixe : primo, secondo, contorno, dolce, caffè.",
    turns: [
      { tr: "Bonsoir ! Vous avez réservé ?" },
      {
        task: "Dis que non et demande une table pour deux.",
        tr: "Non, vous auriez une table pour deux ?"
      },
      { tr: "Bien sûr, installez-vous. Voici les cartes. Quelque chose à boire ?" },
      {
        task: "Demande une bouteille d'eau gazeuse et un verre de vin rouge.",
        tr: "Une bouteille d'eau gazeuse et un verre de vin rouge."
      },
      { tr: "Très bien. Et en entrée ?" },
      {
        task: "Commande les cacio e pepe et demande si c'est pimenté.",
        tr: "Je prends les cacio e pepe. C'est pimenté ?"
      },
      { tr: "Un peu seulement, on sent le poivre. Vous prendrez un plat ?" },
      {
        task: "Refuse poliment et demande l'addition pour plus tard.",
        tr: "Non merci, juste l'addition tout à l'heure s'il vous plaît."
      }
    ]
  },
  "conv:treno": {
    title: "Au guichet",
    setting: "Roma Termini, la file au guichet, le tableau des départs qui clignote au-dessus.",
    closing: "Regionale ou Frecciarossa : la différence, c'est une heure de trajet et trente euros.",
    turns: [
      { tr: "Suivant, s'il vous plaît." },
      {
        task: "Demande un billet pour Florence cet après-midi.",
        tr: "Un billet pour Florence cet après-midi."
      },
      { tr: "Regionale ou Frecciarossa ? Le Freccia met une heure et demie." },
      { task: "Demande le prix du Frecciarossa.", tr: "Il coûte combien, le Frecciarossa ?" },
      { tr: "Quarante-deux euros en seconde classe." },
      { task: "Accepte et demande de quel quai il part.", tr: "D'accord, il part de quel quai ?" },
      { tr: "Quai 9, dans vingt minutes. Pensez à composter si vous prenez le regionale." }
    ]
  },
  "conv:medico": {
    title: "Chez le médecin",
    setting: "Un cabinet, consultation sans rendez-vous. Le médecin demande ce qui ne va pas.",
    closing: "Trois phrases te sauvent chez le médecin : mi fa male, da quanto tempo, ho la febbre.",
    turns: [
      { tr: "Bonjour, asseyez-vous. Qu'est-ce qui ne va pas ?" },
      { task: "Dis que tu as mal à la gorge et de la fièvre.", tr: "J'ai mal à la gorge et j'ai de la fièvre." },
      { tr: "Depuis combien de temps ?" },
      { task: "Dis que ça dure depuis trois jours.", tr: "Depuis trois jours." },
      { tr: "Vous êtes allergique à un médicament ?" },
      { task: "Dis que tu n'as pas d'allergies.", tr: "Non, je n'ai pas d'allergies." },
      { tr: "Je vous prescris un antibiotique. Du repos et beaucoup d'eau." },
      { task: "Demande combien de fois par jour il faut le prendre.", tr: "Je dois le prendre combien de fois par jour ?" }
    ]
  },
  "conv:affitto": {
    title: "Visite d'un appartement",
    setting: "Un agent te fait visiter un deux-pièces à Bologne. Tu as dix minutes et cent questions.",
    closing: "Trois choses à toujours demander : spese condominiali, cauzione, tipo di contratto.",
    turns: [
      { tr: "Voilà le deux-pièces. Comme vous voyez, lumineux et refait à neuf." },
      { task: "Demande le montant du loyer mensuel.", tr: "Le loyer mensuel est de combien ?" },
      { tr: "Sept cents par mois, charges non comprises." },
      { task: "Demande à combien s'élèvent les charges.", tr: "Les charges s'élèvent à combien ?" },
      { tr: "Quatre-vingt-dix euros environ, chauffage compris." },
      { task: "Demande le type de bail et le montant de la caution.", tr: "C'est quel type de bail ? Et la caution est de combien ?" },
      { tr: "Un bail 4+4, caution de trois mois de loyer." },
      { task: "Dis que tu vas y réfléchir et que tu réponds demain.", tr: "J'y réfléchis et je vous réponds demain." }
    ]
  },
  "conv:colloquio": {
    title: "Un entretien d'embauche",
    setting: "Une agence de marketing à Milan. Les RH ouvrent avec la question classique.",
    closing: "Dans un entretien italien, on parle concret et on ne se dévalorise pas.",
    turns: [
      { tr: "Bien, parlez-moi un peu de vous." },
      {
        task: "Donne ton prénom, ton nombre d'années d'expérience et dans quoi.",
        tr: "Je m'appelle Anna, j'ai cinq ans d'expérience en marketing digital."
      },
      { tr: "Pourquoi avoir décidé de postuler chez nous ?" },
      {
        task: "Dis que leur approche des projets internationaux t'intéresse.",
        tr: "Parce que votre approche des projets internationaux m'intéresse."
      },
      { tr: "Quel serait votre point faible ?" },
      {
        task: "Reconnais un point faible et dis comment tu travailles dessus.",
        tr: "J'ai tendance à vouloir tout contrôler, mais j'apprends à déléguer."
      },
      { tr: "Bien. Vous avez des questions pour nous ?" },
      {
        task: "Pose une question sur l'équipe et sur la suite du processus.",
        tr: "Oui : à quoi ressemble l'équipe, et quelles sont les prochaines étapes ?"
      }
    ]
  },
  "conv:burocrazia": {
    title: "Au centre des impôts",
    setting: "Dans la file pour un codice fiscale. Tu as le numéro 87, l'écran affiche 61.",
    closing: "Le codice fiscale ouvre tout en Italie : compte en banque, contrats, médecin, carte SIM.",
    turns: [
      { tr: "Numéro quatre-vingt-sept, guichet trois. Bonjour, qu'est-ce qu'il vous faut ?" },
      { task: "Dis que tu dois demander un codice fiscale.", tr: "Je dois demander un codice fiscale." },
      { tr: "Vous avez une pièce d'identité en cours de validité et le formulaire rempli ?" },
      {
        task: "Dis que tu as ton passeport mais pas le formulaire.",
        tr: "J'ai mon passeport, mais je n'ai pas le formulaire."
      },
      { tr: "Pas de souci, je vous en donne un. En majuscules, s'il vous plaît." },
      { task: "Demande combien de temps ça prend.", tr: "Ça prend combien de temps ?" },
      { tr: "Je vous le délivre tout de suite, c'est immédiat." }
    ]
  },
  "conv:dibattito": {
    title: "Une discussion à table",
    setting: "Dîner chez des amis. On en vient au télétravail, et personne ne compte lâcher.",
    closing: "Les Italiens se coupent la parole en discutant : ce n'est pas de l'impolitesse, c'est de l'intérêt.",
    turns: [
      { tr: "Pour moi le télétravail a détruit l'esprit d'équipe. Tu en penses quoi ?" },
      {
        task: "Donne-lui raison en partie, puis avance un contre-argument.",
        tr: "Je suis d'accord en partie, mais ça a aussi réduit le stress de ceux qui font la route."
      },
      { tr: "D'accord, mais tu ne trouves pas que les jeunes apprennent moins hors du bureau ?" },
      {
        task: "Réponds que ça dépend de la façon dont l'entreprise organise l'accompagnement.",
        tr: "Ça dépend de la façon dont l'entreprise organise l'accompagnement."
      },
      { tr: "Là je te donne raison. Mais l'hybride c'est le pire des deux mondes, à mon avis." },
      {
        task: "Marque ton désaccord fermement et appuie-le sur un argument.",
        tr: "Je ne suis pas du tout d'accord : l'hybride permet de choisir selon le type de travail."
      }
    ]
  }
});
