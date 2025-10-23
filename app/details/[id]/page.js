"use client";
import Image from "next/image"
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { PhoneIcon } from '@heroicons/react/24/solid';
import { imageConfigDefault } from "next/dist/shared/lib/image-config";
import vector from "@/public/assets/images/vector2.webp";
import vector1 from "@/public/assets/images/vector3.png";

const p1 = '/assets/images/IMAGE1.webp';
const p2 = '/assets/images/IMAGE2.webp';
const p3 = '/assets/images/IMAGE3.webp';
const defaultImg = '/assets/images/No_Image_Available.webp';

const products = [
  {
    id: 1,
    name: "Scotch Brite Surface Conditioning Low Stretch Roll",
    image: p1,
    price: '100',
    thumbnails: [p1,p2,p3],
    shortDetails: {'Tape Length' : '20m', 'Tape Width' : '1 Inch', 'Backing Material' : 'Polyester', 'Tape Type' : 'Non-Adhesive'},
    shortContent: 'Genwin Polyester Double-Sided Tape: Strong, Reliable Bonding for Various Applications Indulge in a versatile and powerful adhesive solution with Genwin Polyester Double-Sided Tape. Unwavering strength',
    properties: {'High bond strength':'Provides a secure hold for a wide range of materials, including paper, plastic, wood', 'Good Quality':'Provides a secure hold for a wide range of materials, including paper, plastic, wood'},
    details: {
      "3M Stock": "7100227325",        
      "Previous 3M Stock": "60000320014",
      UPC: "00051115198373",
      "Alternative ID": "6022J",
    },
    sellerName:'Denny',
    sellerMobile:'9876543210',
    sellerAdd:'D-124, NY, USA',
    sellerURL:'genwin.com',
  },
  {
    id: 2,
    name: "Scotch Brite Surface Conditioning Low Stretch Roll",
    image: p2,
    price: '150',
    thumbnails: [p1,p2,p3],
    shortDetails: {'Tape Length' : '20m', 'Tape Width' : '1 Inch', 'Backing Material' : 'Polyester', 'Tape Type' : 'Non-Adhesive'},
    shortContent: 'Genwin Polyester Double-Sided Tape: Strong, Reliable Bonding for Various Applications Indulge in a versatile and powerful adhesive solution with Genwin Polyester Double-Sided Tape. Unwavering strength',
    properties: {'High bond strength':'Provides a secure hold for a wide range of materials, including paper, plastic, wood'},
    details: {
      "3M Stock": "7100227325",        
      "Previous 3M Stock": "60000320014",
      UPC: "00051115198373",
      "Alternative ID": "6022J",
    },
    sellerName:'Denny',
    sellerMobile:'9876543210',
    sellerAdd:'D-124, NY, USA',
    sellerURL:'genwin.com',
  },
  {
    id: 3,
    name: "Scotch Brite Surface Conditioning Low Stretch Roll",
    image: p3,
    price: '200',
    thumbnails: [p1,p2,p3],
    shortDetails: {'Tape Length' : '20m', 'Tape Width' : '1 Inch', 'Backing Material' : 'Polyester', 'Tape Type' : 'Non-Adhesive'},
    shortContent: 'Genwin Polyester Double-Sided Tape: Strong, Reliable Bonding for Various Applications Indulge in a versatile and powerful adhesive solution with Genwin Polyester Double-Sided Tape. Unwavering strength',
    properties: {'High bond strength':'Provides a secure hold for a wide range of materials, including paper, plastic, wood'},
    details: {
      "3M Stock": "7100227325",        
      "Previous 3M Stock": "60000320014",
      UPC: "00051115198373",
      "Alternative ID": "6022J",
    },
    sellerName:'Denny',
    sellerMobile:'9876543210',
    sellerAdd:'D-124, NY, USA',
    sellerURL:'genwin.com',
  },
  {
    id: 4,
    name: "Scotch Brite Surface Conditioning Low Stretch Roll",
    image: p2,
    price: '250',
    thumbnails: [p1,p2,p3],
    shortDetails: {'Tape Length' : '20m', 'Tape Width' : '1 Inch', 'Backing Material' : 'Polyester', 'Tape Type' : 'Non-Adhesive'},
    shortContent: 'Genwin Polyester Double-Sided Tape: Strong, Reliable Bonding for Various Applications Indulge in a versatile and powerful adhesive solution with Genwin Polyester Double-Sided Tape. Unwavering strength',
    properties: {'High bond strength':'Provides a secure hold for a wide range of materials, including paper, plastic, wood'},
    details: {
      "3M Stock": "7100227325",        
      "Previous 3M Stock": "60000320014",
      UPC: "00051115198373",
      "Alternative ID": "6022J",
    },
    sellerName:'Denny',
    sellerMobile:'9876543210',
    sellerAdd:'D-124, NY, USA',
    sellerURL:'genwin.com',
  },
  {
    id: 5,
    name: "Scotch Brite Surface Conditioning Low Stretch Roll",
    image: p3,
    price: '175',
    thumbnails: [p1,p2,p3],
    shortDetails: {'Tape Length' : '20m', 'Tape Width' : '1 Inch', 'Backing Material' : 'Polyester', 'Tape Type' : 'Non-Adhesive'},
    shortContent: 'Genwin Polyester Double-Sided Tape: Strong, Reliable Bonding for Various Applications Indulge in a versatile and powerful adhesive solution with Genwin Polyester Double-Sided Tape. Unwavering strength',
    properties: {'High bond strength':'Provides a secure hold for a wide range of materials, including paper, plastic, wood'},
    details: {
      "3M Stock": "7100227325",        
      "Previous 3M Stock": "60000320014",
      UPC: "00051115198373",
      "Alternative ID": "6022J",
    },
    sellerName:'Denny',
    sellerMobile:'9876543210',
    sellerAdd:'D-124, NY, USA',
    sellerURL:'genwin.com',
  },
  {
    id: 6,
    name: "Scotch Brite Surface Conditioning Low Stretch Roll",
    image: p1,
    price: '100',
    thumbnails: [p1,p2,p3],
    shortDetails: {'Tape Length' : '20m', 'Tape Width' : '1 Inch', 'Backing Material' : 'Polyester', 'Tape Type' : 'Non-Adhesive'},
    shortContent: 'Genwin Polyester Double-Sided Tape: Strong, Reliable Bonding for Various Applications Indulge in a versatile and powerful adhesive solution with Genwin Polyester Double-Sided Tape. Unwavering strength',
    properties: {'High bond strength':'Provides a secure hold for a wide range of materials, including paper, plastic, wood'},
    details: {
      "3M Stock": "7100227325",        
      "Previous 3M Stock": "60000320014",
      UPC: "00051115198373",
      "Alternative ID": "6022J",
    },
    sellerName:'Denny',
    sellerMobile:'9876543210',
    sellerAdd:'D-124, NY, USA',
    sellerURL:'genwin.com',
  },
  {
    id: 7,
    name: "Scotch Brite Surface Conditioning Low Stretch Roll",
    image: p3,
    price: '300',
    thumbnails: [p1,p2,p3],
    shortDetails: {'Tape Length' : '20m', 'Tape Width' : '1 Inch', 'Backing Material' : 'Polyester', 'Tape Type' : 'Non-Adhesive'},
    shortContent: 'Genwin Polyester Double-Sided Tape: Strong, Reliable Bonding for Various Applications Indulge in a versatile and powerful adhesive solution with Genwin Polyester Double-Sided Tape. Unwavering strength',
    properties: {'High bond strength':'Provides a secure hold for a wide range of materials, including paper, plastic, wood'},
    details: {
      "3M Stock": "7100227325",        
      "Previous 3M Stock": "60000320014",
      UPC: "00051115198373",
      "Alternative ID": "6022J",
    },
    sellerName:'Denny',
    sellerMobile:'9876543210',
    sellerAdd:'D-124, NY, USA',
    sellerURL:'genwin.com',
  },
  {
    id: 8,
    name: "Scotch Brite Surface Conditioning Low Stretch Roll",
    image: p1,
    price: '275',
    thumbnails: [p1,p2,p3],
    shortDetails: {'Tape Length' : '20m', 'Tape Width' : '1 Inch', 'Backing Material' : 'Polyester', 'Tape Type' : 'Non-Adhesive'},
    shortContent: 'Genwin Polyester Double-Sided Tape: Strong, Reliable Bonding for Various Applications Indulge in a versatile and powerful adhesive solution with Genwin Polyester Double-Sided Tape. Unwavering strength',
    properties: {'High bond strength':'Provides a secure hold for a wide range of materials, including paper, plastic, wood'},
    details: {
      "3M Stock": "7100227325",        
      "Previous 3M Stock": "60000320014",
      UPC: "00051115198373",
      "Alternative ID": "6022J",
    },
    sellerName:'Denny',
    sellerMobile:'9876543210',
    sellerAdd:'D-124, NY, USA',
    sellerURL:'genwin.com',
  },
  {
    id: 9,
    name: "Scotch Brite Surface Conditioning Low Stretch Roll",
    image: p2,
    price: '225',
    thumbnails: [p1,p2,p3],
    shortDetails: {'Tape Length' : '20m', 'Tape Width' : '1 Inch', 'Backing Material' : 'Polyester', 'Tape Type' : 'Non-Adhesive'},
    shortContent: 'Genwin Polyester Double-Sided Tape: Strong, Reliable Bonding for Various Applications Indulge in a versatile and powerful adhesive solution with Genwin Polyester Double-Sided Tape. Unwavering strength',
    properties: {'High bond strength':'Provides a secure hold for a wide range of materials, including paper, plastic, wood'},
    details: {
      "3M Stock": "7100227325",        
      "Previous 3M Stock": "60000320014",
      UPC: "00051115198373",
      "Alternative ID": "6022J",
    },
    sellerName:'Denny',
    sellerMobile:'9876543210',
    sellerAdd:'D-124, NY, USA',
    sellerURL:'genwin.com',
  },
  {
    id: 10,
    name: "Scotch Brite Surface Conditioning Low Stretch Roll",
    image: p2,
    price: '333',
    thumbnails: [p1,p2,p3],
    shortDetails: {'Tape Length' : '20m', 'Tape Width' : '1 Inch', 'Backing Material' : 'Polyester', 'Tape Type' : 'Non-Adhesive'},
    shortContent: 'Genwin Polyester Double-Sided Tape: Strong, Reliable Bonding for Various Applications Indulge in a versatile and powerful adhesive solution with Genwin Polyester Double-Sided Tape. Unwavering strength',
    properties: {'High bond strength':'Provides a secure hold for a wide range of materials, including paper, plastic, wood'},
    details: {
      "3M Stock": "7100227325",        
      "Previous 3M Stock": "60000320014",
      UPC: "00051115198373",
      "Alternative ID": "6022J",
    },
    sellerName:'Denny',
    sellerMobile:'9876543210',
    sellerAdd:'D-124, NY, USA',
    sellerURL:'genwin.com',
  },
  {
    id: 11,
    name: "Scotch Brite Surface Conditioning Low Stretch Roll",
    image: p3,
    price: '500',
    thumbnails: [p1,p2,p3],
    shortDetails: {'Tape Length' : '20m', 'Tape Width' : '1 Inch', 'Backing Material' : 'Polyester', 'Tape Type' : 'Non-Adhesive'},
    shortContent: 'Genwin Polyester Double-Sided Tape: Strong, Reliable Bonding for Various Applications Indulge in a versatile and powerful adhesive solution with Genwin Polyester Double-Sided Tape. Unwavering strength',
    properties: {'High bond strength':'Provides a secure hold for a wide range of materials, including paper, plastic, wood'},
    details: {
      "3M Stock": "7100227325",        
      "Previous 3M Stock": "60000320014",
      UPC: "00051115198373",
      "Alternative ID": "6022J",
    },
    sellerName:'Denny',
    sellerMobile:'9876543210',
    sellerAdd:'D-124, NY, USA',
    sellerURL:'genwin.com',
  },
  {
    id: 12,
    name: "Scotch Brite Surface Conditioning Low Stretch Roll",
    image: p1,
    price: '325',
    thumbnails: [p1,p2,p3],
    shortDetails: {'Tape Length' : '20m', 'Tape Width' : '1 Inch', 'Backing Material' : 'Polyester', 'Tape Type' : 'Non-Adhesive'},
    shortContent: 'Genwin Polyester Double-Sided Tape: Strong, Reliable Bonding for Various Applications Indulge in a versatile and powerful adhesive solution with Genwin Polyester Double-Sided Tape. Unwavering strength',
    properties: {'High bond strength':'Provides a secure hold for a wide range of materials, including paper, plastic, wood'},
    details: {
      "3M Stock": "7100227325",        
      "Previous 3M Stock": "60000320014",
      UPC: "00051115198373",
      "Alternative ID": "6022J",
    },
    sellerName:'Denny',
    sellerMobile:'9876543210',
    sellerAdd:'D-124, NY, USA',
    sellerURL:'genwin.com',
  },
  {
    id: 13,
    name: "Scotch Brite Surface Conditioning Low Stretch Roll",
    image: p3,
    price: '500',
    thumbnails: [p1,p2,p3],
    shortDetails: {'Tape Length' : '20m', 'Tape Width' : '1 Inch', 'Backing Material' : 'Polyester', 'Tape Type' : 'Non-Adhesive'},
    shortContent: 'Genwin Polyester Double-Sided Tape: Strong, Reliable Bonding for Various Applications Indulge in a versatile and powerful adhesive solution with Genwin Polyester Double-Sided Tape. Unwavering strength',
    properties: {'High bond strength':'Provides a secure hold for a wide range of materials, including paper, plastic, wood'},
    details: {
      "3M Stock": "7100227325",        
      "Previous 3M Stock": "60000320014",
      UPC: "00051115198373",
      "Alternative ID": "6022J",
    },
    sellerName:'Denny',
    sellerMobile:'9876543210',
    sellerAdd:'D-124, NY, USA',
    sellerURL:'genwin.com',
  },
  {
    id: 14,
    name: "Scotch Brite Surface Conditioning Low Stretch Roll",
    image: p2,
    price: '333',
    thumbnails: [p1,p2,p3],
    shortDetails: {'Tape Length' : '20m', 'Tape Width' : '1 Inch', 'Backing Material' : 'Polyester', 'Tape Type' : 'Non-Adhesive'},
    shortContent: 'Genwin Polyester Double-Sided Tape: Strong, Reliable Bonding for Various Applications Indulge in a versatile and powerful adhesive solution with Genwin Polyester Double-Sided Tape. Unwavering strength',
    properties: {'High bond strength':'Provides a secure hold for a wide range of materials, including paper, plastic, wood'},
    details: {
      "3M Stock": "7100227325",        
      "Previous 3M Stock": "60000320014",
      UPC: "00051115198373",
      "Alternative ID": "6022J",
    },
    sellerName:'Denny',
    sellerMobile:'9876543210',
    sellerAdd:'D-124, NY, USA',
    sellerURL:'genwin.com',
  },
  {
    id: 16,
    name: "Scotch Brite Surface Conditioning Low Stretch Roll",
    image: p3,
    price: '500',
    thumbnails: [p1,p2,p3],
    shortDetails: {'Tape Length' : '20m', 'Tape Width' : '1 Inch', 'Backing Material' : 'Polyester', 'Tape Type' : 'Non-Adhesive'},
    shortContent: 'Genwin Polyester Double-Sided Tape: Strong, Reliable Bonding for Various Applications Indulge in a versatile and powerful adhesive solution with Genwin Polyester Double-Sided Tape. Unwavering strength',
    properties: {'High bond strength':'Provides a secure hold for a wide range of materials, including paper, plastic, wood'},
    details: {
      "3M Stock": "7100227325",        
      "Previous 3M Stock": "60000320014",
      UPC: "00051115198373",
      "Alternative ID": "6022J",
    },
    sellerName:'Denny',
    sellerMobile:'9876543210',
    sellerAdd:'D-124, NY, USA',
    sellerURL:'genwin.com',
  },
  {
    id: 17,
    name: "Scotch Brite Surface Conditioning Low Stretch Roll",
    image: p1,
    price: '325',
    thumbnails: [p1,p2,p3],
    shortDetails: {'Tape Length' : '20m', 'Tape Width' : '1 Inch', 'Backing Material' : 'Polyester', 'Tape Type' : 'Non-Adhesive'},
    shortContent: 'Genwin Polyester Double-Sided Tape: Strong, Reliable Bonding for Various Applications Indulge in a versatile and powerful adhesive solution with Genwin Polyester Double-Sided Tape. Unwavering strength',
    properties: {'High bond strength':'Provides a secure hold for a wide range of materials, including paper, plastic, wood'},
    details: {
      "3M Stock": "7100227325",        
      "Previous 3M Stock": "60000320014",
      UPC: "00051115198373",
      "Alternative ID": "6022J",
    },
    sellerName:'Denny',
    sellerMobile:'9876543210',
    sellerAdd:'D-124, NY, USA',
    sellerURL:'genwin.com',
  },
  {
    id: 18,
    name: "Scotch Brite Surface Conditioning Low Stretch Roll",
    image: p3,
    price: '500',
    thumbnails: [p1,p2,p3],
    shortDetails: {'Tape Length' : '20m', 'Tape Width' : '1 Inch', 'Backing Material' : 'Polyester', 'Tape Type' : 'Non-Adhesive'},
    shortContent: 'Genwin Polyester Double-Sided Tape: Strong, Reliable Bonding for Various Applications Indulge in a versatile and powerful adhesive solution with Genwin Polyester Double-Sided Tape. Unwavering strength',
    properties: {'High bond strength':'Provides a secure hold for a wide range of materials, including paper, plastic, wood'},
    details: {
      "3M Stock": "7100227325",        
      "Previous 3M Stock": "60000320014",
      UPC: "00051115198373",
      "Alternative ID": "6022J",
    },
    sellerName:'Denny',
    sellerMobile:'9876543210',
    sellerAdd:'D-124, NY, USA',
    sellerURL:'genwin.com',
  },
  {
    id: 19,
    name: "Scotch Brite Surface Conditioning Low Stretch Roll",
    image: p2,
    price: '333',
    thumbnails: [p1,p2,p3],
    shortDetails: {'Tape Length' : '20m', 'Tape Width' : '1 Inch', 'Backing Material' : 'Polyester', 'Tape Type' : 'Non-Adhesive'},
    shortContent: 'Genwin Polyester Double-Sided Tape: Strong, Reliable Bonding for Various Applications Indulge in a versatile and powerful adhesive solution with Genwin Polyester Double-Sided Tape. Unwavering strength',
    properties: {'High bond strength':'Provides a secure hold for a wide range of materials, including paper, plastic, wood'},
    details: {
      "3M Stock": "7100227325",        
      "Previous 3M Stock": "60000320014",
      UPC: "00051115198373",
      "Alternative ID": "6022J",
    },
    sellerName:'Denny',
    sellerMobile:'9876543210',
    sellerAdd:'D-124, NY, USA',
    sellerURL:'genwin.com',
  },
  {
    id: 20,
    name: "Scotch Brite Surface Conditioning Low Stretch Roll",
    image: p3,
    price: '500',
    thumbnails: [p1,p2,p3],
    shortDetails: {'Tape Length' : '20m', 'Tape Width' : '1 Inch', 'Backing Material' : 'Polyester', 'Tape Type' : 'Non-Adhesive'},
    shortContent: 'Genwin Polyester Double-Sided Tape: Strong, Reliable Bonding for Various Applications Indulge in a versatile and powerful adhesive solution with Genwin Polyester Double-Sided Tape. Unwavering strength',
    properties: {'High bond strength':'Provides a secure hold for a wide range of materials, including paper, plastic, wood'},
    details: {
      "3M Stock": "7100227325",        
      "Previous 3M Stock": "60000320014",
      UPC: "00051115198373",
      "Alternative ID": "6022J",
    },
    sellerName:'Denny',
    sellerMobile:'9876543210',
    sellerAdd:'D-124, NY, USA',
    sellerURL:'genwin.com',
  },
  {
    id: 21,
    name: "Scotch Brite Surface Conditioning Low Stretch Roll",
    image: p1,
    price: '325',
    thumbnails: [p1,p2,p3],
    shortDetails: {'Tape Length' : '20m', 'Tape Width' : '1 Inch', 'Backing Material' : 'Polyester', 'Tape Type' : 'Non-Adhesive'},
    shortContent: 'Genwin Polyester Double-Sided Tape: Strong, Reliable Bonding for Various Applications Indulge in a versatile and powerful adhesive solution with Genwin Polyester Double-Sided Tape. Unwavering strength',
    properties: {'High bond strength':'Provides a secure hold for a wide range of materials, including paper, plastic, wood'},
    details: {
      "3M Stock": "7100227325",        
      "Previous 3M Stock": "60000320014",
      UPC: "00051115198373",
      "Alternative ID": "6022J",
    },
    sellerName:'Denny',
    sellerMobile:'9876543210',
    sellerAdd:'D-124, NY, USA',
    sellerURL:'genwin.com',
  },
  {
    id: 22,
    name: "Scotch Brite Surface Conditioning Low Stretch Roll",
    image: p3,
    price: '500',
    thumbnails: [p1,p2,p3],
    shortDetails: {'Tape Length' : '20m', 'Tape Width' : '1 Inch', 'Backing Material' : 'Polyester', 'Tape Type' : 'Non-Adhesive'},
    shortContent: 'Genwin Polyester Double-Sided Tape: Strong, Reliable Bonding for Various Applications Indulge in a versatile and powerful adhesive solution with Genwin Polyester Double-Sided Tape. Unwavering strength',
    properties: {'High bond strength':'Provides a secure hold for a wide range of materials, including paper, plastic, wood'},
    details: {
      "3M Stock": "7100227325",        
      "Previous 3M Stock": "60000320014",
      UPC: "00051115198373",
      "Alternative ID": "6022J",
    },
    sellerName:'Denny',
    sellerMobile:'9876543210',
    sellerAdd:'D-124, NY, USA',
    sellerURL:'genwin.com',
  },
  {
    id: 23,
    name: "Scotch Brite Surface Conditioning Low Stretch Roll",
    image: p2,
    price: '333',
    thumbnails: [p1,p2,p3],
    shortDetails: {'Tape Length' : '20m', 'Tape Width' : '1 Inch', 'Backing Material' : 'Polyester', 'Tape Type' : 'Non-Adhesive'},
    shortContent: 'Genwin Polyester Double-Sided Tape: Strong, Reliable Bonding for Various Applications Indulge in a versatile and powerful adhesive solution with Genwin Polyester Double-Sided Tape. Unwavering strength',
    properties: {'High bond strength':'Provides a secure hold for a wide range of materials, including paper, plastic, wood'},
    details: {
      "3M Stock": "7100227325",        
      "Previous 3M Stock": "60000320014",
      UPC: "00051115198373",
      "Alternative ID": "6022J",
    },
    sellerName:'Denny',
    sellerMobile:'9876543210',
    sellerAdd:'D-124, NY, USA',
    sellerURL:'genwin.com',
  },
  {
    id: 24,
    name: "Scotch Brite Surface Conditioning Low Stretch Roll",
    image: p2,
    price: '333',
    thumbnails: [p1,p2,p3],
    shortDetails: {'Tape Length' : '20m', 'Tape Width' : '1 Inch', 'Backing Material' : 'Polyester', 'Tape Type' : 'Non-Adhesive'},
    shortContent: 'Genwin Polyester Double-Sided Tape: Strong, Reliable Bonding for Various Applications Indulge in a versatile and powerful adhesive solution with Genwin Polyester Double-Sided Tape. Unwavering strength',
    properties: {'High bond strength':'Provides a secure hold for a wide range of materials, including paper, plastic, wood'},
    details: {
      "3M Stock": "7100227325",        
      "Previous 3M Stock": "60000320014",
      UPC: "00051115198373",
      "Alternative ID": "6022J",
    },
    sellerName:'Denny',
    sellerMobile:'9876543210',
    sellerAdd:'D-124, NY, USA',
    sellerURL:'genwin.com',
  },
  {
    id: 25,
    name: "Scotch Brite Surface Conditioning Low Stretch Roll",
    image: p2,
    price: '333',
    thumbnails: [p1,p2,p3],
    shortDetails: {'Tape Length' : '20m', 'Tape Width' : '1 Inch', 'Backing Material' : 'Polyester', 'Tape Type' : 'Non-Adhesive'},
    shortContent: 'Genwin Polyester Double-Sided Tape: Strong, Reliable Bonding for Various Applications Indulge in a versatile and powerful adhesive solution with Genwin Polyester Double-Sided Tape. Unwavering strength',
    properties: {'High bond strength':'Provides a secure hold for a wide range of materials, including paper, plastic, wood'},
    details: {
      "3M Stock": "7100227325",        
      "Previous 3M Stock": "60000320014",
      UPC: "00051115198373",
      "Alternative ID": "6022J",
    },
    sellerName:'Denny',
    sellerMobile:'9876543210',
    sellerAdd:'D-124, NY, USA',
    sellerURL:'genwin.com',
  },
  {
    id: 26,
    name: "Scotch Brite Surface Conditioning Low Stretch Roll",
    image: p2,
    price: '333',
    thumbnails: [p1,p2,p3],
    shortDetails: {'Tape Length' : '20m', 'Tape Width' : '1 Inch', 'Backing Material' : 'Polyester', 'Tape Type' : 'Non-Adhesive'},
    shortContent: 'Genwin Polyester Double-Sided Tape: Strong, Reliable Bonding for Various Applications Indulge in a versatile and powerful adhesive solution with Genwin Polyester Double-Sided Tape. Unwavering strength',
    properties: {'High bond strength':'Provides a secure hold for a wide range of materials, including paper, plastic, wood'},
    details: {
      "3M Stock": "7100227325",        
      "Previous 3M Stock": "60000320014",
      UPC: "00051115198373",
      "Alternative ID": "6022J",
    },
    sellerName:'Denny',
    sellerMobile:'9876543210',
    sellerAdd:'D-124, NY, USA',
    sellerURL:'genwin.com',
  },
  {
    id: 27,
    name: "Scotch Brite Surface Conditioning Low Stretch Roll",
    image: p2,
    price: '333',
    thumbnails: [p1,p2,p3],
    shortDetails: {'Tape Length' : '20m', 'Tape Width' : '1 Inch', 'Backing Material' : 'Polyester', 'Tape Type' : 'Non-Adhesive'},
    shortContent: 'Genwin Polyester Double-Sided Tape: Strong, Reliable Bonding for Various Applications Indulge in a versatile and powerful adhesive solution with Genwin Polyester Double-Sided Tape. Unwavering strength',
    properties: {'High bond strength':'Provides a secure hold for a wide range of materials, including paper, plastic, wood'},
    details: {
      "3M Stock": "7100227325",        
      "Previous 3M Stock": "60000320014",
      UPC: "00051115198373",
      "Alternative ID": "6022J",
    },
    sellerName:'Denny',
    sellerMobile:'9876543210',
    sellerAdd:'D-124, NY, USA',
    sellerURL:'genwin.com',
  },
  {
    id: 28,
    name: "Scotch Brite Surface Conditioning Low Stretch Roll",
    image: p2,
    price: '333',
    thumbnails: [p1,p2,p3],
    shortDetails: {'Tape Length' : '20m', 'Tape Width' : '1 Inch', 'Backing Material' : 'Polyester', 'Tape Type' : 'Non-Adhesive'},
    shortContent: 'Genwin Polyester Double-Sided Tape: Strong, Reliable Bonding for Various Applications Indulge in a versatile and powerful adhesive solution with Genwin Polyester Double-Sided Tape. Unwavering strength',
    properties: {'High bond strength':'Provides a secure hold for a wide range of materials, including paper, plastic, wood'},
    details: {
      "3M Stock": "7100227325",        
      "Previous 3M Stock": "60000320014",
      UPC: "00051115198373",
      "Alternative ID": "6022J",
    },
    sellerName:'Denny',
    sellerMobile:'9876543210',
    sellerAdd:'D-124, NY, USA',
    sellerURL:'genwin.com',
  },
  {
    id: 29,
    name: "Scotch Brite Surface Conditioning Low Stretch Roll",
    image: p2,
    price: '333',
    thumbnails: [p1,p2,p3],
    shortDetails: {'Tape Length' : '20m', 'Tape Width' : '1 Inch', 'Backing Material' : 'Polyester', 'Tape Type' : 'Non-Adhesive'},
    shortContent: 'Genwin Polyester Double-Sided Tape: Strong, Reliable Bonding for Various Applications Indulge in a versatile and powerful adhesive solution with Genwin Polyester Double-Sided Tape. Unwavering strength',
    properties: {'High bond strength':'Provides a secure hold for a wide range of materials, including paper, plastic, wood'},
    details: {
      "3M Stock": "7100227325",        
      "Previous 3M Stock": "60000320014",
      UPC: "00051115198373",
      "Alternative ID": "6022J",
    },
    sellerName:'Denny',
    sellerMobile:'9876543210',
    sellerAdd:'D-124, NY, USA',
    sellerURL:'genwin.com',
  },
  {
    id: 30,
    name: "Scotch Brite Surface Conditioning Low Stretch Roll",
    image: p2,
    price: '333',
    thumbnails: [p1,p2,p3],
    shortDetails: {'Tape Length' : '20m', 'Tape Width' : '1 Inch', 'Backing Material' : 'Polyester', 'Tape Type' : 'Non-Adhesive'},
    shortContent: 'Genwin Polyester Double-Sided Tape: Strong, Reliable Bonding for Various Applications Indulge in a versatile and powerful adhesive solution with Genwin Polyester Double-Sided Tape. Unwavering strength',
    properties: {'High bond strength':'Provides a secure hold for a wide range of materials, including paper, plastic, wood'},
    details: {
      "3M Stock": "7100227325",        
      "Previous 3M Stock": "60000320014",
      UPC: "00051115198373",
      "Alternative ID": "6022J",
    },
    sellerName:'Denny',
    sellerMobile:'9876543210',
    sellerAdd:'D-124, NY, USA',
    sellerURL:'genwin.com',
  },

  {
    id: 31,
    name: "Scotch Brite Surface Conditioning Low Stretch Roll",
    image: p2,
    price: '333',
    thumbnails: [p1,p2,p3],
    shortDetails: {'Tape Length' : '20m', 'Tape Width' : '1 Inch', 'Backing Material' : 'Polyester', 'Tape Type' : 'Non-Adhesive'},
    shortContent: 'Genwin Polyester Double-Sided Tape: Strong, Reliable Bonding for Various Applications Indulge in a versatile and powerful adhesive solution with Genwin Polyester Double-Sided Tape. Unwavering strength',
    properties: {'High bond strength':'Provides a secure hold for a wide range of materials, including paper, plastic, wood'},
    details: {
      "3M Stock": "7100227325",        
      "Previous 3M Stock": "60000320014",
      UPC: "00051115198373",
      "Alternative ID": "6022J",
    },
    sellerName:'Denny',
    sellerMobile:'9876543210',
    sellerAdd:'D-124, NY, USA',
    sellerURL:'genwin.com',
  },
  {
    id: 32,
    name: "Scotch Brite Surface Conditioning Low Stretch Roll",
    image: p2,
    price: '333',
    thumbnails: [p1,p2,p3],
    shortDetails: {'Tape Length' : '20m', 'Tape Width' : '1 Inch', 'Backing Material' : 'Polyester', 'Tape Type' : 'Non-Adhesive'},
    shortContent: 'Genwin Polyester Double-Sided Tape: Strong, Reliable Bonding for Various Applications Indulge in a versatile and powerful adhesive solution with Genwin Polyester Double-Sided Tape. Unwavering strength',
    properties: {'High bond strength':'Provides a secure hold for a wide range of materials, including paper, plastic, wood'},
    details: {
      "3M Stock": "7100227325",        
      "Previous 3M Stock": "60000320014",
      UPC: "00051115198373",
      "Alternative ID": "6022J",
    },
    sellerName:'Denny',
    sellerMobile:'9876543210',
    sellerAdd:'D-124, NY, USA',
    sellerURL:'genwin.com',
  },
  {
    id: 33,
    name: "Scotch Brite Surface Conditioning Low Stretch Roll",
    image: p2,
    price: '333',
    thumbnails: [p1,p2,p3],
    shortDetails: {'Tape Length' : '20m', 'Tape Width' : '1 Inch', 'Backing Material' : 'Polyester', 'Tape Type' : 'Non-Adhesive'},
    shortContent: 'Genwin Polyester Double-Sided Tape: Strong, Reliable Bonding for Various Applications Indulge in a versatile and powerful adhesive solution with Genwin Polyester Double-Sided Tape. Unwavering strength',
    properties: {'High bond strength':'Provides a secure hold for a wide range of materials, including paper, plastic, wood'},
    details: {
      "3M Stock": "7100227325",        
      "Previous 3M Stock": "60000320014",
      UPC: "00051115198373",
      "Alternative ID": "6022J",
    },
    sellerName:'Denny',
    sellerMobile:'9876543210',
    sellerAdd:'D-124, NY, USA',
    sellerURL:'genwin.com',
  },
  {
    id: 34,
    name: "Scotch Brite Surface Conditioning Low Stretch Roll",
    image: p2,
    price: '333',
    thumbnails: [p1,p2,p3],
    shortDetails: {'Tape Length' : '20m', 'Tape Width' : '1 Inch', 'Backing Material' : 'Polyester', 'Tape Type' : 'Non-Adhesive'},
    shortContent: 'Genwin Polyester Double-Sided Tape: Strong, Reliable Bonding for Various Applications Indulge in a versatile and powerful adhesive solution with Genwin Polyester Double-Sided Tape. Unwavering strength',
    properties: {'High bond strength':'Provides a secure hold for a wide range of materials, including paper, plastic, wood'},
    details: {
      "3M Stock": "7100227325",        
      "Previous 3M Stock": "60000320014",
      UPC: "00051115198373",
      "Alternative ID": "6022J",
    },
    sellerName:'Denny',
    sellerMobile:'9876543210',
    sellerAdd:'D-124, NY, USA',
    sellerURL:'genwin.com',
  }
];

