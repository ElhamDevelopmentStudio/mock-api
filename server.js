const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors());

const mockDoctors = [
  {
    id: "1",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    name: "Ahmad Ahadi",
    specialty: "Cardiologist",
    description:
      "Experienced cardiologist with over 15 years of practice. Specializes in preventive cardiology and heart disease management.",
    badges: [{ label: "Heart Disease" }, { label: "Tension" }],
    availability: [
      { day: "monday", hours: ["09:00 AM - 11:00 AM", "02:00 PM - 04:00 PM"] },
      { day: "Wednesday", hours: ["10:00 AM - 12:00 PM"] },
      { day: "Friday", hours: ["01:00 PM - 03:00 PM"] },
    ],
    price: 200,
    bio: "Dr. Ahmad Ahadi is a leading cardiologist known for his expertise in managing complex cardiac conditions.",
    qualifications: ["MD, Cardiology", "Fellowship in Preventive Cardiology"],
    phoneNumber: "123-456-7890",
    location: "Kabul, Afghanistan",
    email: "ahmad.ahadi@hospital.com",
  },
  {
    id: "2",
    image:
      "https://images.unsplash.com/photo-1605684954998-685c79d6a018?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "John Doe",
    specialty: "Dermatologist",
    description:
      "Board-certified dermatologist with a focus on skin cancer prevention and cosmetic dermatology.",
    badges: [{ label: "Skin Care" }, { label: "Cosmetics" }],
    availability: [
      { day: "Tuesday", hours: ["09:00 AM - 12:00 PM"] },
      { day: "Thursday", hours: ["01:00 PM - 04:00 PM"] },
    ],
    price: 150,
    bio: "Dr. John Doe is a well-respected dermatologist with a passion for improving skin health.",
    qualifications: ["MD, Dermatology", "Board Certification in Dermatology"],
    phoneNumber: "987-654-3210",
    location: "New York, USA",
    email: "john.doe@skincare.com",
  },
  {
    id: "3",
    image:
      "https://plus.unsplash.com/premium_photo-1664475450083-5c9eef17a191?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Eliza Beth",
    specialty: "Pediatrician",
    description:
      "Pediatric specialist with a passion for child health and development.",
    badges: [{ label: "Child Health" }, { label: "Vaccinations" }],
    availability: [
      { day: "Monday", hours: ["08:00 AM - 10:00 AM"] },
      { day: "Friday", hours: ["10:00 AM - 12:00 PM"] },
    ],
    price: 180,
    bio: "Dr. Eliza Beth is dedicated to ensuring the healthy growth and development of children.",
    qualifications: ["MD, Pediatrics", "Certification in Child Health"],
    phoneNumber: "456-789-0123",
    location: "Los Angeles, USA",
    email: "eliza.beth@pediatrics.com",
  },
  {
    id: "4",
    image:
      "https://images.unsplash.com/photo-1609188076864-c35269136b09?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Michael Brown",
    specialty: "Orthopedic Surgeon",
    description:
      "Expert in joint replacement and sports injuries with over 20 years of experience.",
    badges: [{ label: "Bone Health" }, { label: "Sports Injuries" }],
    availability: [
      { day: "Tuesday", hours: ["11:00 AM - 01:00 PM"] },
      { day: "Wednesday", hours: ["02:00 PM - 05:00 PM"] },
    ],
    price: 300,
    bio: "Dr. Michael Brown is renowned for his expertise in orthopedic surgeries and sports medicine.",
    qualifications: ["MD, Orthopedic Surgery", "Fellowship in Sports Medicine"],
    phoneNumber: "321-654-9870",
    location: "Chicago, USA",
    email: "michael.brown@orthopedics.com",
  },
  {
    id: "5",
    image:
      "https://plus.unsplash.com/premium_photo-1681996484614-6afde0d53071?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Sarah Lee",
    specialty: "Endocrinologist",
    description: "Specializes in hormonal disorders and diabetes management.",
    badges: [{ label: "Diabetes" }, { label: "Thyroid" }],
    availability: [
      { day: "Monday", hours: ["09:00 AM - 11:00 AM"] },
      { day: "Thursday", hours: ["01:00 PM - 03:00 PM"] },
    ],
    price: 250,
    bio: "Dr. Sarah Lee is an expert in managing complex hormonal and metabolic disorders.",
    qualifications: [
      "MD, Endocrinology",
      "Board Certification in Endocrinology",
    ],
    phoneNumber: "789-012-3456",
    location: "Houston, USA",
    email: "sarah.lee@endocrinology.com",
  },
  {
    id: "6",
    image:
      "https://plus.unsplash.com/premium_photo-1663013237839-260886d5a4a7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Robert Wilson",
    specialty: "Neurologist",
    description:
      "Neurology expert focusing on neurological disorders and treatments.",
    badges: [{ label: "Neurology" }, { label: "Epilepsy" }],
    availability: [
      { day: "Tuesday", hours: ["08:00 AM - 10:00 AM"] },
      { day: "Friday", hours: ["02:00 PM - 04:00 PM"] },
    ],
    price: 320,
    bio: "Dr. Robert Wilson is a leading neurologist with a focus on epilepsy and other neurological conditions.",
    qualifications: ["MD, Neurology", "Fellowship in Neurological Disorders"],
    phoneNumber: "654-321-0987",
    location: "Boston, USA",
    email: "robert.wilson@neurology.com",
  },
  {
    id: "7",
    image:
      "https://plus.unsplash.com/premium_photo-1661551577028-80cfb8e4d236?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Lisa White",
    specialty: "Gynecologist",
    description:
      "Provides comprehensive care in women's health, including prenatal and postnatal care.",
    badges: [{ label: "Women's Health" }, { label: "Prenatal Care" }],
    availability: [
      { day: "Wednesday", hours: ["09:00 AM - 11:00 AM"] },
      { day: "Friday", hours: ["01:00 PM - 03:00 PM"] },
    ],
    price: 280,
    bio: "Dr. Lisa White is known for her compassionate care in women's health and her expertise in prenatal and postnatal care.",
    qualifications: ["MD, Gynecology", "Certification in Women's Health"],
    phoneNumber: "432-109-8765",
    location: "San Francisco, USA",
    email: "lisa.white@gynecology.com",
  },
  {
    id: "8",
    image:
      "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Mark Taylor",
    specialty: "Psychiatrist",
    description:
      "Expert in mental health, specializing in anxiety, depression, and trauma.",
    badges: [{ label: "Mental Health" }, { label: "Anxiety" }],
    availability: [
      { day: "Monday", hours: ["10:00 AM - 12:00 PM"] },
      { day: "Thursday", hours: ["02:00 PM - 04:00 PM"] },
    ],
    price: 220,
    bio: "Dr. Mark Taylor is a dedicated psychiatrist helping patients navigate their mental health challenges.",
    qualifications: ["MD, Psychiatry", "Board Certification in Psychiatry"],
    phoneNumber: "210-987-6543",
    location: "Miami, USA",
    email: "mark.taylor@psychiatry.com",
  },
  {
    id: "9",
    image:
      "https://plus.unsplash.com/premium_photo-1681995291320-d0e369cc373d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Nina Patel",
    specialty: "Ophthalmologist",
    description:
      "Eye care specialist with a focus on vision correction and ocular health.",
    badges: [{ label: "Vision Correction" }, { label: "Ocular Health" }],
    availability: [
      { day: "Tuesday", hours: ["10:00 AM - 12:00 PM"] },
      { day: "Friday", hours: ["01:00 PM - 03:00 PM"] },
    ],
    price: 200,
    bio: "Dr. Nina Patel is a renowned ophthalmologist specializing in vision correction and eye health.",
    qualifications: [
      "MD, Ophthalmology",
      "Board Certification in Ophthalmology",
    ],
    phoneNumber: "109-876-5432",
    location: "Seattle, USA",
    email: "nina.patel@ophthalmology.com",
  },
  {
    id: "10",
    image:
      "https://plus.unsplash.com/premium_photo-1661775566553-f18e9b45b6b1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Emily Davis",
    specialty: "Dentist",
    description:
      "Highly skilled dentist offering comprehensive dental care, including cosmetic and restorative dentistry.",
    badges: [
      { label: "Cosmetic Dentistry" },
      { label: "Restorative Dentistry" },
    ],
    availability: [
      { day: "Monday", hours: ["09:00 AM - 11:00 AM"] },
      { day: "Thursday", hours: ["01:00 PM - 03:00 PM"] },
    ],
    price: 180,
    bio: "Dr. Emily Davis is known for her meticulous approach to dental care and her commitment to patient satisfaction.",
    qualifications: ["DDS, Dentistry", "Certification in Cosmetic Dentistry"],
    phoneNumber: "098-765-4321",
    location: "Austin, USA",
    email: "emily.davis@dentistry.com",
  },
];




app.get('/doctors', (req, res) => {
  res.json(mockDoctors);
});

app.get('/doctor/:id', (req, res) => {
  const doctorId = req.params.id;
  const doctor = mockDoctors.find(doc => doc.id === doctorId);
  
  if (doctor) {
    res.json(doctor);
  } else {
    res.status(404).json({ message: 'Doctor not found' });
  }
});


app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});