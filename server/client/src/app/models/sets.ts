const STANDARD_LEGAL_START_INDEX = 23; // xy8 - Breakthrough
export const EXPANDED_LEGAL_SET_CODES = [
    'bwp',
    'bw1',
    'bw2',
    'bw3',
    'bw4',
    'bw5',
    'bw6',
    'dv1',
    'bw7',
    'bw8',
    'bw9',
    'bw10',
    'xyp',
    'bw11',
    'xy0',
    'xy1',
    'xy2',
    'xy3',
    'xy4',
    'xy5',
    'dc1',
    'xy6',
    'xy7',
    'xy8',
    'xy9',
    'g1',
    'xy10',
    'xy11',
    'xy12',
    'sm1',
    'smp',
    'sm2',
    'sm3',
    'sm35',
    'sm4',
    'sm5'
];

// TODO:AMUNOZ add xyp black star promos to legal standard
export const STANDARD_LEGAL_SET_CODES = [
    'xyp',
    ...EXPANDED_LEGAL_SET_CODES.slice(STANDARD_LEGAL_START_INDEX)
];
