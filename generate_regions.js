const fs = require('fs');

const regions = [
    {
        id: 1,
        name: "Trung du và Miền núi phía Bắc",
        natural: [
            "Địa hình: Đồi núi hiểm trở, nhiều dãy núi cao và đồ sộ nhất Việt Nam (tiêu biểu là dãy Hoàng Liên Sơn).",
            "Khí hậu: Nhiệt đới gió mùa có một mùa đông lạnh giá, một số vùng núi cao như Sapa, Mẫu Sơn có thể có băng tuyết.",
            "Cảnh quan: Sở hữu những thửa ruộng bậc thang kỳ vĩ, những cung đường đèo dốc uốn lượn (Tứ đại đỉnh đèo), và các thác nước lớn (Thác Bản Giốc)."
        ],
        cultural: [
            "Dân tộc: Là nơi sinh sống của hơn 30 dân tộc thiểu số (H'Mông, Dao, Tày, Thái, Mường...) với phong tục, trang phục và tập quán vô cùng đa dạng.",
            "Lịch sử - Cách mạng: Vùng đất chứa đựng nhiều di tích lịch sử cách mạng hào hùng của dân tộc (Chiến trường Điện Biên Phủ, ATK Tân Trào).",
            "Kiến trúc - Văn hóa: Nổi bật với các bản làng truyền thống, kiến trúc nhà sàn, nhà trình tường và các phiên chợ vùng cao rực rỡ sắc màu."
        ],
        examples: [
            "Thị xã Sapa (Lào Cai) - 'Thành phố trong sương' với đỉnh Fansipan.",
            "Mù Cang Chải (Yên Bái) - Nổi tiếng với danh thắng ruộng bậc thang mùa lúa chín.",
            "Cao nguyên đá Đồng Văn (Hà Giang) - Cực Bắc Tổ quốc với cột cờ Lũng Cú.",
            "Thác Bản Giốc (Cao Bằng) - Thác nước tự nhiên lớn nhất khu vực Đông Nam Á."
        ],
        types: [
            "Du lịch sinh thái và khám phá cảnh quan thiên nhiên.",
            "Du lịch cộng đồng (Homestay), trải nghiệm cuộc sống người dân bản địa.",
            "Du lịch mạo hiểm (Trekking, leo núi Fansipan, săn mây).",
            "Du lịch lịch sử về nguồn."
        ],
        unesco: [
            "Công viên địa chất toàn cầu UNESCO: Cao nguyên đá Đồng Văn (Hà Giang), Công viên địa chất Non Nước Cao Bằng.",
            "Di sản văn hóa phi vật thể: Hát Xoan (Phú Thọ), Tín ngưỡng thờ cúng Hùng Vương (Phú Thọ).",
            "Thực hành Then của người Tày, Nùng, Thái."
        ],
        specialties: [
            "Ẩm thực đặc trưng: Thắng cố, lợn cắp nách, gà đồi nướng, cá suối.",
            "Món ăn truyền thống: Xôi ngũ sắc, cơm lam, thịt trâu gác bếp, lạp xưởng hun khói.",
            "Đặc sản mang về: Chè Tân Cương (Thái Nguyên), mận Mộc Châu, táo mèo, rượu ngô."
        ],
        festivals: [
            "Lễ hội Đền Hùng (Phú Thọ) - Giỗ Tổ Hùng Vương mùng 10 tháng 3 Âm lịch.",
            "Chợ tình: Chợ tình Khau Vai (Hà Giang), Chợ tình Mộc Châu (Sơn La) - Nơi giao lưu tình cảm độc đáo.",
            "Lễ hội Lồng Tồng (Lễ hội xuống đồng) của đồng bào dân tộc Tày."
        ]
    },
    {
        id: 2,
        name: "Đồng bằng sông Hồng & Duyên hải Đông Bắc",
        natural: [
            "Địa hình: Bao gồm vùng đồng bằng châu thổ phù sa màu mỡ và dải duyên hải Đông Bắc với hàng ngàn hòn đảo.",
            "Hệ sinh thái: Đa dạng với các khu dự trữ sinh quyển ngập mặn (Xuân Thủy), vườn quốc gia (Cúc Phương, Ba Vì, Cát Bà).",
            "Cảnh quan biển đảo: Sở hữu vịnh biển với hàng ngàn đảo đá vôi karst xen kẽ, các bãi tắm và hệ thống hang động trên vịnh."
        ],
        cultural: [
            "Văn minh lúa nước: Là cái nôi hình thành và phát triển của nền văn minh lúa nước sông Hồng và văn hóa Việt cổ.",
            "Di tích lịch sử: Mật độ di tích dày đặc nhất cả nước với các cố đô, đền, chùa, miếu mạo cổ kính hàng ngàn năm tuổi.",
            "Nghệ thuật dân gian: Nơi lưu giữ nghệ thuật hát chèo, ca trù, múa rối nước, dân ca quan họ và hệ thống các làng nghề truyền thống (Bát Tràng, Vạn Phúc)."
        ],
        examples: [
            "Vịnh Hạ Long & Vịnh Lan Hạ (Quảng Ninh, Hải Phòng).",
            "Quần thể danh thắng Tràng An - Bái Đính - Tam Cốc (Ninh Bình).",
            "Thủ đô Hà Nội (Văn Miếu - Quốc Tử Giám, Phố Cổ, Lăng Bác, Hồ Gươm).",
            "Đảo Cát Bà, Khu du lịch Tam Đảo (Vĩnh Phúc)."
        ],
        types: [
            "Du lịch văn hóa - lịch sử, hành hương tâm linh.",
            "Du lịch lễ hội đầu xuân.",
            "Du lịch biển đảo, nghỉ dưỡng trên vịnh (Cruise tourism).",
            "Du lịch sinh thái, miệt vườn làng quê Bắc Bộ."
        ],
        unesco: [
            "Di sản Thiên nhiên Thế giới: Vịnh Hạ Long, Vườn Quốc gia Cát Bà.",
            "Di sản Hỗn hợp Thế giới: Quần thể danh thắng Tràng An (Ninh Bình).",
            "Di sản Văn hóa Thế giới: Khu di tích trung tâm Hoàng thành Thăng Long.",
            "Di sản Phi vật thể: Dân ca Quan họ Bắc Ninh, Ca trù, Hội Gióng."
        ],
        specialties: [
            "Hà Nội: Phở bò, bún chả, chả cá Lã Vọng, cốm làng Vòng, cà phê trứng.",
            "Vùng biển: Chả mực Hạ Long, sá sùng, bún hải sản.",
            "Các tỉnh: Thịt dê cơm cháy (Ninh Bình), bánh cáy (Thái Bình), bánh đậu xanh (Thái Bình/Hải Dương)."
        ],
        festivals: [
            "Lễ hội Chùa Hương (Hà Nội) - Kéo dài nhất vào dịp đầu xuân.",
            "Lễ hội Đền Trần (Nam Định) - Lễ khai ấn xin lộc đầu năm.",
            "Lễ hội Lim (Bắc Ninh) - Không gian giao lưu văn hóa Quan họ.",
            "Lễ hội Yên Tử (Quảng Ninh) - Hành hương về miền đất Phật."
        ]
    },
    {
        id: 3,
        name: "Bắc Trung Bộ",
        natural: [
            "Địa hình: Hẹp ngang, dốc, với sự hiện diện của núi rừng Trường Sơn ở phía Tây và đồng bằng nhỏ hẹp ven biển phía Đông.",
            "Hệ thống hang động: Nổi tiếng với hệ thống hang động đá vôi ngầm hùng vĩ và lớn nhất thế giới.",
            "Biển và Đèo: Nhiều bãi biển đẹp, trải dài, cát trắng mịn. Các đèo hiểm trở cắt ngang dãy Trường Sơn đâm ra biển (Đèo Ngang, Đèo Hải Vân)."
        ],
        cultural: [
            "Di sản cung đình: Trung tâm của hệ thống di sản kiến trúc cố đô, lăng tẩm hoàng gia triều Nguyễn.",
            "Văn hóa phi vật thể: Nghệ thuật nhã nhạc cung đình sang trọng và dân ca Ví, Giặm mộc mạc, đậm chất tình người.",
            "Lịch sử chiến tranh: Nhiều di tích gắn liền với cuộc chiến tranh giải phóng dân tộc (Thành cổ Quảng Trị, Vĩ tuyến 17)."
        ],
        examples: [
            "Vườn Quốc gia Phong Nha - Kẻ Bàng (Quảng Bình) - Với hang Sơn Đoòng, động Thiên Đường.",
            "Cố đô Huế (Thừa Thiên Huế) - Quần thể di tích Đại Nội, Lăng tẩm vua Nguyễn.",
            "Biển Sầm Sơn (Thanh Hóa), Cửa Lò (Nghệ An), Thiên Cầm (Hà Tĩnh).",
            "Thành nhà Hồ (Thanh Hóa)."
        ],
        types: [
            "Du lịch thám hiểm hang động, thể thao mạo hiểm.",
            "Du lịch tham quan nghiên cứu di sản văn hóa, lịch sử.",
            "Du lịch nghỉ dưỡng biển mùa hè.",
            "Du lịch hoài niệm chiến trường xưa (DMZ tour)."
        ],
        unesco: [
            "Di sản Văn hóa Thế giới: Quần thể di tích Cố đô Huế, Thành nhà Hồ (Thanh Hóa).",
            "Di sản Thiên nhiên Thế giới: Vườn quốc gia Phong Nha - Kẻ Bàng.",
            "Di sản Phi vật thể: Nhã nhạc cung đình Huế, Dân ca Ví, Giặm Nghệ Tĩnh."
        ],
        specialties: [
            "Xứ Huế: Bún bò Huế, bánh nậm, bánh lọc, bánh bèo, chè cung đình, tré.",
            "Xứ Nghệ: Súp lươn, miến lươn, tương Nam Đàn, bánh đa đô lương.",
            "Đặc sản khác: Kẹo cu đơ (Hà Tĩnh), Nem chua (Thanh Hóa), Mực nhảy."
        ],
        festivals: [
            "Festival Huế (tổ chức định kỳ 2 năm 1 lần) - Sự kiện văn hóa quy mô quốc gia và quốc tế.",
            "Lễ hội Đền Cuông, Lễ hội Làng Sen (Nghệ An).",
            "Lễ hội Cầu Ngư của ngư dân các tỉnh ven biển."
        ]
    },
    {
        id: 4,
        name: "Duyên hải Nam Trung Bộ",
        natural: [
            "Bờ biển đẹp nhất cả nước: Các vịnh biển kín gió, bãi cát dài trắng mịn, nước biển trong xanh (Vịnh Nha Trang, Vịnh Cam Ranh, Lăng Cô).",
            "Hệ sinh thái biển: Nhiều rạn san hô rực rỡ và các cụm đảo ven bờ hoang sơ, đẹp mắt.",
            "Khí hậu: Khí hậu nhiệt đới nắng ấm quanh năm, ít chịu ảnh hưởng của bão hơn so với miền Bắc, rất phù hợp cho du lịch biển."
        ],
        cultural: [
            "Văn hóa Chăm Pa: Lưu giữ hệ thống đền tháp Chăm Pa cổ đại tinh xảo và các nét văn hóa đặc sắc của người Chăm.",
            "Cảng thị cổ: Những thương cảng cổ kính từng là nơi giao thương quốc tế sầm uất (Hội An).",
            "Văn hóa biển đảo: Cuộc sống, lễ hội và tín ngưỡng gắn liền chặt chẽ với ngư nghiệp và biển cả."
        ],
        examples: [
            "Thành phố biển Nha Trang (Khánh Hòa) - Hòn ngọc của biển Đông.",
            "Đà Nẵng - Thành phố đáng sống (Bán đảo Sơn Trà, Bà Nà Hills, Ngũ Hành Sơn).",
            "Phố cổ Hội An & Thánh địa Mỹ Sơn (Quảng Nam).",
            "Mũi Né (Bình Thuận) - Thủ phủ resort, đồi cát bay.",
            "Kỳ Co - Eo Gió (Quy Nhơn, Bình Định)."
        ],
        types: [
            "Nghỉ dưỡng biển cao cấp (Resort đa dạng).",
            "Thể thao dưới nước (lặn ngắm san hô, lướt ván diều, dù lượn).",
            "Du lịch văn hóa - lịch sử (Tháp Chăm, Phố cổ).",
            "Du lịch MICE và sự kiện quốc tế."
        ],
        unesco: [
            "Di sản Văn hóa Thế giới: Phố cổ Hội An, Đền tháp Mỹ Sơn.",
            "Di sản Phi vật thể: Nghệ thuật Bài chòi Trung Bộ.",
            "Khu dự trữ sinh quyển thế giới: Cù Lao Chàm (Quảng Nam)."
        ],
        specialties: [
            "Món sợi truyền thống: Mì Quảng, Cao lầu Hội An.",
            "Món biển: Hải sản tươi sống, bún chả cá Quy Nhơn/Nha Trang, bánh canh chả cá.",
            "Ăn vặt & Đặc sản khác: Nem nướng Nha Trang, bánh tráng cuốn thịt heo, cơm gà."
        ],
        festivals: [
            "Lễ hội Katê của người Chăm - Lễ hội quan trọng nhất trong năm của đồng bào Chăm.",
            "Lễ hội Tháp Bà Ponagar (Nha Trang) - Ghi nhớ công ơn Mẹ Xứ Sở.",
            "Lễ hội Hoa đăng Hội An, Lễ hội pháo hoa quốc tế Đà Nẵng (DIFF)."
        ]
    },
    {
        id: 5,
        name: "Tây Nguyên",
        natural: [
            "Địa hình: Hệ thống cao nguyên đất đỏ bazan xếp tầng rộng lớn, đồi núi trập trùng.",
            "Cảnh quan: Rừng nguyên sinh đa dạng sinh học, hệ thống thác nước lớn hùng vĩ, các hồ núi lửa trong xanh (Biển Hồ).",
            "Khí hậu: Khí hậu cao nguyên mát mẻ quanh năm, đặc biệt ôn hòa tại Đà Lạt, Măng Đen."
        ],
        cultural: [
            "Văn hóa Cồng chiêng: Âm nhạc cồng chiêng gắn liền với đời sống tâm linh, sinh hoạt cộng đồng của các dân tộc bản địa.",
            "Kiến trúc truyền thống: Nhà rông vươn cao, nhà dài, nhà mồ với các bức tượng gỗ độc đáo.",
            "Đời sống bản địa: Chế độ mẫu hệ (người Ê-đê), sử thi Đam San, nếp sống gắn liền với rừng núi và nghề nông."
        ],
        examples: [
            "Thành phố Đà Lạt (Lâm Đồng) - Xứ sở sương mù, ngàn hoa.",
            "Thành phố Buôn Ma Thuột (Đắk Lắk) - Thủ phủ cà phê.",
            "Pleiku (Gia Lai) với Biển Hồ T'Nưng 'Đôi mắt Pleiku'.",
            "Khu du lịch sinh thái Măng Đen (Kon Tum)."
        ],
        types: [
            "Du lịch sinh thái, khám phá rừng núi, thác nước.",
            "Du lịch trải nghiệm văn hóa bản địa (Homestay, giao lưu cồng chiêng).",
            "Du lịch canh nông (Thăm đồi chè, đồn điền cà phê, vườn trái cây).",
            "Nghỉ dưỡng núi sương mù (Đà Lạt)."
        ],
        unesco: [
            "Di sản Phi vật thể của nhân loại: Không gian văn hóa Cồng chiêng Tây Nguyên.",
            "Khu dự trữ sinh quyển thế giới: Langbiang (Lâm Đồng), Kon Hà Nừng (Gia Lai)."
        ],
        specialties: [
            "Đồ nướng: Gà nướng bản Đôn, bò nướng ống tre, heo đồng nướng.",
            "Món truyền thống: Cơm lam, gỏi lá rừng, phở khô Gia Lai.",
            "Đồ uống: Cà phê Buôn Ma Thuột, rượu cần, rượu vang Đà Lạt."
        ],
        festivals: [
            "Lễ hội Cà phê Buôn Ma Thuột - Sự kiện lớn tôn vinh hạt cà phê.",
            "Lễ hội đua voi ở Bản Đôn.",
            "Lễ cúng bến nước, Lễ hội đâm trâu, Lễ mừng lúa mới."
        ]
    },
    {
        id: 6,
        name: "Đông Nam Bộ",
        natural: [
            "Hệ sinh thái phong phú: Sở hữu hệ sinh thái rừng rậm nhiệt đới, các khu bảo tồn tự nhiên rộng lớn và khu dự trữ sinh quyển rừng ngập mặn.",
            "Cảnh quan nước: Mạng lưới sông ngòi chằng chịt, suối khoáng nóng, và bờ biển đẹp thuận lợi khai thác du lịch.",
            "Khí hậu: Khí hậu cận xích đạo nóng ẩm quanh năm, chia 2 mùa mưa nắng rõ rệt."
        ],
        cultural: [
            "Văn hóa Đô thị: Sự giao thoa văn hóa năng động, đa dạng, nơi kết hợp hài hòa giữa nét hiện đại sầm uất và truyền thống lịch sử.",
            "Di tích Lịch sử: Tập trung các di tích lịch sử cách mạng hào hùng minh chứng cho 2 cuộc kháng chiến.",
            "Kiến trúc: Các công trình kiến trúc Pháp cổ (Bưu điện, Nhà thờ Đức Bà), các chợ truyền thống lâu đời."
        ],
        examples: [
            "TP. Hồ Chí Minh - Trung tâm kinh tế văn hóa lớn nhất (Chợ Bến Thành, Dinh Độc Lập, Phố đi bộ Nguyễn Huệ).",
            "Di tích lịch sử Địa đạo Củ Chi (TP. HCM).",
            "Thành phố biển Vũng Tàu, Quần đảo Côn Đảo.",
            "Vườn quốc gia Nam Cát Tiên, Hồ Trị An (Đồng Nai)."
        ],
        types: [
            "Du lịch MICE (Hội nghị, hội thảo, triển lãm).",
            "Vui chơi giải trí đô thị, mua sắm (Shopping tours).",
            "Du lịch tìm hiểu lịch sử - cách mạng (Chiến khu D, Củ Chi).",
            "Du lịch nghỉ dưỡng cuối tuần (Staycation, Vũng Tàu)."
        ],
        unesco: [
            "Khu dự trữ sinh quyển thế giới: Rừng ngập mặn Cần Giờ (TP. HCM).",
            "Khu dự trữ sinh quyển thế giới Đồng Nai (bao gồm VQG Nam Cát Tiên)."
        ],
        specialties: [
            "Món ăn dân dã: Bánh canh Trảng Bàng, bánh tráng phơi sương (Tây Ninh).",
            "Đồ ăn sáng/đường phố: Cơm tấm Sài Gòn, gỏi cuốn, bánh mì thịt, bánh xôi chiên phồng.",
            "Hải sản: Chợ hải sản Vũng Tàu, hàu Côn Đảo."
        ],
        festivals: [
            "Lễ hội Vía Bà Đen (Tây Ninh) - Thu hút hàng vạn khách hành hương dịp đầu xuân.",
            "Lễ hội Nghinh Ông (Vũng Tàu, Cần Giờ) - Tục thờ cá Ông của ngư dân.",
            "Lễ hội Trái cây Nam Bộ (Suối Tiên - TP.HCM)."
        ]
    },
    {
        id: 7,
        name: "Đồng bằng sông Cửu Long",
        natural: [
            "Địa hình sông nước: Mạng lưới sông ngòi, kênh rạch chằng chịt bồi đắp bởi dòng sông Mekong.",
            "Sinh thái đặc trưng: Miệt vườn cây ăn trái quanh năm trĩu quả, hệ sinh thái rừng ngập mặn nguyên sinh (rừng tràm, đước) và các sân chim lớn.",
            "Biển đảo: Cụm đảo phía Tây Nam rộng lớn và tuyệt đẹp với hệ sinh thái biển phong phú."
        ],
        cultural: [
            "Văn hóa Chợ nổi: Phương thức sinh hoạt và giao thương độc đáo hoàn toàn trên mặt nước.",
            "Nghệ thuật dân gian: Âm nhạc Đờn ca tài tử réo rắt, mộc mạc mang đậm tính cách người miền Tây.",
            "Văn hóa dân tộc: Sự hòa quyện văn hóa đặc sắc giữa người Kinh, Hoa, Khmer, Chăm, biểu hiện qua các ngôi chùa kiến trúc Khmer rực rỡ."
        ],
        examples: [
            "Chợ nổi Cái Răng (Cần Thơ) - Chợ nổi lớn nhất miền Tây.",
            "Rừng tràm Trà Sư (An Giang), Vườn quốc gia Tràm Chim (Đồng Tháp).",
            "Đất Mũi Cà Mau - Điểm cực Nam Tổ quốc.",
            "Đảo ngọc Phú Quốc (Kiên Giang), Xứ dừa Bến Tre."
        ],
        types: [
            "Du lịch sinh thái miệt vườn, tát mương bắt cá.",
            "Du lịch trên sông, khám phá văn hóa chợ nổi.",
            "Du lịch sinh thái vùng đất ngập nước, sân chim.",
            "Du lịch nghỉ dưỡng biển đảo cao cấp (Phú Quốc)."
        ],
        unesco: [
            "Di sản Văn hóa Phi vật thể đại diện của nhân loại: Nghệ thuật Đờn ca tài tử Nam Bộ.",
            "Khu dự trữ sinh quyển thế giới: Mũi Cà Mau, Kiên Giang."
        ],
        specialties: [
            "Các loại Lẩu: Lẩu mắm, lẩu cá linh bông điên điển, lẩu cá kèo.",
            "Món nướng/chiên: Cá lóc nướng trui, bánh xèo miền Tây, chuột đồng nướng.",
            "Món nước: Bún nước lèo Sóc Trăng, hủ tiếu Mỹ Tho, bún mắm."
        ],
        festivals: [
            "Lễ hội Vía Bà Chúa Xứ Núi Sam (An Giang) - Lễ hội tâm linh lớn nhất vùng.",
            "Lễ hội Ok Om Bok (Lễ cúng Trăng) và Đua ghe Ngo của người Khmer.",
            "Lễ hội Đua bò Bảy Núi (An Giang), Lễ hội Đôn Ta."
        ]
    }
];