const similarProducts = [
  {
      id: 1,
      name: "Scotch Brite Surface Conditioning Low Stretch Roll",
      image: p1,
      price: '100',
      thumbnails: [p1,p2,p3],
      shortDetails: {'Tape Length' : '20m', 'Tape Width' : '1 Inch', 'Backing Material' : 'Polyester', 'Tape Type' : 'Non-Adhesive'},
      shortContent: 'Genwin Polyester Double-Sided Tape: Strong, Reliable Bonding for Various Applications Indulge in a versatile and powerful adhesive solution with Genwin Polyester Double-Sided Tape. Unwavering strength',
      properties: {'High bond strength':'Provides a secure hold for a wide range of materials, including paper, plastic, wood'},
      details: {
        "3M Stock": "7100227325",        
        "Previous 3M Stock": "60000320014",
        UPC: "00051115198373",
        "Alternative ID": "6022J",
      },
      sellerName:'Denny',
      sellerMobile:'9876543210',
      sellerAdd:'D-124, NY, USA',
      sellerURL:'genwin.com',
    },
    {
      id: 2,
      name: "Scotch Brite Surface Conditioning Low Stretch Roll",
      image: p2,
      price: '150',
      thumbnails: [p1,p2,p3],
      shortDetails: {'Tape Length' : '20m', 'Tape Width' : '1 Inch', 'Backing Material' : 'Polyester', 'Tape Type' : 'Non-Adhesive'},
      shortContent: 'Genwin Polyester Double-Sided Tape: Strong, Reliable Bonding for Various Applications Indulge in a versatile and powerful adhesive solution with Genwin Polyester Double-Sided Tape. Unwavering strength',
      properties: {'High bond strength':'Provides a secure hold for a wide range of materials, including paper, plastic, wood'},
      details: {
        "3M Stock": "7100227325",        
        "Previous 3M Stock": "60000320014",
        UPC: "00051115198373",
        "Alternative ID": "6022J",
      },
      sellerName:'Denny',
      sellerMobile:'9876543210',
      sellerAdd:'D-124, NY, USA',
      sellerURL:'genwin.com',
    },
    {
      id: 3,
      name: "Scotch Brite Surface Conditioning Low Stretch Roll",
      image: p3,
      price: '200',
      thumbnails: [p1,p2,p3],
      shortDetails: {'Tape Length' : '20m', 'Tape Width' : '1 Inch', 'Backing Material' : 'Polyester', 'Tape Type' : 'Non-Adhesive'},
      shortContent: 'Genwin Polyester Double-Sided Tape: Strong, Reliable Bonding for Various Applications Indulge in a versatile and powerful adhesive solution with Genwin Polyester Double-Sided Tape. Unwavering strength',
      properties: {'High bond strength':'Provides a secure hold for a wide range of materials, including paper, plastic, wood'},
      details: {
        "3M Stock": "7100227325",        
        "Previous 3M Stock": "60000320014",
        UPC: "00051115198373",
        "Alternative ID": "6022J",
      },
      sellerName:'Denny',
      sellerMobile:'9876543210',
      sellerAdd:'D-124, NY, USA',
      sellerURL:'genwin.com',
    },
    {
      id: 4,
      name: "Scotch Brite Surface Conditioning Low Stretch Roll",
      image: p2,
      price: '250',
      thumbnails: [p1,p2,p3],
      shortDetails: {'Tape Length' : '20m', 'Tape Width' : '1 Inch', 'Backing Material' : 'Polyester', 'Tape Type' : 'Non-Adhesive'},
      shortContent: 'Genwin Polyester Double-Sided Tape: Strong, Reliable Bonding for Various Applications Indulge in a versatile and powerful adhesive solution with Genwin Polyester Double-Sided Tape. Unwavering strength',
      properties: {'High bond strength':'Provides a secure hold for a wide range of materials, including paper, plastic, wood'},
      details: {
        "3M Stock": "7100227325",        
        "Previous 3M Stock": "60000320014",
        UPC: "00051115198373",
        "Alternative ID": "6022J",
      },
      sellerName:'Denny',
      sellerMobile:'9876543210',
      sellerAdd:'D-124, NY, USA',
      sellerURL:'genwin.com',
    },
    {
      id: 5,
      name: "Scotch Brite Surface Conditioning Low Stretch Roll",
      image: p3,
      price: '175',
      thumbnails: [p1,p2,p3],
      shortDetails: {'Tape Length' : '20m', 'Tape Width' : '1 Inch', 'Backing Material' : 'Polyester', 'Tape Type' : 'Non-Adhesive'},
      shortContent: 'Genwin Polyester Double-Sided Tape: Strong, Reliable Bonding for Various Applications Indulge in a versatile and powerful adhesive solution with Genwin Polyester Double-Sided Tape. Unwavering strength',
      properties: {'High bond strength':'Provides a secure hold for a wide range of materials, including paper, plastic, wood'},
      details: {
        "3M Stock": "7100227325",        
        "Previous 3M Stock": "60000320014",
        UPC: "00051115198373",
        "Alternative ID": "6022J",
      },
      sellerName:'Denny',
      sellerMobile:'9876543210',
      sellerAdd:'D-124, NY, USA',
      sellerURL:'genwin.com',
    },
    {
      id: 6,
      name: "Scotch Brite Surface Conditioning Low Stretch Roll",
      image: p1,
      price: '100',
      thumbnails: [p1,p2,p3],
      shortDetails: {'Tape Length' : '20m', 'Tape Width' : '1 Inch', 'Backing Material' : 'Polyester', 'Tape Type' : 'Non-Adhesive'},
      shortContent: 'Genwin Polyester Double-Sided Tape: Strong, Reliable Bonding for Various Applications Indulge in a versatile and powerful adhesive solution with Genwin Polyester Double-Sided Tape. Unwavering strength',
      properties: {'High bond strength':'Provides a secure hold for a wide range of materials, including paper, plastic, wood'},
      details: {
        "3M Stock": "7100227325",        
        "Previous 3M Stock": "60000320014",
        UPC: "00051115198373",
        "Alternative ID": "6022J",
      },
      sellerName:'Denny',
      sellerMobile:'9876543210',
      sellerAdd:'D-124, NY, USA',
      sellerURL:'genwin.com',
    },
    {
      id: 7,
      name: "Scotch Brite Surface Conditioning Low Stretch Roll",
      image: p3,
      price: '300',
      thumbnails: [p1,p2,p3],
      shortDetails: {'Tape Length' : '20m', 'Tape Width' : '1 Inch', 'Backing Material' : 'Polyester', 'Tape Type' : 'Non-Adhesive'},
      shortContent: 'Genwin Polyester Double-Sided Tape: Strong, Reliable Bonding for Various Applications Indulge in a versatile and powerful adhesive solution with Genwin Polyester Double-Sided Tape. Unwavering strength',
      properties: {'High bond strength':'Provides a secure hold for a wide range of materials, including paper, plastic, wood'},
      details: {
        "3M Stock": "7100227325",        
        "Previous 3M Stock": "60000320014",
        UPC: "00051115198373",
        "Alternative ID": "6022J",
      },
      sellerName:'Denny',
      sellerMobile:'9876543210',
      sellerAdd:'D-124, NY, USA',
      sellerURL:'genwin.com',
    },
    {
      id: 8,
      name: "Scotch Brite Surface Conditioning Low Stretch Roll",
      image: p1,
      price: '275',
      thumbnails: [p1,p2,p3],
      shortDetails: {'Tape Length' : '20m', 'Tape Width' : '1 Inch', 'Backing Material' : 'Polyester', 'Tape Type' : 'Non-Adhesive'},
      shortContent: 'Genwin Polyester Double-Sided Tape: Strong, Reliable Bonding for Various Applications Indulge in a versatile and powerful adhesive solution with Genwin Polyester Double-Sided Tape. Unwavering strength',
      properties: {'High bond strength':'Provides a secure hold for a wide range of materials, including paper, plastic, wood'},
      details: {
        "3M Stock": "7100227325",        
        "Previous 3M Stock": "60000320014",
        UPC: "00051115198373",
        "Alternative ID": "6022J",
      },
      sellerName:'Denny',
      sellerMobile:'9876543210',
      sellerAdd:'D-124, NY, USA',
      sellerURL:'genwin.com',
    },
    {
      id: 9,
      name: "Scotch Brite Surface Conditioning Low Stretch Roll",
      image: p2,
      price: '225',
      thumbnails: [p1,p2,p3],
      shortDetails: {'Tape Length' : '20m', 'Tape Width' : '1 Inch', 'Backing Material' : 'Polyester', 'Tape Type' : 'Non-Adhesive'},
      shortContent: 'Genwin Polyester Double-Sided Tape: Strong, Reliable Bonding for Various Applications Indulge in a versatile and powerful adhesive solution with Genwin Polyester Double-Sided Tape. Unwavering strength',
      properties: {'High bond strength':'Provides a secure hold for a wide range of materials, including paper, plastic, wood'},
      details: {
        "3M Stock": "7100227325",        
        "Previous 3M Stock": "60000320014",
        UPC: "00051115198373",
        "Alternative ID": "6022J",
      },
      sellerName:'Denny',
      sellerMobile:'9876543210',
      sellerAdd:'D-124, NY, USA',
      sellerURL:'genwin.com',
    },
    {
      id: 10,
      name: "Scotch Brite Surface Conditioning Low Stretch Roll",
      image: p2,
      price: '333',
      thumbnails: [p1,p2,p3],
      shortDetails: {'Tape Length' : '20m', 'Tape Width' : '1 Inch', 'Backing Material' : 'Polyester', 'Tape Type' : 'Non-Adhesive'},
      shortContent: 'Genwin Polyester Double-Sided Tape: Strong, Reliable Bonding for Various Applications Indulge in a versatile and powerful adhesive solution with Genwin Polyester Double-Sided Tape. Unwavering strength',
      properties: {'High bond strength':'Provides a secure hold for a wide range of materials, including paper, plastic, wood'},
      details: {
        "3M Stock": "7100227325",        
        "Previous 3M Stock": "60000320014",
        UPC: "00051115198373",
        "Alternative ID": "6022J",
      },
      sellerName:'Denny',
      sellerMobile:'9876543210',
      sellerAdd:'D-124, NY, USA',
      sellerURL:'genwin.com',
    },
    {
      id: 11,
      name: "Scotch Brite Surface Conditioning Low Stretch Roll",
      image: p3,
      price: '500',
      thumbnails: [p1,p2,p3],
      shortDetails: {'Tape Length' : '20m', 'Tape Width' : '1 Inch', 'Backing Material' : 'Polyester', 'Tape Type' : 'Non-Adhesive'},
      shortContent: 'Genwin Polyester Double-Sided Tape: Strong, Reliable Bonding for Various Applications Indulge in a versatile and powerful adhesive solution with Genwin Polyester Double-Sided Tape. Unwavering strength',
      properties: {'High bond strength':'Provides a secure hold for a wide range of materials, including paper, plastic, wood'},
      details: {
        "3M Stock": "7100227325",        
        "Previous 3M Stock": "60000320014",
        UPC: "00051115198373",
        "Alternative ID": "6022J",
      },
      sellerName:'Denny',
      sellerMobile:'9876543210',
      sellerAdd:'D-124, NY, USA',
      sellerURL:'genwin.com',
    },
    {
      id: 12,
      name: "Scotch Brite Surface Conditioning Low Stretch Roll",
      image: p1,
      price: '325',
      thumbnails: [p1,p2,p3],
      shortDetails: {'Tape Length' : '20m', 'Tape Width' : '1 Inch', 'Backing Material' : 'Polyester', 'Tape Type' : 'Non-Adhesive'},
      shortContent: 'Genwin Polyester Double-Sided Tape: Strong, Reliable Bonding for Various Applications Indulge in a versatile and powerful adhesive solution with Genwin Polyester Double-Sided Tape. Unwavering strength',
      properties: {'High bond properties':'Provides a secure hold for a wide range of materials, including paper, plastic, wood'},
      details: {
        "3M Stock": "7100227325",        
        "Previous 3M Stock": "60000320014",
        UPC: "00051115198373",
        "Alternative ID": "6022J",
      },
      sellerName:'Denny',
      sellerMobile:'9876543210',
      sellerAdd:'D-124, NY, USA',
      sellerURL:'genwin.com',
    },
];

