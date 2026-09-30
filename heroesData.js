const heroesData = [
    {
        id: 1,
        name: "Rudy",
        element: "Light",
        role: "Defense",
        stars: 6,
        image: "https://via.placeholder.com/300x300/0044ff/ffffff?text=Rudy",
        description: "อัศวินแห่งแสง ผู้ปกป้องความถูกต้อง มีพลังป้องกันสูงและสกิลกางโล่ให้ทีม",
        skills: [
            { name: "Shield of Light", type: "Active 1", desc: "กางโล่ลดความเสียหายที่ได้รับ 60% เป็นเวลา 2 ตา" },
            { name: "Rush", type: "Active 2", desc: "พุ่งชนสร้างความเสียหายกายภาพ และทำให้ศัตรูลอยขึ้น" },
            { name: "Defense Aura", type: "Passive", desc: "เพิ่มพลังป้องกันให้กับเพื่อนร่วมทีมทุกคน 50%" }
        ]
    },
    {
        id: 2,
        name: "Eileen",
        element: "Fire",
        role: "Attack",
        stars: 6,
        image: "https://via.placeholder.com/300x300/cc0000/ffffff?text=Eileen",
        description: "ราชินีแห่งฟ้าร้อง มีออร่าช่วยเพิ่มพลังโจมตีกายภาพให้กับเพื่อนร่วมทีมทุกคน",
        skills: [
            { name: "Thunder Spear", type: "Active 1", desc: "สร้างความเสียหายกายภาพแก่เป้าหมาย และมีโอกาสทำให้ติดสถานะช็อต" },
            { name: "Lightning Bolt", type: "Active 2", desc: "ผ่าอัสนีใส่ศัตรูทั้งหมด สร้างความเสียหายกายภาพ" },
            { name: "Fierce Command", type: "Passive", desc: "เพิ่มพลังโจมตีกายภาพให้ทีม 60% และฟื้นคืนชีพ 1 ครั้งเมื่อตาย" }
        ]
    },
    {
        id: 3,
        name: "Ace",
        element: "Dark",
        role: "Universal",
        stars: 6,
        image: "https://via.placeholder.com/300x300/660099/ffffff?text=Ace",
        description: "จักรพรรดิแห่งตะวันออก มีสกิลลดพลังป้องกันของศัตรูและตัดการฟื้นฟูเลือด",
        skills: [
            { name: "Blossom Slash", type: "Active 1", desc: "ฟันสร้างความเสียหายและลดการฟื้นฟู HP ของเป้าหมาย" },
            { name: "Lunar Slash", type: "Active 2", desc: "สร้างความเสียหายรุนแรง และลบ บัฟ ทั้งหมดของเป้าหมาย" },
            { name: "Supreme Monarch", type: "Passive", desc: "ลดพลังป้องกันของศัตรูทั้งหมด 50%" }
        ]
    }
];