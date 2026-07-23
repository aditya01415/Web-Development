const sampleListings = [
    {
        title: "Beautiful Beach House",
        price: 250,
        description: "A stunning beach house with breathtaking ocean views. Perfect for a relaxing getaway.",
        location: "Malibu, California",
        image: "https://images.unsplash.com/photo-1511840831832-3efd661c1d0f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QmVhdXRpZnVsJTIwQmVhY2glMjBIb3VzZXxlbnwwfHwwfHx8MA%3D%3D",
        country: "USA"
    },
    {
        title: "Cozy Mountain Cabin",
        price: 150,
        description: "A charming cabin nestled in the mountains. Ideal for a peaceful retreat surrounded by nature.",
        location: "Aspen, Colorado",
        image: "https://media.istockphoto.com/id/1433614538/photo/emerald-lake-lodge-british-columbia-canada.webp?a=1&b=1&s=612x612&w=0&k=20&c=E_07N-Ersl-IUfqhx8hyFqgHS4XNczau4PSQyo7fOCM=",
        country: "USA"
    },
    {
        title: "Modern City Apartment",
        price: 200,
        description: "A sleek and modern apartment located in the heart of the city. Great for exploring urban attractions.",
        location: "New York City, New York",
        image: "https://plus.unsplash.com/premium_photo-1725408023984-f535e86aa58f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TW9kZXJuJTIwQ2l0eSUyMEFwYXJ0bWVudHxlbnwwfHwwfHx8MA%3D%3D",
        country: "USA"
    },
    {
        title: "Rustic Countryside Cottage",
        price: 180,
        description: "A charming cottage in the countryside, perfect for a quiet and relaxing escape from the city.",
        location: "Cotswolds, England",
        image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8UnVzdGljJTIwQ291bnRyeXNpZGUlMjBDb3R0YWdlfGVufDB8fDB8fHww",
        country: "UK"
    },
    {
        title: "Tropical Island Villa",
        price: 300,
        description: "A luxurious villa on a tropical island, offering stunning views and direct access to pristine beaches.",
        location: "Bali, Indonesia",
        image: "https://images.unsplash.com/photo-1688653802629-5360086bf632?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VHJvcGljYWwlMjBJc2xhbmQlMjBWaWxsYXxlbnwwfHwwfHx8MA%3D%3D",
        country: "Indonesia"
    },
    {
        title: "Charming European Apartment",
        price: 220,
        description: "A cozy apartment in a historic European city, perfect for exploring cultural landmarks and local cuisine.",
        location: "Paris, France",
        image: "https://images.unsplash.com/photo-1775485192799-4a198087d368?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fENoYXJtaW5nJTIwRXVyb3BlYW4lMjBBcGFydG1lbnR8ZW58MHx8MHx8fDA%3D",
        country: "France"
    },
    {
        title: "Secluded Forest Retreat",
        price: 190,
        description: "A peaceful retreat in the heart of a forest, ideal for nature lovers seeking solitude and tranquility.",
        location: "Black Forest, Germany",
        image: "https://images.unsplash.com/photo-1780334688090-b8ace644d35c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U2VjbHVkZWQlMjBGb3Jlc3QlMjBSZXRyZWF0fGVufDB8fDB8fHww",
        country: "Germany"
    },
    {
        title: "Luxury Desert Oasis",
        price: 350,
        description: "An opulent oasis in the desert, offering a unique blend of luxury and natural beauty.",
        location: "Dubai, UAE",
        image: "https://images.unsplash.com/photo-1749704647688-a5ee71ac578c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEx1eHVyeSUyMERlc2VydCUyME9hc2lzfGVufDB8fDB8fHww",
        country: "UAE"
    },
    {
        title: "Chic Urban Loft",
        price: 210,
        description: "A stylish loft in a bustling urban area, perfect for those who enjoy city life and modern amenities.",
        location: "Berlin, Germany",
        image: "https://plus.unsplash.com/premium_photo-1661964071594-0d5ea642833b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2hpYyUyMFVyYmFuJTIwTG9mdHxlbnwwfHwwfHx8MA%3D%3D",
        country: "Germany"
    },
    {
        title: "Serene Lakeside Cabin",
        price: 170,
        description: "A tranquil cabin by the lake, offering breathtaking views and a peaceful atmosphere for relaxation.",
        location: "Lake District, England",
        image: "https://images.unsplash.com/photo-1639405791326-b1168dd7ad71?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2VyZW5lJTIwTGFrZXNpZGUlMjBDYWJpbnxlbnwwfHwwfHx8MA%3D%3D",
        country: "UK"
    },
    {
        title: "Historic Castle Stay",
        price: 400,
        description: "Experience the grandeur of a historic castle, complete with luxurious accommodations and rich history.",
        location: "Edinburgh, Scotland",
        image: "https://images.unsplash.com/photo-1562937778-deb2b7bf3eb2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SGlzdG9yaWMlMjBDYXN0bGUlMjBTdGF5fGVufDB8fDB8fHww",
        country: "Scotland"
    },
    {
        title: "Charming Vineyard Villa",
        price: 280,
        description: "A beautiful villa surrounded by vineyards, perfect for wine enthusiasts and those seeking a romantic getaway.",
        location: "Tuscany, Italy",
        image: "https://images.unsplash.com/photo-1779777847994-5ea7eec692b6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Q2hhcm1pbmclMjBWaW5leWFyZCUyMFZpbGxhfGVufDB8fDB8fHww",
        country: "Italy"
    }  
];

module.exports = {data: {sampleListings}};