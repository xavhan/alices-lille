import * as djs from './djs';
import type { Event } from './types';

export const EVENTS: Event[] = [
  {
    n: 5,
    slug: 'garage-83',
    label: 'MiniClub#5',
    guests: [djs.Garage83C],
    date: '2022-05-07',
    facebookEvent: 'https://www.facebook.com/events/4986118648145000/',
    imageSrc: '/images/miniclub/miniclub005.jpg',
    description: [
      `𝑴𝑰𝑵𝑰𝑪𝑳𝑼𝑩 : 𝑮𝒔𝒕𝒐𝒏 𝒙 𝒆𝒔𝒔𝒐 𝒍𝒂𝒄𝒉𝒊𝒏𝒆 𝒙 𝑭𝒓𝒂𝒏𝒄𝒊𝒔 𝑪𝒉𝒆𝒗𝒂𝒍 𝒄𝒉𝒆𝒛 𝑨𝒍𝒊𝒄𝒆𝒔.`,
      ``,
      `Garage 83-C all starz ou presque!`,
      ``,
      `Gston : Le petit prince d’Esquermoise a finalement choisi la vie de gangster à temps très partiel plutôt que de devenir documentariste animalier. « J’aurais préféré un buffle immense et féroce ....... » déclarait-il pourtant récemment sur les plateaux de télévision.`,
      `ORIGINAL GANGSTERISME / DRILL DU MONDE / POSTCLUB AUX PETITES FREQUENCES`,
      ``,
      `esso lachine : Comme son nom ne l’indique pas « c un français grave à propos du futuristic club ». Dans l’ère du temps et dans le r du tempo, Esso est profondément humaniste. Mashups de Lorie, Renan Luce et Angerfist, vapote goût grenadine et hella au menu.`,
      `LUDOTEK / CLUB SPOR’TIF / MASHUP INTER-5G / MUSIQUE DE VOITURE`,
      ``,
      `Francis Cheval : Joueur de djembé repenti, Francis préfère le post-club à la banque postale, ça fait moins mal aux doigts. Vroum tchik paf, bruit de casserole tombée dans un précipice ou transition aux 4 épices.`,
      `BOUM KLANG / NERVOUS TAMBOURISM / TRIBAL DIGITAL`,
    ].join('\n'),
  },
  {
    n: 4,
    slug: 'mimi',
    label: 'MiniClub#4',
    guests: [djs.Mimi],
    date: '2022-04-02',
    facebookEvent: 'https://www.facebook.com/events/1304419426715968/',
    description: [
      `Au premier étage du ALICES sous la boule à facettes, viens bouger et transpirer comme si demain n'existait pas avec cette fois ci aux platines Ango la moitié des Supagroovalistic !`,
      `Au programme des bières, du vin, des cocktails, des shooters et du son du son du son ! ☄️🍷🍻🍸☄️`,
    ].join('\n'),
    imageSrc: '/images/miniclub/miniclub004.jpg',
    html: `<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1092116194&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/goptun" title="Gop Tun" target="_blank" style="color: #cccccc; text-decoration: none;">Gop Tun</a> · <a href="https://soundcloud.com/goptun/gop-cast-072-mimi" title="Gop Cast 072 - Mimi" target="_blank" style="color: #cccccc; text-decoration: none;">Gop Cast 072 - Mimi</a></div>`,
  },
  {
    n: 3,
    slug: 'ango-supagroovalistic',
    label: 'MiniClub#3',
    guests: [djs.Ango],
    date: '2022-03-19',
    facebookEvent: 'https://www.facebook.com/events/940901379928100/',
    description: [
      `Au premier étage du ALICES sous la boule à facettes, viens bouger et transpirer comme si demain n'existait pas avec cette fois ci aux platines Ango la moitié des Supagroovalistic !`,
      `Au programme des bières, du vin, des cocktails, des shooters et du son du son du son ! ☄️🍷🍻🍸☄️`,
    ].join('\n'),
    imageSrc: '/images/miniclub/miniclub003.jpg',
  },
  {
    n: 2,
    slug: 'jimirie-donov',
    label: 'MiniClub#2',
    guests: [djs.JimIrie, djs.Donov],
    date: '2022-03-05',
    facebookEvent: 'https://www.facebook.com/events/278939877539123/',
    description: [
      `WELCOME TO la #2 édition du MINICLUB X JIMI IRE`,
      '              🔥🔥🔥🔥🔥🔥🔥',
      ``,
      `Au premier étage du ALICES sous la boule à facettes, viens bouger et transpirer comme si demain n'existait pas avec cette fois ci aux platines JIM IRE et la participation du légendaire DONOV 💃🏻🕺🏻`,
      ``,
      `Au programme des bières, du vin, des cocktails, des shooters et du son du son du son ! ☄️🍷🍻🍸☄️`,
    ].join('\n'),
    imageSrc: '/images/miniclub/miniclub002.jpg',
  },
  {
    n: 1,
    slug: 'innersense-donov',
    label: 'MiniClub#1',
    guests: [djs.InnerSense, djs.Donov],
    date: '2022-02-19',
    facebookEvent: 'https://www.facebook.com/events/619313212531323/',
    description: [
      `ALICES présente MINICLUB, son premier étage dédié à fête.`,
      '',
      `ENFIN !!! On l'attendait tous·tes ! `,
      '',
      `Pour ce premier événement de 2022 on se retrouve au premier étage du ALICES. Sous la boule à facettes, c'est le MINICLUB où tu pourras danser toute la soirée.`,
      `Au programme : des bières, du vin, des cocktails de fou et toujours des shots !`,
    ].join('\n'),
    imageSrc: '/images/miniclub/miniclub001.jpg',
    html: '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1221838078&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>',
  },
  {
    n: 0,
    slug: 'cremaillere',
    label: 'Crémaillère',
    guests: [djs.Donov],
    date: '2021-11-13',
    imageSrc: '/images/miniclub/miniclub000.jpg',
  },
];
