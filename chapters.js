/* chapters.js: the words shown in the scroll chapters of each monument page.
   arch  = the architecture
   story = the story or legend behind it (leave out if there is none: that chapter is skipped)
   use   = what people did in this space in the Vijayanagara period
   Where the record is uncertain, the text says so ("thought to", "traditionally"). */
const CHAPTERS = {
  'lotus-mahal': {
    arch: 'A two-storeyed pavilion in the Zenana Enclosure. Open arches shaped like lotus buds frame the ground floor, and stepped, pyramid-like towers rise above. Hindu and Islamic forms meet in one building, typical of the later Vijayanagara court.',
    story: 'Its original name is not known; “Lotus Mahal” is a later one. Even its purpose is debated: a pavilion for the royal women, or a council chamber.',
    use: 'It sat inside the Zenana, the walled quarter of the royal women, guarded by watch towers. Open on every side, it is thought to have been a cool place for the queens and their companions to gather in summer.'
  },
  'elephant-stables': {
    arch: 'Eleven domed chambers stand in a symmetrical row, each roofed with a different dome: ribbed, fluted or vaulted. Tall arched doorways were built wide enough for a state elephant. A central hall has an upper gallery.',
    use: 'The stables housed the elephants used in royal processions and festivals. The open ground in front was where they were paraded. The upper gallery is thought to have held musicians.'
  },
  'queens-bath': {
    arch: 'A plain, walled block outside, almost unadorned. Inside, arched balconies and domes surround a sunken pool about fifteen metres square, with plaster and stucco decoration still visible in places.',
    story: 'The name “Queen’s Bath” is a later one, and it may have served the king as much as the queens.',
    use: 'Water flowed in through channels, and a moat is thought to have circled the building. The royal household used it for bathing and leisure.'
  },
  'mahanavami-dibba': {
    arch: 'A granite platform in three tiers, its faces carved with friezes of elephants, horses, dancers, musicians and hunting scenes. Steps climb the front and sides.',
    story: 'Tradition links it to Krishnadevaraya’s victory over the kingdom of Udayagiri in the early 16th century.',
    use: 'During the Mahanavami (Dasara) festival, the king and court sat on top to watch processions, dances, wrestling and military displays. A timber pavilion is believed to have stood on the platform.'
  },
  'hazara-rama-temple': {
    arch: 'A compact temple with slender black-stone pillars, polished to a glassy finish, in its main hall. Its outer walls are wrapped in bands of carving in shallow relief.',
    story: 'The bands tell the Ramayana, scene by scene, and are meant to be read clockwise as you walk round the walls.',
    use: 'It was the private temple of the royal household, close to the palace, used for daily worship and for the family’s ceremonies.'
  },
  'royal-enclosure-kings-palace-area': {
    arch: 'A large walled precinct of stone platforms, water tanks and the plinth of the King’s Audience Hall. The buildings above the stone were timber, and have vanished. The platforms and pillar bases show how the court was laid out.',
    use: 'This was the seat of government. The king held court here, met ministers and received visitors and ambassadors, and the grand ceremonies of the empire took place on its platforms.'
  },
  'stepped-tank': {
    arch: 'A square tank of black schist whose steps descend in neat, symmetrical tiers to the water. An aqueduct once fed it.',
    story: 'It lay buried until it was excavated in the 1980s, which makes it one of Hampi’s later discoveries.',
    use: 'Set inside the Royal Centre, it is thought to have been used for ritual bathing and ceremonial occasions, and as part of the water system that served the palace area.'
  },
  'virupaksha-temple': {
    arch: 'The east gopura rises about fifty metres at the head of Hampi Bazaar, with a stone base and a tapering tower above. Pillared halls and courtyards lead to the shrines of Virupaksha (Shiva) and his consort Pampa Devi.',
    story: 'In a dark chamber, the gopura’s image falls upside down on the wall, a pinhole camera built in stone. Worship here has gone on for well over a thousand years, through the fall of the city in 1565.',
    use: 'Under the Vijayanagara kings it was the city’s main temple, with daily rituals, festivals and a chariot procession along the bazaar.'
  },
  'vittala-temple-complex': {
    arch: 'The Maha Mantapa stands on a high base, its pillars carved in clusters. In the courtyard is the Stone Chariot, a shrine to Garuda built of granite blocks with wheels that look as if they could turn.',
    story: 'The pillars are said to have rung with musical notes when tapped. The temple was probably never fully consecrated, and the Stone Chariot now appears on the Indian ₹50 note.',
    use: 'Built for the worship of Vishnu as Vitthala, its large halls were suited to festivals, music and dance. A colonnaded street ran in front, where pilgrims and traders gathered.'
  },
  'achyutaraya-temple': {
    arch: 'A large, walled temple in two enclosures, with gateways, pillared halls and richly carved columns. It is dedicated to Tiruvengalanatha, a form of Vishnu.',
    story: 'It was built in 1534 in the reign of Achyuta Deva Raya, late in the empire’s history.',
    use: 'Pilgrims approached it along Sule Bazaar, a long colonnaded street of stone shops. The temple was the centre of worship, and the bazaar in front served those who came.'
  },
  'krishna-temple': {
    arch: 'A temple with an eastern gateway, pillared halls and a sanctum. Its tank and the long colonnaded street in front belong to the same plan.',
    story: 'Krishnadevaraya raised it in 1513 to mark a military victory.',
    use: 'Devotees worshipped here, and the street in front, Krishna Bazaar, was lined with pillared shops. Together they show how a temple, a tank and a market formed one working neighbourhood.'
  },
  'hemakuta-hill-temple-complex': {
    arch: 'Small shrines, some with triple-towered sanctums, stand on a rocky hill. Their roofs are stacked granite slabs stepped into a pyramid. Many were built before the empire, in the 9th to 11th centuries, by Shaiva and Jain patrons.',
    story: 'A local legend says golden rain fell here, which gives the hill its name, Hemakuta.',
    use: 'The shrines were used for worship, and the open terraces and gateways give a wide view over the bazaar and river, so the hill is also thought to have served as a lookout. Today people come here to watch sunset.'
  },
  'lakshmi-narasimha': {
    arch: 'Carved from a single boulder, Narasimha sits about 6.7 metres tall under a hood of seven serpent heads, with a band tying his knees.',
    story: 'It was carved in 1528. A smaller figure of Lakshmi once sat on his lap, but was lost when the statue was damaged after the city fell in 1565, which is why it is also called Ugra Narasimha, the fierce one.',
    use: 'It stood in a temple enclosure and was a place of worship, where people came to pray to the fierce form of Vishnu.'
  },
  'sasivekalu-ganesha': {
    arch: 'A seated Ganesha about 2.4 metres tall, cut from one block, with a serpent band round his belly. He sits inside an open pillared mantapa on the slope of Hemakuta Hill.',
    story: 'The name, sasivekalu, means mustard seed in Kannada and refers to the belly, which is said to resemble one.',
    use: 'Ganesha is the god prayed to before beginning a journey or a task, so a shrine like this is thought to have been a stop for travellers and pilgrims on the way up the hill.'
  },
  'badavilinga-temple': {
    arch: 'A single stone linga about three metres tall stands in a small shrine, on a broad base. A channel brings water from a canal, so the base is always flooded.',
    story: 'Local tradition says a peasant woman commissioned it, which is why it is called Badavilinga: badava means poor.',
    use: 'It was a shrine for the worship of Shiva, and the story attached to it suggests it belonged to ordinary townspeople, not the court. The water keeps the linga wet, as the ritual of bathing it requires.'
  },
  'hampi-bazaar': {
    arch: 'A street more than half a kilometre long and wide enough for processions, lined on both sides with colonnaded stone shops. At its head is the Virupaksha Temple’s gopura, and Matanga Hill rises beyond the other end.',
    use: 'It was the main market street of the temple town. Visitors from abroad described Vijayanagara’s bazaars selling jewels, cloth and spices. The street was also the route of the temple’s chariot festival.'
  },
  'monolithic-bull': {
    arch: 'A large Nandi, Shiva’s bull, seated and carved from a single piece of rock. It is decorated with a carved necklace of bells and sits under a pillared roof beside the road to Matanga Hill.',
    use: 'A Nandi traditionally faces the shrine of Shiva, so it marked a place of worship. Pilgrims passing along the road to Matanga Hill would have paused here to pay respects.'
  }
};