const listToHtml = (arr) => {
    return "<ul style='margin-top: 5px; padding-left: 20px;'>" + arr.map(item => `<li>${item}</li>`).join("") + "</ul>";
};

const generateHTML = (region) => {
    return `<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vùng ${region.id}: ${region.name}</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Outfit:wght@600;700;800&display=swap" rel="stylesheet">
    <style>
        :root {
            --bg-color: #f8fafc;
            --card-bg: #ffffff;
            --text-main: #1e293b;
            --text-muted: #64748b;
            --primary: #4f46e5;
            --accent-1: #10b981; /* Green */
            --accent-2: #f59e0b; /* Yellow */
            --accent-3: #ec4899; /* Pink */
            --accent-4: #8b5cf6; /* Purple */
            --accent-5: #3b82f6; /* Blue */
            --accent-6: #ef4444; /* Red */
        }

        body {
            font-family: 'Inter', sans-serif;
            background-color: var(--bg-color);
            color: var(--text-main);
            margin: 0;
            padding: 0;
            line-height: 1.6;
        }

        .header {
            background: linear-gradient(135deg, #1e1b4b 0%, #312e81 100%);
            color: white;
            padding: 60px 20px;
            text-align: center;
            position: relative;
            overflow: hidden;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }

        .header::after {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background: url('data:image/svg+xml;utf8,<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" stroke="rgba(255,255,255,0.05)" stroke-width="2" fill="none"/></svg>') repeat;
            opacity: 0.5;
            z-index: 1;
        }

        .header-content {
            position: relative;
            z-index: 2;
            max-width: 800px;
            margin: 0 auto;
        }

        .header h1 {
            font-family: 'Outfit', sans-serif;
            font-size: 2.8rem;
            margin: 0 0 10px 0;
            font-weight: 800;
        }

        .header p {
            font-size: 1.2rem;
            color: #cbd5e1;
            margin: 0;
        }

        .nav-buttons {
            display: flex;
            justify-content: center;
            gap: 15px;
            margin-top: 30px;
        }

        .btn {
            display: inline-flex;
            align-items: center;
            padding: 10px 24px;
            border-radius: 9999px;
            text-decoration: none;
            font-weight: 600;
            font-size: 0.95rem;
            transition: all 0.3s ease;
        }

        .btn-outline {
            background: rgba(255, 255, 255, 0.1);
            color: white;
            border: 1px solid rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(4px);
        }

        .btn-outline:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: translateY(-2px);
        }

        .container {
            max-width: 900px;
            margin: -40px auto 40px auto;
            padding: 0 20px;
            position: relative;
            z-index: 10;
        }

        .grid-cards {
            display: grid;
            grid-template-columns: 1fr;
            gap: 20px;
        }

        .info-card {
            background: var(--card-bg);
            border-radius: 16px;
            padding: 24px;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.02);
            border-left: 6px solid;
            transition: transform 0.2s ease;
        }

        .info-card:hover {
            transform: translateX(5px);
        }

        .card-header {
            display: flex;
            align-items: center;
            margin-bottom: 12px;
        }

        .card-icon {
            font-size: 1.8rem;
            margin-right: 12px;
        }

        .card-title {
            font-family: 'Outfit', sans-serif;
            font-size: 1.3rem;
            font-weight: 700;
            margin: 0;
            color: var(--text-main);
        }

        .card-content {
            font-size: 1.05rem;
            color: #334155;
            margin: 0;
        }

        .c-natural { border-color: var(--accent-1); }
        .c-cultural { border-color: var(--accent-2); }
        .c-examples { border-color: var(--primary); }
        .c-types { border-color: var(--accent-4); }
        .c-unesco { border-color: var(--accent-5); }
        .c-specialties { border-color: var(--accent-6); }
        .c-festivals { border-color: var(--accent-3); }

        .c-natural .card-title { color: var(--accent-1); }
        .c-cultural .card-title { color: var(--accent-2); }
        .c-examples .card-title { color: var(--primary); }
        .c-types .card-title { color: var(--accent-4); }
        .c-unesco .card-title { color: var(--accent-5); }
        .c-specialties .card-title { color: var(--accent-6); }
        .c-festivals .card-title { color: var(--accent-3); }

        footer {
            text-align: center;
            padding: 30px;
            color: var(--text-muted);
            border-top: 1px solid #e2e8f0;
            margin-top: 40px;
        }
        
        .pagination {
            display: flex;
            justify-content: space-between;
            margin-top: 30px;
            padding: 0 10px;
        }
        
        .btn-page {
            padding: 12px 20px;
            background: white;
            color: var(--primary);
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
            transition: all 0.2s;
            border: 1px solid #e2e8f0;
        }
        
        .btn-page:hover {
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            background: #f8fafc;
            transform: translateY(-2px);
        }

        /* Styling cho list */
        ul {
            list-style-type: none; 
            padding-left: 0;
        }
        ul li {
            position: relative;
            padding-left: 24px;
            margin-bottom: 8px;
        }
        ul li::before {
            content: "•";
            color: var(--primary);
            font-weight: bold;
            display: inline-block; 
            width: 1em;
            margin-left: -1em;
            position: absolute;
            left: 0;
        }

        @media (max-width: 600px) {
            .header h1 { font-size: 2rem; }
            .header { padding: 40px 15px; }
            .nav-buttons { flex-direction: column; }
        }
    </style>
</head>
<body>
    <header class="header">
        <div class="header-content">
            <h1>${region.name}</h1>
            <p>Khám phá tài nguyên du lịch vùng</p>
            <div class="nav-buttons">
                <a href="tourism_resources.html" class="btn btn-outline">&#11013; Trở về Menu Các Vùng</a>
                <a href="index.html" class="btn btn-outline">🏠 Trang chủ</a>
            </div>
        </div>
    </header>

    <div class="container">
        <div class="grid-cards">
            <!-- Tự nhiên -->
            <div class="info-card c-natural">
                <div class="card-header">
                    <span class="card-icon">🌿</span>
                    <h2 class="card-title">Tài Nguyên Tự Nhiên</h2>
                </div>
                <div class="card-content">${listToHtml(region.natural)}</div>
            </div>

            <!-- Nhân văn -->
            <div class="info-card c-cultural">
                <div class="card-header">
                    <span class="card-icon">🏛️</span>
                    <h2 class="card-title">Tài Nguyên Nhân Văn</h2>
                </div>
                <div class="card-content">${listToHtml(region.cultural)}</div>
            </div>

            <!-- Ví dụ -->
            <div class="info-card c-examples">
                <div class="card-header">
                    <span class="card-icon">📍</span>
                    <h2 class="card-title">Ví Dụ Nổi Bật</h2>
                </div>
                <div class="card-content">${listToHtml(region.examples)}</div>
            </div>

            <!-- Loại hình du lịch -->
            <div class="info-card c-types">
                <div class="card-header">
                    <span class="card-icon">🏕️</span>
                    <h2 class="card-title">Loại Hình Du Lịch Chính</h2>
                </div>
                <div class="card-content">${listToHtml(region.types)}</div>
            </div>

            <!-- UNESCO -->
            <div class="info-card c-unesco">
                <div class="card-header">
                    <span class="card-icon">👑</span>
                    <h2 class="card-title">Di Sản UNESCO</h2>
                </div>
                <div class="card-content">${region.unesco ? listToHtml(region.unesco) : "<ul><li>Không có nổi bật trong chương trình học</li></ul>"}</div>
            </div>

            <!-- Đặc sản -->
            <div class="info-card c-specialties">
                <div class="card-header">
                    <span class="card-icon">🍲</span>
                    <h2 class="card-title">Đặc Sản Ẩm Thực</h2>
                </div>
                <div class="card-content">${listToHtml(region.specialties)}</div>
            </div>

            <!-- Lễ hội -->
            <div class="info-card c-festivals">
                <div class="card-header">
                    <span class="card-icon">🏮</span>
                    <h2 class="card-title">Lễ Hội Tiêu Biểu</h2>
                </div>
                <div class="card-content">${listToHtml(region.festivals)}</div>
            </div>
        </div>
        
        <div class="pagination">
            ${region.id > 1 ? `<a href="region_${region.id - 1}.html" class="btn-page">&larr; Vùng Trước</a>` : '<div></div>'}
            ${region.id < 7 ? `<a href="region_${region.id + 1}.html" class="btn-page">Vùng Tiếp Theo &rarr;</a>` : '<div></div>'}
        </div>
    </div>

    <footer>
        <p>Tạo bởi Hệ thống Trắc nghiệm & Ôn tập Kiến thức Du lịch</p>
    </footer>
</body>
</html>`;
}

regions.forEach(region => {
    fs.writeFileSync(`region_${region.id}.html`, generateHTML(region), 'utf8');
    console.log(`Created region_${region.id}.html`);
});