const reviews = [
  { rating: 5, comment: 'Excellent product!' },
  { rating: 4, comment: 'Very good, but could be better.' },
  { rating: 5, comment: 'Amazing, highly recommend!' },
  { rating: 3, comment: 'It’s okay, nothing special.' },
  { rating: 4, comment: 'Good value for money.' },
];

const feedbacks = [
  { customerName: 'Alice', date: '2024-11-25', rating: 5, comment: 'Great product, loved it!' },
  { customerName: 'Bob', date: '2024-11-24', rating: 4, comment: 'Satisfactory service.' },
  { customerName: 'Charlie', date: '2024-11-23', rating: 5, comment: 'Excellent quality, would buy again.' },
  { customerName: 'David', date: '2024-11-22', rating: 3, comment: 'Not as expected, could be improved.' },
  { customerName: 'Eve', date: '2024-11-21', rating: 4, comment: 'Fast delivery and good support.' },
  // Add more feedbacks as needed
];


export default function DetailPage(){
    const params = useParams();
    const pid = params?.id; // Extract the dynamic ID from the URL
    //const [product, setProduct] = useState([]);
    const [showDetails, setShowDetails] = useState(false);
    const [visibleSimilarProducts, setVisibleSimilarProducts] = useState(4);     
    
    const product = products.find(p => p.id === parseInt(pid)); // Find the product with the matching id
    const [mainImage, setMainImage] = useState(product?.image || defaultImg);
    const [averageRating, setAverageRating] = useState(0);
    const [ratingCounts, setRatingCounts] = useState({});
    


    // Fetch product data to edit
    useEffect(() => {
      async function fetchProductData() {
          try {
              const response = await fetch(`/api/admin/getsingleproduct/${pid}`,{
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                },
              });
              const data = await response.json();

              //setProduct(data);
              
              /* if (data) {
                const files = JSON.parse(data.imagesurl).map((file) => ({
                    name: file.name, // Assuming each file has a `name` property in the JSON
                    preview: file.data, // Use `file.url` directly if it contains the file's URL
                }));
                const parsedObjectSpec = JSON.parse(data.specifications);
                // Convert object to array of { name, value } objects
                const parsedSpec = Object.entries(parsedObjectSpec).map(([key, value]) => ({
                  name: key,
                  value,
                }));
                const parsedObjectProp = JSON.parse(data.properties);
                // Convert object to array of { name, value } objects
                const parsedProp = Object.entries(parsedObjectProp).map(([key, value]) => ({
                  name: key,
                  value,
                }));             
              } */
          } catch (error) {
              console.error("Error fetching product data:", error);
          }
      }
      fetchProductData();
    }, [pid]); 



    useState(() => {
      const totalRatings = reviews.length;
      let sumRatings = 0;
      const counts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  
      reviews.forEach((review) => {
        const { rating } = review;
        sumRatings += rating;
        if (rating in counts) {
          counts[rating]++;
        }
      });
  
      if (totalRatings > 0) {
        setAverageRating(sumRatings / totalRatings);
      }
      setRatingCounts(counts);
    }, [reviews]);

    const [visibleCount, setVisibleCount] = useState(3);

    const handleShowMore = () => {
      setVisibleCount((prevCount) => prevCount + 3); // Show 3 more feedbacks
    };

    const [rating, setRating] = useState(0);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [review, setReview] = useState('');
    const [image, setImage] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    const handleThumbnailClick = (thumb) => {
        setMainImage(thumb); // Update the main image
    };

    if (!product) {
    return <p>Product not found.</p>;
    }
    

    const loadMoreSimilarProducts = () => {
        setVisibleSimilarProducts(prev => prev + 4); // Increase visible similar products by 4 each time
    };

    const handleToggleDetails = () => {
      setShowDetails(!showDetails);
    };

    const renderStars = (averageRating) => {
      const fullStars = Math.floor(averageRating);
      const hasHalfStar = averageRating % 1 !== 0;
      const stars = [];
    
      for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
          stars.push('★'); // Full star
        } else if (i === fullStars && hasHalfStar) {
          stars.push('☆'); // Half star (using a placeholder)
        } else {
          stars.push('☆'); // Empty star
        }
      }
    
      return stars.map((star, index) => (
        <span key={index} className="text-yellow-500 text-xl">
          {star}
        </span>
      ));
    };

    

    const handleStarClick = (star) => {
      setRating(star);
    };

    const handleImageUpload = (e) => {
      const file = e.target.files[0];
      if (file) {
        // Validate file type (only images)
        const validTypes = ['image/jpeg', 'image/png', 'image/webp'];
        if (!validTypes.includes(file.type)) {
          setErrorMessage('Please upload a valid image (JPEG, PNG, WEBP)');
          setImage(null);
          return;
        }

        // Validate file size (e.g., max 5MB)
        const maxSize = 5 * 1024 * 1024;
        if (file.size > maxSize) {
          setErrorMessage('Image size should not exceed 5MB');
          setImage(null);
          return;
        }

        setImage(file);
        setErrorMessage('');
      }
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      if (!rating || !name || !email || !review) {
        alert('Please fill all fields and provide a rating!');
        return;
      }

      // Example form submission logic
      alert('Your review has been submitted!');
    };

  return (
    // <main className="w-full p-6 space-y-8">

    // starting 

  <>
      <div className="container  max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 mt-5">
        {/* <div className='container max-w-7xl mx-auto'> */}
        
            {/* First Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6  ">
                {/* First Column: Product Image with Thumbnails */}
             
                <div className="flex flex-col rounded-md   border-[#FFCBCB80] gap-3">
                  <div className="rounded-md border-b-[#FFCBCB80]">
                <div className="bg-white  border bottom-2 pb-2 rounded-md border-[#FFCBCB80]">
                    {/* Main Image */}
                     <div className="flex justify-center items-center">
                      <Image
                          src={mainImage}
                          alt={product.name}
                          width={500}
                          height={60}
                          className="w-full max-w-md rounded-lg "
                      />    
                     </div> 
                 <div className="flex justify-between">
                   
                 <div className="flex  mt-4  gap-2 px-2 ">
                      
                      {product.thumbnails.map((thumb, idx) => (
                      <Image
                          key={idx}
                          src={thumb}
                          width={80}
                          height={60}
                          alt={`Thumbnail ${idx + 1}`}
                           className="rounded-lg cursor-pointer  px-2 py-2 border border-[#FFCBCB80] bg-[#FFCBCB80] w-20 h-20 sm:w-24 sm:h-24   hover:ring-1 hover:ring-red-300 hover:border-red-500"
                          onClick={() => handleThumbnailClick(thumb)} // Handle click event
                      />
                      ))}
                      </div>
                     
                     {/* <div className="flex flex-col items-end gap-2 pt-4 pr-6"> */}
                      <div className=" pt-16 space-y-2 mr-2">
                      <Image
                          src={vector1}
                          alt={imageConfigDefault}
                          width={18}
                          height={16}
                          className=""
                      />    
                      <Image
                          src={vector}
                          alt={imageConfigDefault}
                          width={18}
                          height={16}
                          className=""
                      />  
                      
                      </div>
                </div>

                </div> 
                  </div>
                  
            
                </div>


                {/* Second Column: Product Details */}
                <div className=""> 
                {/* <h1 className=" font-semibold text-gray-800">{product.name}</h1> */}
                <h1 className="font-semibold text-gray-800 text-lg md:text-xl font-[Platype]">{product.name}</h1>
                <div className="flex border-none ">
                <p className="text-xl font-bold text-[#E52D38] text-[24] pt-3">${product.price}</p> 
                  <span className="text-[#09090966] pt-4 pb-2 pl-2 text-[16px]   font-medium "> per piece</span>
                  </div>
                           
                {/* <table className="table-auto border-collapse w-full">
                    <tbody>
                        {/* {Object.entries(product.shortDetails).map(([key, value], index) => (
                        <tr key={key} className="border-b" id={index}>
                            <td className="bg-[#FFCBCB80] p-2 font-medium text-gray-700">{key}</td>
                            <td className="p-2 text-gray-600">{value}</td>
                        </tr>
                        ))}
                    </tbody>
                </table> */}
   <div className="overflow-hidden rounded-lg border border-[#FFCBCB4D] mt-4">
  <table className="table-auto w-full border-collapse">
    <tbody>
      {Object.entries(product.shortDetails).map(([key, value], index) => (
        <tr
          key={key}
          className="border-b"
          id={index}
          style={{ borderBottomColor: '#FFCBCB4D', borderBottomWidth: '1px' }}
        >
          <td className="bg-[#FFCBCB80] p-2 font-medium text-[#090909] font-600 text-[14px]">{key}</td>
          <td className="p-2 text-[#090909] font-500">{value}</td>
        </tr>
      ))}
    </tbody>
  </table>

                <p className="text-gray-500 mt-4">
                  {/* {Object.entries(product.properties).map(([key, value], index) => {
                    // Show only the first property initially
                    if (!showDetails && index > 0) return null;

                    return (
                      <span key={index} className="block">
                        <span className="text-gray-700 font-semibold">{key}: </span>
                        <span>{value}</span>
                      </span>
                    );
                  })} */}
                </p>
                <div className="mt-4">
                  <a
                     href="#view-more"
                     className="text-14 ml-4 py-5 text-red-500 font font-semibold"
                     onClick={handleToggleDetails}
                  >
                    {showDetails ? 'Show Less Details' : 'View More Details'}
                  </a>
                  {showDetails && (
                  <div className="mt-2 p-4 border-none bg-white">
                  <p className="text-gray-700">Here are some additional details you want to display.</p>
                  <div className="ml-5 mt-2 text-14 text-justify">
                    <p>Genwin Polyester Double-Sided Tape: Strong, Reliable Bonding for Various Applications. Unwavering strength.</p>
                    <p>High bond strength: Provides a secure hold for a wide range of materials, including paper, plastic, wood, and metal.</p>
                    <p>Additional features:</p>
                    <ul>
                      <li>Easy to use: Simply peel off the protective liner and apply the tape to the desired surface.</li>
                      <li>Temperature resistant: Withstands moderate heat exposure, making it suitable for various environments.</li>
                      <li>Available in different sizes: Choose the ideal size to suit your specific needs.</li>
                    </ul>
                    <p>Genwin Polyester Double-Sided Tape is the ideal solution for all your bonding requirements. Order yours today!</p>
                    <ul>
                      <li>Detail 3: Anything you need to show here.</li>
                      <li>Detail 4: Example information.</li>
                      <li>Detail 5: More example data.</li>
                      <li>Detail 6: Anything you need to show here.</li>
                    </ul>
                  </div>
                </div>
      )}
    </div>
    </div>
  
                {/* <button className="mt-4 bg-090909 text-white px-6 py-2 rounded-md hover:bg-blue-700">   */}
                <button className="mt-4 bg-black text-white px-6 py-2 rounded-md hover:bg-red-500 w-full sm:w-auto">          
                     <p>Get Latest Price</p>
                     <p className='text-12'>Request a Quote</p>
                </button>
              </div>
            </div>
          
        {/* Second Section: Similar Products */}

           <div className=' max-w-7xl mx-auto mt-5'> 
            <div className='flex flex-row gap-2  mt-[7%]'>
                 
                <h2 className="  text-[#393939] text-[30px] font-[Platype] font-600 text-2xl font-semibold ">Similar</h2>
                  <h2 className="text-[#EE313C] text-[30px] font-[Platype] font-600 text-2xl font-semibold">Products</h2>
                  </div>

                  <div className=''>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4 pb-3 ">
                {similarProducts.slice(0, visibleSimilarProducts).map((prod) => (
                    <div key={prod.id} className="overflow-hidden rounded-t-md rounded-r-md rounded-sm border bottom-1 border-E6ECF6 p-4  hover:border-red-200 transition-colors duration-300 group">
                    <Image 
                    width={0}
                     height={160}
                      layout="responsive" 
                      src={prod.image} 
                      alt={prod.name} 
                      className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500 ease-in-out" />
                    <h3 className="group-hover:text-E52D38 text-[#393939] lg:text-16 xl:text-16 font-[600] mt-2 lg:mb-3 xl:mb-3 text-14 xs:text-14 px-4">{prod.name}</h3>
                    <p className="text-gray-500 mt-1">${prod.price}</p>
                    <div className="mt-4 group flex flex-col items-center">
                        
                            <button className="w-full bg-[#D9D9D9] border-none justify-center pt-1 text-black px-4  mb-3 rounded-md  group-hover:text-primary  group-hover:border-[#FFD2D2] group-hover:bg-[#FFD2D2]  transition-colors duration-300 flex items-center  space-x-2">
                                <PhoneIcon className="w-6 h-6 text-09090 " />
                                <span className="w-full text-16 font-[500]  border-D9D9D9 flex items-center justify-center p-1 rounded-md mb-2 group-hover:text-primary transition-colors duration-300"
                              >View Mobile Number</span>
                            </button>
                        
                        <button className="w-full bg-090909 text-white px-4 py-2 mb-3 rounded-md transition-colors duration-300  group-hover:bg-red-500 group-hover:text-white">
                        Get Latest Price
                        </button>
                    </div>
                    </div>
                ))}
                </div>
                {visibleSimilarProducts < similarProducts.length && (
                <div className="text-center mt-6 pb-4">

                    <button
                    onClick={loadMoreSimilarProducts}
                    className="bg-[#FFD2D2] text-[#E52D38] text-[600] px-6 py-2 rounded-full font-semibold transition duration-300 hover:bg-[##FFD2D2]"
                    >
                    Show More
                    </button>
                </div>
                )}
            </div>
           </div>
           
          
           

            

      
    </div>
    <div className="border w-full "></div>

    <div>
       {/* Third Section: Tabs and Enquiry Form */}
            {/* <div className='container max-w-7xl mx-auto'> */}
            {/* <div className="mx-auto w-full sm:w-[90%] md:w-[80%] lg:w-[75%] xl:w-[70%]"> */}
            <div className="mx-auto  rounded-md   w-full sm:w-[90%] md:w-[80%] lg:w-[75%] xl:w-[90%] px-4 ">
            <div className="flex flex-col md:flex-row gap-4 py-5 mb-5 rounded-md">
          
            {/* <div className="grid grid-cols-1 gap-5 md:grid-cols-2 py-2 lg:py-5"> */}
            {/* <div className="flex flex-row gap-4 py-4  mb-5"> */}
                {/* Left Column: Tabs */}
                 <div className="w-full md:w-[50%]">
                  <div className="flex flex-row gap-1 py-2 sm:p-2 md:
                  
                  ">

                    <h2 className=" text-[#EE313C] text-[30px] font-[Platype] font-600 text-2xl font-semibold">Ratings </h2>
                    <span className="text-2xl font-semibold">&</span>
                    <h2 className=" text-[#393939] text-[30px] font-[Platype] font-600 text-2xl font-semibold"> Reviews </h2>
                  
                    </div>
                    <p className="text-[#090909] mt-4">Average Ratings*</p>
                    <div className="mb-6">
                    <div className="flex items-center mt-5">
                      {renderStars(averageRating)}
                      <span className="ml-2">{averageRating.toFixed(1)} / 5</span>
                    </div>
                  </div>
                 
                  
                <div className="container border rounded gap-5 py-5 px-2 ">
                    <h3 className="text-xl font-semibold mt-4 mb-3">Average Rating</h3>
                    {Object.keys(ratingCounts)
                      .reverse()
                      .map((rating) => {
                        const count = ratingCounts[rating];
                        const percentage = (count / reviews.length) * 100;

                        return (
                          <div key={rating} className="mb-2">
                            <div className="flex items-center">
                              <span className="font-medium mr-2">{rating}</span>
                              <div className="flex-1 bg-gray-200 h-2 rounded mt-1 relative">
                                <div
                                  className="bg-primary h-full rounded"
                                  style={{ width: `${percentage}%` }}
                                ></div>
                              </div>
                              <span className="text-sm ml-2">{percentage.toFixed(1)}%</span>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              






                {/* Right Column: Enquiry Form */}
                {/* <div className="w-full md:w-[50%] mt-7 p-6 border rounded px-7 pb-7"> */}
                {/* <div className="mx-auto w-full sm:w-[90%] md:w-[80%] lg:w-[75%] xl:w-[70%] px-4 border rounded"> */}
                 
                 <div className="border rounded-md w-full h-auto px-4 py-3 pt-3">
                  <h2 className="text-2xl font-semibold mb-4">Submit Your Review</h2>
                  {/* Star Rating Section */}
                  <div className="mb-4">
                    <div className="mb-2">
                      <p className="mr-2 font-medium">Add Your Rating<span>*</span></p>
                      <div className="flex items-center ">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <span
                            key={star}
                            className={`cursor-pointer text-2xl ${
                              star <= rating ? 'text-yellow-500' : 'text-gray-300'
                            }`}
                            onClick={() => handleStarClick(star)}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Name and Email Input Fields */}
                  {/* <div className="mb-4 flex gap-4 lg:flex xl:flex lg:flex-col xl:flex-col xs:flex-col flex-row"> */}
                  <div className="w-full flex flex-col md:flex-row gap-4">
  {/* Name Input */}
  <input
    type="text"
    placeholder="Name"
    value={name}
    onChange={(e) => setName(e.target.value)}
    className="w-full md:w-1/2 p-5 border rounded"
  />

  {/* Email Input */}
  <input
    type="email"
    placeholder="Email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className="w-full md:w-1/2 p-5 border rounded"
  />
</div>


                  {/* Review Text Area */}
                  <div className="mb-4 pt-4">
                    <label className="block mb-2 font-medium">Write Your Review:</label>
                    <textarea
                      value={review}
                      onChange={(e) => setReview(e.target.value)}
                      rows="4"
                      className="w-full p-2 border rounded max-full"
                     
                    ></textarea>
                  </div>

                  {/* Image Upload */}
                  <div className="mb-6">
                    <label className="block mb-2 font-medium">Upload an Image (optional):</label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="block w-full"
                    />
                    {errorMessage && <p className="text-red-500 text-sm mt-2">{errorMessage}</p>}
                    {image && <p className="text-green-500 text-sm mt-2">Image uploaded: {image.name}</p>}
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    className="  px-4 py-2 text-18  bg-090909 text-white rounded-lg hover:bg-red-500 mb-2"
                  >
                    Submit
                  </button>
                </div>
            </div>

            </div>
         <div className="border border-[#DBE0E9]"></div>


            {/* Left Column: User Reviews */}
            <div className="conatainer mx-auto w-[80%] mt-4">
            
            <div className="flex flex-row gap-1">
              <h2 className="text-2xl   font-semibold mb-4  text-[#393939] font-[Platype]">Customer</h2>
              <h2 className="text-2xl font-semibold mb-4  text-[#EE313C] font-[Platype]">Feedback</h2>
</div>
              <div>
              <div className="space-y-4">
                {feedbacks.slice(0, visibleCount).map((feedback, index) => (
                  <div key={index} className="flex items-start p-1 border bottom-f7f4ed rounded">
                    {/* Star rating with number on the left */}
                    <div className="flex-shrink-0 flex items-center justify-center mr-4 bg-primary rounded-md py-1 px-2">
                      <span className="text-white text-14">{feedback.rating} ★</span>
                    </div>
                    {/* Right column with the name, date, and review content */}
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">{feedback.customerName}</h3>
                      <p className="text-sm text-gray-400">{feedback.date}</p>
                      <p className="text-gray-800 mt-1">{feedback.comment}</p>
                    </div>
                  </div>
                ))}
              </div>
              {visibleCount < feedbacks.length && (
                <div className="flex items-center justify-center">
                  <button
                    className="mt-4 px-4 py-2 bg-[#FFD2D2]  text-red-600 font-semibold rounded-3xl "
                    onClick={handleShowMore}
                  >
                   View More Reviews 
                  </button>
                </div>  
              )}
            </div>  
            </div>

   <section className="flex justify-center items-center py-8 md:py-16 px-4 md:px-6 w-full">
            <div className="w-full  mx-auto bg-primary p-4 md:p-5 rounded-xl md:rounded-2xl">
                <div className="w-full max-w-2xl mx-auto bg-primary p-4  text-white text-center space-y-4">
                <div className="flex flex-col xl:flex-row items-center text-center justify-center">   
                <h2 className="text-xl md:text-2xl font-bold font-[Platype] lg:text-[40px] xl:text-[40px]">Subscribe to Our</h2>
                <span className="text-xl md:text-2xl font-bold font-[Platype] xl:ml-2 lg:text-[40px] xl:text-[40px]"> Newsletter</span>
                </div> 
                
                <form className="flex flex-col md:flex-row items-center gap-3 md:gap-4">
                    {/* Email Input */}
                    <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full md:flex-1 px-4 py-2 text-gray-900 rounded-md outline-none"
                    />
                    {/* Subscribe Button */}
                    <button
                    type="submit"
                    className="bg-black text-white font-bold py-2 px-6 rounded-md  hover:bg-white hover:text-red-500"
       >
                    Subscribe
                    </button>
                </form>
                {/* Description */}
                <p className="text-sm mt-4 ">
                    Subscribe to our newsletter to receive early discount offers, updates, and new product info.
                </p>
                </div>  
            </div>
        </section>


    </div>
   </>
  );
}