const heroesData = [
    {
        id: 1,
        name: "Rudy",
        element: "Light",
        role: "Defense",
        stars: 6,
        image: "https://via.placeholder.com/150/0000FF/808080?text=Rudy",
        description: "อัศวินแห่งแสง ผู้ปกป้องความถูกต้อง มีพลังป้องกันสูงและสกิลกางโล่ให้ทีม",
        skills: [
            { name: "Shield of Light", type: "Active", desc: "กางโล่ลดความเสียหายที่ได้รับ 60% เป็นเวลา 2 ตา" },
            { name: "Rush", type: "Active", desc: "พุ่งชนสร้างความเสียหายและทำให้ศัตรูลอยขึ้น" }
        ]
    },
    {
        id: 2,
        name: "Eileen",
        element: "Fire",
        role: "Attack",
        stars: 6,
        image: "https://via.placeholder.com/150/FF0000/FFFFFF?text=Eileen",
        description: "ราชินีแห่งฟ้าร้อง มีออร่าช่วยเพิ่มพลังโจมตีกายภาพให้กับเพื่อนร่วมทีมทุกคน",
        skills: [
            { name: "Thunder Spear", type: "Active", desc: "สร้างความเสียหายกายภาพและมีโอกาสทำให้ติดสถานะช็อต" },
            { name: "Fierce Command", type: "Passive", desc: "เพิ่มพลังโจมตีกายภาพให้ทีม 60%" }
        ]
    },
    {
        id: 3,
        name: "Ace",
        element: "Dark",
        role: "Universal",
        stars: 6,
        image: "https://via.placeholder.com/150/800080/FFFFFF?text=Ace",
        description: "จักรพรรดิแห่งตะวันออก มีสกิลลดพลังป้องกันของศัตรูและตัดการฮีล",
        skills: [
            { name: "Blossom Slash", type: "Active", desc: "ฟันสร้างความเสียหายและลดการฟื้นฟู HP ของเป้าหมาย" },
            { name: "Supreme Monarch", type: "Passive", desc: "ลดพลังป้องกันของศัตรูทั้งหมด 50%" }
        ]
    }
];