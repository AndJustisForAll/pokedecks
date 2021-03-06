export const MOCK_GARCHOMP = [
  {
    id: 'xyp-XY09',
    name: 'Garchomp-EX',
    nationalPokedexNumber: 445,
    imageUrl: 'https://images.pokemontcg.io/xyp/XY09.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/xyp/XY09_hires.png',
    types: ['Dragon'],
    supertype: 'Pokémon',
    subtype: 'EX',
    hp: '170',
    retreatCost: ['Colorless', 'Colorless'],
    convertedRetreatCost: 2,
    number: 'XY09',
    artist: 'Ryo Ueda',
    rarity: '',
    series: 'XY',
    set: 'XY Black Star Promos',
    setCode: 'xyp',
    text: [
      'When a Pokémon-EX has been Knocked Out, your opponent takes 2 Prize cards.'
    ],
    attacks: [
      {
        cost: ['Fighting', 'Colorless'],
        name: 'Dual Chop',
        text:
          'Flip 2 coins. This attack does 30 damage times the number of heads.',
        damage: '30×',
        convertedEnergyCost: 2
      },
      {
        cost: ['Water', 'Fighting', 'Colorless'],
        name: 'Power Blast',
        text: 'Discard an Energy attached to this Pokémon.',
        damage: '120',
        convertedEnergyCost: 3
      }
    ],
    weaknesses: [{ type: 'Fairy', value: '×2' }]
  },
  {
    id: 'xyp-XY168',
    name: 'M Garchomp-EX',
    nationalPokedexNumber: 445,
    imageUrl: 'https://images.pokemontcg.io/xyp/XY168.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/xyp/XY168_hires.png',
    types: ['Dragon'],
    supertype: 'Pokémon',
    subtype: 'MEGA',
    evolvesFrom: 'Garchomp-EX',
    hp: '210',
    convertedRetreatCost: 0,
    number: 'XY168',
    artist: '5ban Graphics',
    rarity: 'Common',
    series: 'XY',
    set: 'XY Black Star Promos',
    setCode: 'xyp',
    text: [
      'When a Pokémon-EX has been Knocked Out, your opponent takes 2 Prize cards.',
      'When 1 of your Pokémon becomes a Mega Evolution Pokémon, your turn ends.'
    ],
    attacks: [
      {
        cost: ['Water', 'Fighting', 'Fighting', 'Colorless'],
        name: 'Crimson Edge',
        text:
          'This Pokémon does 10 damage to itself for each damage counter on it.',
        damage: '180',
        convertedEnergyCost: 4
      }
    ],
    weaknesses: [{ type: 'Fairy', value: '×2' }]
  },
  {
    id: 'bw6-90',
    name: 'Garchomp',
    nationalPokedexNumber: 445,
    imageUrl: 'https://images.pokemontcg.io/bw6/90.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/bw6/90_hires.png',
    types: ['Dragon'],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Gabite',
    hp: '140',
    retreatCost: ['Colorless'],
    convertedRetreatCost: 1,
    number: '90',
    artist: '5ban Graphics',
    rarity: 'Rare Holo',
    series: 'Black & White',
    set: 'Dragons Exalted',
    setCode: 'bw6',
    attacks: [
      {
        cost: ['Fighting'],
        name: 'Mach Cut',
        text: 'Discard a Special Energy attached to the Defending Pokémon.',
        damage: '60',
        convertedEnergyCost: 1
      },
      {
        cost: ['Water', 'Fighting'],
        name: 'Dragonblade',
        text: 'Discard the top 2 cards of your deck.',
        damage: '100',
        convertedEnergyCost: 2
      }
    ],
    weaknesses: [{ type: 'Dragon', value: '×2' }]
  },
  {
    id: 'dp2-9',
    name: 'Garchomp',
    nationalPokedexNumber: 445,
    imageUrl: 'https://images.pokemontcg.io/dp2/9.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/dp2/9_hires.png',
    types: ['Colorless'],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Gabite',
    ability: {
      name: 'Rainbow Scale',
      text:
        "If an Active Pokémon has Weakness to any of the types of Energy attached to Garchomp, Garchomp's attacks do 40 more damage to that Pokémon (before applying Weakness and Resistance). Rainbow Scale Poké-Body can't be used if Garchomp has any Special Energy cards attached to it.",
      type: 'Poké-Body'
    },
    hp: '130',
    convertedRetreatCost: 0,
    number: '9',
    artist: 'Kazuyuki Kano',
    rarity: 'Rare Holo',
    series: 'Diamond & Pearl',
    set: 'Mysterious Treasures',
    setCode: 'dp2',
    attacks: [
      {
        cost: ['Colorless', 'Colorless', 'Colorless'],
        name: 'Dragon Fang',
        text: '',
        damage: '70',
        convertedEnergyCost: 3
      }
    ],
    weaknesses: [{ type: 'Colorless', value: '+30' }]
  },
  {
    id: 'pl3-145',
    name: 'Garchomp C',
    nationalPokedexNumber: 445,
    imageUrl: 'https://images.pokemontcg.io/pl3/145.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/pl3/145_hires.png',
    types: ['Colorless'],
    supertype: 'Pokémon',
    subtype: 'Level Up',
    ability: {
      name: 'Healing Breath',
      text:
        'Once during your turn (before your attack), when you put Garchomp C LV.X from your hand onto your Active Garchomp C, you may remove all damage counters from each of your Pokémon SP.',
      type: 'Poké-Power'
    },
    hp: '110',
    convertedRetreatCost: 0,
    number: '145',
    artist: 'Shizurow',
    rarity: 'Rare Holo Lv.X',
    series: 'Platinum',
    set: 'Supreme Victors',
    setCode: 'pl3',
    text: [
      'Put this card onto your Active Garchomp C. Garchomp C LV. X can use any attack, Poké-Power, or Poké-Body from its previous Level.'
    ],
    attacks: [
      {
        cost: ['Colorless', 'Colorless', 'Colorless'],
        name: 'Dragon Rush',
        text:
          "Discard 2 Energy attached to Garchomp C. Choose 1 of your opponent's Pokémon. This attack does 80 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) Garchomp C can't use Dragon Rush during your next turn.",
        damage: '',
        convertedEnergyCost: 3
      }
    ],
    weaknesses: [{ type: 'Colorless', value: '×2' }]
  },
  {
    id: 'bw11-96',
    name: 'Garchomp',
    nationalPokedexNumber: 445,
    imageUrl: 'https://images.pokemontcg.io/bw11/96.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/bw11/96_hires.png',
    types: ['Dragon'],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Gabite',
    hp: '140',
    retreatCost: ['Colorless'],
    convertedRetreatCost: 1,
    number: '96',
    artist: 'Masakazu Fukuda',
    rarity: 'Rare Holo',
    series: 'Black & White',
    set: 'Legendary Treasures',
    setCode: 'bw11',
    attacks: [
      {
        cost: ['Fighting'],
        name: 'Mach Cut',
        text: 'Discard a Special Energy attached to the Defending Pokémon.',
        damage: '60',
        convertedEnergyCost: 1
      },
      {
        cost: ['Water', 'Fighting'],
        name: 'Dragonblade',
        text: 'Discard the top 2 cards of your deck.',
        damage: '100',
        convertedEnergyCost: 2
      }
    ],
    weaknesses: [{ type: 'Dragon', value: '×2' }]
  },
  {
    id: 'dp5-97',
    name: 'Garchomp',
    nationalPokedexNumber: 445,
    imageUrl: 'https://images.pokemontcg.io/dp5/97.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/dp5/97_hires.png',
    types: ['Colorless'],
    supertype: 'Pokémon',
    subtype: 'Level Up',
    ability: {
      name: 'Dragon Pulse',
      text:
        "Once during your turn (before your attack), when you put Garchomp LV.X from your hand onto your Active Garchomp, you may flip 3 coins. For each heads, put 1 damage counter on each of your opponent's Benched Pokémon.",
      type: 'Poké-Power'
    },
    hp: '140',
    convertedRetreatCost: 0,
    number: '97',
    artist: 'Ryo Ueda',
    rarity: 'Rare Holo Lv.X',
    series: 'Diamond & Pearl',
    set: 'Majestic Dawn',
    setCode: 'dp5',
    text: [
      'Put this card onto your Active Garchomp. Garchomp LV. X can use any attack, Poké-Power, or Poké-Body from its previous Level.'
    ],
    attacks: [
      {
        cost: ['Free'],
        name: 'Restore',
        text:
          'Search your discard pile for a Pokémon (excluding Pokémon LV.X) and put it onto your Bench as a Basic Pokémon. Then, you may search your discard pile for up to 3 basic Energy cards and attach them to that Pokémon.',
        damage: '',
        convertedEnergyCost: 0
      }
    ],
    weaknesses: [{ type: 'Colorless', value: '×2' }]
  },
  {
    id: 'xy9-70',
    name: 'Garchomp',
    nationalPokedexNumber: 445,
    imageUrl: 'https://images.pokemontcg.io/xy9/70.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/xy9/70_hires.png',
    types: ['Fighting'],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Gabite',
    hp: '130',
    convertedRetreatCost: 0,
    number: '70',
    artist: 'TOKIYA',
    rarity: 'Rare Holo',
    series: 'XY',
    set: 'BREAKpoint',
    setCode: 'xy9',
    attacks: [
      {
        cost: ['Fighting'],
        name: 'Turbo Assault',
        text:
          'Attach an Energy card from your discard pile to 1 of your Pokémon.',
        damage: '60',
        convertedEnergyCost: 1
      },
      {
        cost: ['Fighting', 'Fighting'],
        name: 'Bite Off',
        text:
          "If your opponent's Active Pokémon is a Pokémon-EX, this attack does 80 more damage.",
        damage: '80+',
        convertedEnergyCost: 2
      }
    ],
    weaknesses: [{ type: 'Grass', value: '×2' }]
  },
  {
    id: 'bw6-91',
    name: 'Garchomp',
    nationalPokedexNumber: 445,
    imageUrl: 'https://images.pokemontcg.io/bw6/91.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/bw6/91_hires.png',
    types: ['Dragon'],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Gabite',
    hp: '140',
    convertedRetreatCost: 0,
    number: '91',
    artist: 'Naoki Saito',
    rarity: 'Rare',
    series: 'Black & White',
    set: 'Dragons Exalted',
    setCode: 'bw6',
    attacks: [
      {
        cost: ['Colorless'],
        name: 'Jet Headbutt',
        text: '',
        damage: '40',
        convertedEnergyCost: 1
      },
      {
        cost: ['Water', 'Fighting', 'Colorless'],
        name: 'Sand Tomb',
        text:
          "The Defending Pokémon can't retreat during your opponent's next turn.",
        damage: '80',
        convertedEnergyCost: 3
      }
    ],
    weaknesses: [{ type: 'Dragon', value: '×2' }]
  },
  {
    id: 'pl3-5',
    name: 'Garchomp',
    nationalPokedexNumber: 445,
    imageUrl: 'https://images.pokemontcg.io/pl3/5.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/pl3/5_hires.png',
    types: ['Colorless'],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Gabite',
    ability: {
      name: 'Dragon Intimidation',
      text:
        "If Garchomp is your Active Pokémon and is damaged by an opponent's attack (even if Garchomp is Knocked Out), choose an Energy card attached to the Attacking Pokémon and put it into your opponent's hand.",
      type: 'Poké-Body'
    },
    hp: '130',
    convertedRetreatCost: 0,
    number: '5',
    artist: 'Mitsuhiro Arita',
    rarity: 'Rare Holo',
    series: 'Platinum',
    set: 'Supreme Victors',
    setCode: 'pl3',
    attacks: [
      {
        cost: ['Colorless', 'Colorless'],
        name: 'Guard Claw',
        text:
          "During your opponent's next turn, any damage done to Garchomp by attacks is reduced by 20 (after applying Weakness and Resistance).",
        damage: '40',
        convertedEnergyCost: 2
      },
      {
        cost: ['Colorless', 'Colorless', 'Colorless'],
        name: 'Speed Impact',
        text:
          'Does 120 damage minus 20 damage for each Energy attached to the Defending Pokémon.',
        damage: '120-',
        convertedEnergyCost: 3
      }
    ],
    weaknesses: [{ type: 'Colorless', value: '+30' }]
  },
  {
    id: 'sm5-99',
    name: 'Garchomp',
    nationalPokedexNumber: 445,
    imageUrl: 'https://images.pokemontcg.io/sm5/99.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/sm5/99_hires.png',
    types: ['Dragon'],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Gabite',
    hp: '150',
    convertedRetreatCost: 0,
    number: '99',
    artist: 'Megumi Mizutani',
    rarity: '',
    series: 'Sun & Moon',
    set: 'Ultra Prism',
    setCode: 'sm5',
    attacks: [
      {
        cost: ['Colorless', 'Colorless'],
        name: 'Quick Dive',
        text:
          "This attack does 50 damage to 1 of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
        damage: '',
        convertedEnergyCost: 2
      },
      {
        cost: ['Fighting', 'Colorless', 'Colorless'],
        name: 'Royal Blades',
        text:
          'If you played Cynthia from your hand during this turn, this attack does 100 more damage.',
        damage: '100+',
        convertedEnergyCost: 3
      }
    ],
    weaknesses: [{ type: 'Fairy', value: '×2' }]
  },
  {
    id: 'xyp-XY169',
    name: 'Garchomp Spirit Link',
    imageUrl: 'https://images.pokemontcg.io/xyp/XY169.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/xyp/XY169_hires.png',
    supertype: 'Trainer',
    subtype: 'Pokémon Tool',
    number: 'XY169',
    artist: '5ban Graphics',
    rarity: 'Common',
    series: 'XY',
    set: 'XY Black Star Promos',
    setCode: 'xyp',
    text: [
      'Your turn does not end if the Pokémon this card is attached to becomes M Garchomp-EX.'
    ]
  },
  {
    id: 'xyp-XY167',
    name: 'Garchomp-EX',
    nationalPokedexNumber: 445,
    imageUrl: 'https://images.pokemontcg.io/xyp/XY167.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/xyp/XY167_hires.png',
    types: ['Dragon'],
    supertype: 'Pokémon',
    subtype: 'EX',
    hp: '180',
    retreatCost: ['Colorless', 'Colorless'],
    convertedRetreatCost: 2,
    number: 'XY167',
    artist: 'Ryo Ueda',
    rarity: 'Common',
    series: 'XY',
    set: 'XY Black Star Promos',
    setCode: 'xyp',
    text: [
      'When a Pokémon-EX has been Knocked Out, your opponent takes 2 Prize cards.'
    ],
    attacks: [
      {
        cost: ['Fighting'],
        name: 'Shred',
        text:
          "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
        damage: '30',
        convertedEnergyCost: 1
      },
      {
        cost: ['Water', 'Fighting', 'Fighting', 'Colorless'],
        name: 'Hyper Beam',
        text:
          "Flip a coin. If heads, discard an Energy attached to your opponent's Active Pokémon.",
        damage: '100',
        convertedEnergyCost: 4
      }
    ],
    weaknesses: [{ type: 'Fairy', value: '×2' }]
  },
  {
    id: 'bw9-120',
    name: 'Garchomp',
    nationalPokedexNumber: 445,
    imageUrl: 'https://images.pokemontcg.io/bw9/120.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/bw9/120_hires.png',
    types: ['Dragon'],
    supertype: 'Pokémon',
    subtype: 'Stage 2',
    evolvesFrom: 'Gabite',
    hp: '140',
    retreatCost: ['Colorless'],
    convertedRetreatCost: 1,
    number: '120',
    artist: 'Ayaka Yoshida',
    rarity: 'Rare Holo',
    series: 'Black & White',
    set: 'Plasma Freeze',
    setCode: 'bw9',
    attacks: [
      {
        cost: ['Fighting'],
        name: 'Mach Cut',
        text: 'Discard a Special Energy attached to the Defending Pokémon.',
        damage: '60',
        convertedEnergyCost: 1
      },
      {
        cost: ['Water', 'Fighting'],
        name: 'Dragonblade',
        text: 'Discard the top 2 cards of your deck.',
        damage: '100',
        convertedEnergyCost: 2
      }
    ],
    weaknesses: [{ type: 'Dragon', value: '×2' }]
  },
  {
    id: 'pl3-60',
    name: 'Garchomp C',
    nationalPokedexNumber: 445,
    imageUrl: 'https://images.pokemontcg.io/pl3/60.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/pl3/60_hires.png',
    types: ['Colorless'],
    supertype: 'Pokémon',
    subtype: 'Basic',
    hp: '80',
    retreatCost: ['Colorless'],
    convertedRetreatCost: 1,
    number: '60',
    artist: 'kawayoo',
    rarity: 'Uncommon',
    series: 'Platinum',
    set: 'Supreme Victors',
    setCode: 'pl3',
    attacks: [
      {
        cost: ['Colorless', 'Colorless'],
        name: 'Claw Swipe',
        text: '',
        damage: '30',
        convertedEnergyCost: 2
      },
      {
        cost: ['Colorless', 'Colorless', 'Colorless'],
        name: 'Earthquake',
        text:
          "Does 10 damage to each of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
        damage: '50',
        convertedEnergyCost: 3
      }
    ],
    weaknesses: [{ type: 'Colorless', value: '×2' }]
  },
  {
    id: 'pop9-1',
    name: 'Garchomp',
    nationalPokedexNumber: 445,
    imageUrl: 'https://images.pokemontcg.io/pop9/1.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/pop9/1_hires.png',
    types: ['Colorless'],
    supertype: 'Pokémon',
    subtype: 'Basic',
    evolvesFrom: 'Gabite',
    hp: '130',
    convertedRetreatCost: 0,
    number: '1',
    artist: 'Kagemaru Himeno',
    rarity: 'Rare',
    series: 'POP',
    set: 'POP Series 9',
    setCode: 'pop9',
    attacks: [
      {
        cost: ['Colorless'],
        name: 'Dragon Rage',
        text:
          'Flip 2 coins. If either of them is tails, this attack does nothing.',
        damage: '',
        convertedEnergyCost: 1
      },
      {
        cost: ['Colorless', 'Colorless', 'Colorless'],
        name: 'Jet Sword',
        text:
          "Discard 2 Energy attached to Garchomp and this attack does 10 damage to each of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
        damage: '100',
        convertedEnergyCost: 3
      }
    ],
    weaknesses: [{ type: 'Colorless', value: '×2' }]
  },
  {
    id: 'xy9-113',
    name: 'Splash Energy',
    imageUrl: 'https://images.pokemontcg.io/xy9/113.png',
    imageUrlHiRes: 'https://images.pokemontcg.io/xy9/113_hires.png',
    supertype: 'Energy',
    subtype: 'Special',
    number: '113',
    artist: '5ban Graphics',
    rarity: 'Uncommon',
    series: 'XY',
    set: 'BREAKpoint',
    setCode: 'xy9',
    text: [
      "This card can only be attached to Water Pokémon. This card provides Water Energy only while this card is attached to a Water Pokémon. If the Water Pokémon this card is attached to is Knocked Out by damage from an opponent's attack, put that Pokémon into your hand. (Discard all cards attached to it.) (If this card is attached to anything other than a Water Pokémon, discard this card.)"
    ]
  }
];
