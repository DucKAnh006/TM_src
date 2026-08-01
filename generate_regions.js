const fs = require('fs');

const regions = [
    {
        id: 1,
        name: "Trung du và Miền núi phía Bắc",
        natural: [
            "<strong>Địa hình:</strong> Chủ yếu là đồi núi hiểm trở, chia cắt mạnh. Vùng này sở hữu nhiều dãy núi đồ sộ nhất Việt Nam, tiêu biểu là dãy Hoàng Liên Sơn, dãy Trường Sơn Bắc (phần đầu) và dãy Tây Côn Lĩnh.",
            "<strong>Khí hậu:</strong> Mang đặc trưng nhiệt đới gió mùa có một mùa đông lạnh giá nhất cả nước. Các đỉnh núi cao (như Sapa, Mẫu Sơn, Phia Oắc) thường xuyên xuất hiện băng tuyết vào mùa đông.",
            "<strong>Cảnh quan:</strong> Nổi bật với hệ thống ruộng bậc thang kỳ vĩ trải dài khắp các sườn đồi, những cung đường đèo dốc uốn lượn ngoạn mục (nổi tiếng với Tứ đại đỉnh đèo: Ô Quy Hồ, Mã Pí Lèng, Khau Phạ, Pha Đin), và các thác nước tự nhiên hoành tráng (thác Bản Giốc)."
        ],
        cultural: [
            "<strong>Dân tộc:</strong> Là địa bàn cư trú của hơn 30 dân tộc thiểu số anh em (H'Mông, Dao, Tày, Nùng, Thái, Mường...). Mỗi dân tộc giữ gìn trang phục, tiếng nói, và phong tục tập quán riêng biệt (như tục bắt vợ, tắm lá thuốc).",
            "<strong>Lịch sử - Cách mạng:</strong> Vùng đất thiêng liêng chứa đựng hệ thống di tích lịch sử cách mạng hào hùng như Quần thể di tích chiến trường Điện Biên Phủ, Khu di tích quốc gia đặc biệt Tân Trào (Tuyên Quang), ATK Định Hóa (Thái Nguyên).",
            "<strong>Kiến trúc - Văn hóa:</strong> Đặc trưng bởi kiến trúc bản làng truyền thống: nhà sàn của người Tày/Thái, nhà trình tường bằng đất của người Hà Nhì, cùng các phiên chợ vùng cao rực rỡ sắc màu thổ cẩm."
        ],
        examples: [
            "<strong>Thị xã Sapa (Lào Cai):</strong> Được mệnh danh là 'Thành phố trong sương', thu hút du khách bởi đỉnh Fansipan (Nóc nhà Đông Dương cao 3.143m), bản Cát Cát, thung lũng Mường Hoa.",
            "<strong>Mù Cang Chải (Yên Bái):</strong> Điểm đến lừng danh với hàng ngàn hecta ruộng bậc thang nhuộm vàng mùa lúa chín, đặc biệt là đồi mâm xôi và đèo Khau Phạ.",
            "<strong>Cao nguyên đá Đồng Văn (Hà Giang):</strong> Vùng đất cực Bắc Tổ quốc với cảnh quan đá vôi hiểm trở, Cột cờ Lũng Cú thiêng liêng, dinh thự Vua Mèo, và đèo Mã Pí Lèng nhìn xuống dòng sông Nho Quế xanh biếc.",
            "<strong>Thác Bản Giốc (Cao Bằng):</strong> Nằm trên đường biên giới, đây là một trong những thác nước xuyên quốc gia tự nhiên lớn nhất và đẹp nhất khu vực Đông Nam Á."
        ],
        types: [
            "<strong>Du lịch sinh thái:</strong> Khám phá cảnh quan thiên nhiên hoang sơ, chiêm ngưỡng núi rừng, thác nước.",
            "<strong>Du lịch cộng đồng (Homestay):</strong> Trải nghiệm ăn ở, sinh hoạt và lao động cùng người dân bản địa.",
            "<strong>Du lịch mạo hiểm:</strong> Trekking dã ngoại, leo núi chinh phục các đỉnh cao (Fansipan, Bạch Mộc Lương Tử, Tà Xùa), đổ đèo bằng xe máy.",
            "<strong>Du lịch về nguồn:</strong> Thăm viếng các chiến trường xưa và thủ đô kháng chiến."
        ],
        unesco: [
            "<strong>Công viên địa chất toàn cầu Cao nguyên đá Đồng Văn (Hà Giang):</strong> Ghi nhận các giá trị địa chất, địa mạo karst và đa dạng sinh học độc đáo.",
            "<strong>Công viên địa chất toàn cầu Non Nước Cao Bằng:</strong> Vùng đất có lịch sử địa chất phong phú, gắn liền với các hóa thạch cổ sinh.",
            "<strong>Di sản văn hóa phi vật thể:</strong> Hát Xoan (Phú Thọ) và Tín ngưỡng thờ cúng Hùng Vương.",
            "<strong>Thực hành Then của người Tày, Nùng, Thái:</strong> Loại hình nghệ thuật diễn xướng dân gian mang đậm tính tâm linh."
        ],
        specialties: [
            "<strong>Thắng cố:</strong> Món ăn truyền thống của người H'Mông làm từ nội tạng ngựa, bò, kết hợp với gia vị núi rừng (thảo quả, quế, hồi).",
            "<strong>Thịt đặc sản:</strong> Lợn cắp nách (heo lai lợn rừng, thịt chắc), gà đồi nướng mắc khén, thịt trâu gác bếp (ướp hạt dổi, mắc khén rồi sấy khô bằng khói bếp).",
            "<strong>Món ăn hàng ngày:</strong> Xôi ngũ sắc (nhuộm từ các loại lá rừng tự nhiên), cơm lam nướng trong ống nứa, cá suối nướng.",
            "<strong>Đặc sản làm quà:</strong> Chè Tân Cương (Thái Nguyên) nức tiếng, mận Mộc Châu, đào Sapa, táo mèo khô, rượu ngô."
        ],
        festivals: [
            "<strong>Lễ hội Đền Hùng (Phú Thọ):</strong> Diễn ra vào mùng 10 tháng 3 Âm lịch hàng năm, là ngày Quốc giỗ tưởng nhớ công lao dựng nước của các Vua Hùng.",
            "<strong>Chợ tình Khau Vai (Hà Giang):</strong> Tổ chức vào 27/3 Âm lịch, là phiên chợ độc đáo nơi những người yêu nhau nhưng không đến được với nhau gặp lại để tâm tình.",
            "<strong>Chợ tình Mộc Châu (Sơn La):</strong> Diễn ra dịp 2/9 (Tết Độc lập), thu hút đồng bào H'Mông xúng xính váy áo đến hò hẹn.",
            "<strong>Lễ hội Lồng Tồng:</strong> (Lễ hội xuống đồng) Lễ hội quan trọng nhất đầu xuân của người Tày, Nùng nhằm cầu mưa thuận gió hòa."
        ]
    },
    {
        id: 2,
        name: "Đồng bằng sông Hồng & Duyên hải Đông Bắc",
        natural: [
            "<strong>Địa hình:</strong> Bao gồm vùng đồng bằng châu thổ sông Hồng phù sa màu mỡ trải rộng và dải duyên hải Đông Bắc với bờ biển khúc khuỷu, hàng ngàn hòn đảo đá vôi lớn nhỏ.",
            "<strong>Hệ sinh thái:</strong> Cực kỳ đa dạng với các khu dự trữ sinh quyển ngập mặn ven biển (Vườn quốc gia Xuân Thủy - Nam Định), và các vườn quốc gia rậm rạp (Cúc Phương, Ba Vì, Cát Bà).",
            "<strong>Cảnh quan biển đảo:</strong> Vịnh Bắc Bộ nổi tiếng thế giới với hàng ngàn đảo đá vôi karst xen kẽ trên mặt nước phẳng lặng, tạo nên các hệ thống hang động thạch nhũ lộng lẫy và các bãi tắm kín gió."
        ],
        cultural: [
            "<strong>Văn minh lúa nước:</strong> Là cái nôi hình thành và phát triển sớm nhất của nền văn minh lúa nước sông Hồng, nền tảng của văn hóa Việt cổ (Văn hóa Đông Sơn).",
            "<strong>Di tích lịch sử:</strong> Có mật độ di tích dày đặc nhất cả nước. Tiêu biểu là các cố đô (Hoa Lư, Thăng Long), hệ thống đền, chùa, đình, miếu mạo linh thiêng mang kiến trúc gỗ cổ truyền.",
            "<strong>Nghệ thuật & Làng nghề:</strong> Nơi bảo tồn nghệ thuật hát chèo, ca trù, xẩm, múa rối nước, dân ca quan họ và hàng trăm làng nghề truyền thống tuổi đời hàng thế kỷ (Gốm Bát Tràng, Lụa Vạn Phúc, Tranh Đông Hồ)."
        ],
        examples: [
            "<strong>Vịnh Hạ Long & Vịnh Lan Hạ (Quảng Ninh, Hải Phòng):</strong> Kỳ quan thiên nhiên thế giới với vẻ đẹp siêu thực của đá và nước, cùng các hang động như Sửng Sốt, Thiên Cung.",
            "<strong>Quần thể Tràng An - Bái Đính - Tam Cốc (Ninh Bình):</strong> 'Vịnh Hạ Long trên cạn' với núi đá vôi hùng vĩ bao quanh các dòng sông êm đềm và ngôi chùa lớn nhất Đông Nam Á.",
            "<strong>Thủ đô Hà Nội:</strong> Trái tim của cả nước với Khu di tích Hoàng Thành Thăng Long, Văn Miếu - Quốc Tử Giám, Phố Cổ 36 phố phường, Lăng Bác và Hồ Gươm.",
            "<strong>Đảo Cát Bà & Tam Đảo:</strong> Cát Bà (Hải Phòng) là khu dự trữ sinh quyển xanh mát; Tam Đảo (Vĩnh Phúc) là khu nghỉ dưỡng trên núi mát mẻ cách Hà Nội không xa."
        ],
        types: [
            "<strong>Du lịch văn hóa - lịch sử:</strong> Khám phá các di sản, cố đô, làng nghề cổ và tìm hiểu lịch sử ngàn năm văn hiến.",
            "<strong>Du lịch tâm linh & lễ hội:</strong> Hành hương về các đình, chùa, đền, miếu vào mỗi dịp đầu xuân năm mới.",
            "<strong>Du lịch biển đảo & Cruise:</strong> Nghỉ dưỡng qua đêm trên các du thuyền (Cruise) sang trọng trên Vịnh Hạ Long, Vịnh Lan Hạ.",
            "<strong>Du lịch sinh thái:</strong> Khám phá vườn quốc gia Cúc Phương, Ba Vì, và trải nghiệm không gian miệt vườn làng quê Bắc Bộ."
        ],
        unesco: [
            "<strong>Di sản Thiên nhiên Thế giới:</strong> Vịnh Hạ Long (Quảng Ninh) - Được công nhận nhiều lần về giá trị cảnh quan và địa chất.",
            "<strong>Di sản Hỗn hợp Thế giới:</strong> Quần thể danh thắng Tràng An (Ninh Bình) - Di sản kép đầu tiên của Đông Nam Á (Tự nhiên & Văn hóa).",
            "<strong>Di sản Văn hóa Thế giới:</strong> Khu trung tâm Hoàng thành Thăng Long (Hà Nội).",
            "<strong>Di sản Phi vật thể:</strong> Dân ca Quan họ Bắc Ninh, Hát Ca trù, Hội Gióng ở đền Phù Đổng và đền Sóc."
        ],
        specialties: [
            "<strong>Ẩm thực Hà Thành:</strong> Phở bò/gà truyền thống, bún chả (nổi tiếng thế giới), chả cá Lã Vọng, bún đậu mắm tôm, cốm làng Vòng và cà phê trứng độc đáo.",
            "<strong>Đặc sản vùng biển:</strong> Chả mực Hạ Long (giã tay, giòn sần sật), sá sùng (địa sâm biển đắt đỏ dùng nấu nước dùng), sam biển, bún hải sản.",
            "<strong>Đặc sản các tỉnh:</strong> Thịt dê núi và cơm cháy (Ninh Bình), bánh cáy (Thái Bình), bánh đậu xanh (Hải Dương), bánh phu thê (Bắc Ninh)."
        ],
        festivals: [
            "<strong>Lễ hội Chùa Hương (Hà Nội):</strong> Lễ hội kéo dài nhất cả nước (suốt 3 tháng mùa xuân), thu hút hàng triệu phật tử trẩy hội, ngồi đò dọc suối Yến.",
            "<strong>Lễ hội Đền Trần (Nam Định):</strong> Nổi tiếng với Lễ khai ấn đêm 14 tháng Giêng âm lịch, người dân cầu xin ấn với mong muốn thăng tiến, bình an.",
            "<strong>Lễ hội Lim (Bắc Ninh):</strong> Không gian diễn xướng và giao lưu văn hóa Quan họ đặc sắc trên đồi Lim, với các liền anh liền chị hát đối đáp.",
            "<strong>Lễ hội Yên Tử (Quảng Ninh):</strong> Lễ hội hành hương về miền đất Phật, cái nôi của Thiền phái Trúc Lâm do vua Trần Nhân Tông sáng lập."
        ]
    },
    {
        id: 3,
        name: "Bắc Trung Bộ",
        natural: [
            "<strong>Địa hình:</strong> Hẹp ngang, dốc, địa hình phức tạp với sự vươn ra biển của dãy núi Trường Sơn ở phía Tây, tạo nên đồng bằng nhỏ hẹp ven biển phía Đông và đồi núi chia cắt.",
            "<strong>Hệ thống hang động:</strong> Nổi tiếng toàn cầu với hệ thống hang động đá vôi ngầm hùng vĩ và lớn nhất thế giới nằm trong dải Karst Phong Nha - Kẻ Bàng.",
            "<strong>Biển và Đèo:</strong> Sở hữu nhiều bãi biển đẹp, trải dài phẳng lặng. Các nhánh núi đâm ngang ra biển tạo thành những đèo ngoạn mục, ranh giới tự nhiên tuyệt đẹp (Đèo Ngang, Đèo Hải Vân)."
        ],
        cultural: [
            "<strong>Di sản cung đình:</strong> Trung tâm của hệ thống di sản kiến trúc phong kiến Việt Nam, đặc biệt là hệ thống cố đô, lăng tẩm hoàng gia triều Nguyễn tại Huế được bảo tồn nguyên vẹn.",
            "<strong>Văn hóa phi vật thể:</strong> Lưu giữ nghệ thuật cung đình đỉnh cao (Nhã nhạc cung đình Huế) song song với dòng dân ca mộc mạc, đậm tình người (Dân ca Ví, Giặm Nghệ Tĩnh).",
            "<strong>Lịch sử chiến tranh:</strong> Vùng đất lửa chịu nhiều đau thương, nơi tập trung dày đặc các di tích lịch sử chiến tranh giải phóng dân tộc (Thành cổ Quảng Trị, Vĩ tuyến 17, Cầu Hiền Lương, Nghĩa trang Trường Sơn)."
        ],
        examples: [
            "<strong>Vườn Quốc gia Phong Nha - Kẻ Bàng (Quảng Bình):</strong> Vương quốc hang động với Hang Sơn Đoòng (lớn nhất thế giới), Động Phong Nha, Động Thiên Đường, Hang Én.",
            "<strong>Cố đô Huế (Thừa Thiên Huế):</strong> Quần thể di tích lịch sử khổng lồ bao gồm Đại Nội (Hoàng Thành), hệ thống lăng tẩm (Lăng Tự Đức, Khải Định, Minh Mạng), Chùa Thiên Mụ.",
            "<strong>Biển Sầm Sơn (Thanh Hóa) & Cửa Lò (Nghệ An):</strong> Những điểm đến tắm biển truyền thống và nhộn nhịp nhất của miền Bắc và Bắc Trung Bộ vào dịp hè.",
            "<strong>Thành nhà Hồ (Thanh Hóa):</strong> Tòa thành bằng đá khối độc đáo và kiên cố nhất Đông Nam Á, được xây dựng từ đầu thế kỷ 15."
        ],
        types: [
            "<strong>Du lịch thám hiểm:</strong> Khám phá hang động ngầm (cave tours) từ mức độ đại chúng đến thám hiểm sinh tồn cường độ cao (chinh phục Sơn Đoòng).",
            "<strong>Du lịch di sản & nghiên cứu:</strong> Tham quan kiến trúc cung đình, đền đài, lăng tẩm, tìm hiểu lịch sử phong kiến.",
            "<strong>Du lịch hoài niệm chiến trường (DMZ Tour):</strong> Tham quan khu phi quân sự, di tích lịch sử dọc vĩ tuyến 17 thu hút khách cựu chiến binh và khách quốc tế.",
            "<strong>Du lịch nghỉ dưỡng biển:</strong> Tắm biển, nghỉ mát tại các bãi biển Lăng Cô, Nhật Lệ, Sầm Sơn."
        ],
        unesco: [
            "<strong>Di sản Văn hóa Thế giới:</strong> Quần thể di tích Cố đô Huế (Di sản đầu tiên của VN), Thành nhà Hồ (Thanh Hóa).",
            "<strong>Di sản Thiên nhiên Thế giới:</strong> Vườn quốc gia Phong Nha - Kẻ Bàng (được vinh danh 2 lần về tiêu chí địa chất và đa dạng sinh học).",
            "<strong>Di sản Phi vật thể:</strong> Nhã nhạc cung đình Huế, Dân ca Ví, Giặm Nghệ Tĩnh."
        ],
        specialties: [
            "<strong>Xứ Huế:</strong> Tinh hoa ẩm thực cung đình và dân gian: Bún bò Huế (chuẩn vị ruốc), các loại bánh (bánh nậm, bánh lọc, bánh bèo, bánh ram ít), chè cung đình, tré, tôm chua.",
            "<strong>Xứ Nghệ:</strong> Các món ăn đậm đà vị cay nóng: Súp lươn đồng, miến lươn, tương Nam Đàn, bánh đa Đô Lương.",
            "<strong>Đặc sản khác:</strong> Kẹo cu đơ (Hà Tĩnh - kẹo lạc mật mía kẹp bánh tráng), Nem chua Thanh Hóa, Mực nhảy Cửa Lò."
        ],
        festivals: [
            "<strong>Festival Huế:</strong> Tổ chức định kỳ 2 năm 1 lần, là sự kiện giao lưu văn hóa quốc tế lớn nhất cả nước, tái hiện nhiều nghi lễ cung đình (Lễ Tế Giao, Đêm Hoàng Cung).",
            "<strong>Lễ hội Làng Sen (Nghệ An):</strong> Tổ chức vào tháng 5 hàng năm nhân dịp sinh nhật Bác Hồ, liên hoan tiếng hát Làng Sen.",
            "<strong>Lễ hội Đền Cuông (Nghệ An):</strong> Gắn với truyền thuyết Thục Phán An Dương Vương."
        ]
    },
    {
        id: 4,
        name: "Duyên hải Nam Trung Bộ",
        natural: [
            "<strong>Bờ biển tuyệt mỹ:</strong> Sở hữu các vịnh biển được tổ chức quốc tế bình chọn đẹp nhất thế giới (Vịnh Nha Trang, Vịnh Cam Ranh). Các bãi biển thoải, cát trắng mịn màng và nước biển trong xanh thấu đáy.",
            "<strong>Hệ sinh thái biển:</strong> Rất đa dạng sinh học với các rạn san hô rực rỡ, các cụm đảo, bán đảo ven bờ hoang sơ hoang dã (Đảo Lý Sơn, Phú Quý, Hòn Mun).",
            "<strong>Khí hậu:</strong> Khí hậu nhiệt đới gió mùa, mang tính chất cận xích đạo nóng ấm, nhiều nắng gió quanh năm. Ít chịu ảnh hưởng của bão hơn miền Bắc, thời tiết lý tưởng cho du lịch biển quanh năm."
        ],
        cultural: [
            "<strong>Văn hóa Chăm Pa:</strong> Vùng lõi của vương quốc Chăm Pa cổ đại, lưu giữ hệ thống đền tháp bằng gạch nung tinh xảo, điêu khắc nghệ thuật Shiva giáo và các nét văn hóa tín ngưỡng độc đáo của người Chăm.",
            "<strong>Cảng thị cổ:</strong> Dấu ấn của những thương cảng cổ kính từng là nơi giao thương sầm uất bậc nhất Đông Nam Á thời kỳ con đường tơ lụa trên biển (tiêu biểu là Hội An).",
            "<strong>Văn hóa biển đảo:</strong> Cuộc sống, lễ hội (Cầu Ngư, hát bả trạo) và tín ngưỡng (thờ Cá Ông) gắn liền chặt chẽ với nghề đi biển của ngư dân."
        ],
        examples: [
            "<strong>Thành phố biển Nha Trang (Khánh Hòa):</strong> 'Hòn ngọc của biển Đông', nổi tiếng với Vịnh Nha Trang, khu vui chơi Vinpearl, Tháp Bà Ponagar và Viện Hải dương học.",
            "<strong>Thành phố Đà Nẵng:</strong> 'Thành phố đáng sống', với Bán đảo Sơn Trà hoang sơ, khu du lịch Bà Nà Hills, danh thắng Ngũ Hành Sơn và bãi biển Mỹ Khê.",
            "<strong>Phố cổ Hội An (Quảng Nam):</strong> Đô thị cổ lấp lánh đèn lồng, giữ nguyên vẹn kiến trúc thế kỷ 16-17 với Chùa Cầu, hội quán Hoa kiều và nhà cổ.",
            "<strong>Thánh địa Mỹ Sơn (Quảng Nam):</strong> Thung lũng thần linh chứa đựng quần thể tháp Chăm Pa cổ đại bí ẩn.",
            "<strong>Khu vực khác:</strong> Mũi Né (Bình Thuận - thủ phủ resort, đồi cát bay), Kỳ Co - Eo Gió (Bình Định - 'Maldives của Việt Nam')."
        ],
        types: [
            "<strong>Nghỉ dưỡng biển cao cấp:</strong> Chuỗi các Resort 5 sao ven biển đa dạng và đẳng cấp quốc tế.",
            "<strong>Thể thao & Giải trí dưới nước:</strong> Lặn ngắm san hô (scuba diving, snorkeling), lướt ván diều (kitesurfing ở Mũi Né), dù lượn, cano nước.",
            "<strong>Du lịch văn hóa - lịch sử:</strong> Khám phá phế tích Tháp Chăm, dạo bộ phố cổ, trải nghiệm thả đèn hoa đăng.",
            "<strong>Du lịch MICE:</strong> Tổ chức sự kiện quốc tế, hội nghị, triển lãm tại các trung tâm lớn (Đà Nẵng, Nha Trang)."
        ],
        unesco: [
            "<strong>Di sản Văn hóa Thế giới:</strong> Phố cổ Hội An, Quần thể đền tháp Mỹ Sơn (Quảng Nam).",
            "<strong>Di sản Phi vật thể của nhân loại:</strong> Nghệ thuật Bài chòi Trung Bộ (Hát bài chòi truyền thống).",
            "<strong>Khu dự trữ sinh quyển thế giới:</strong> Cù Lao Chàm (Quảng Nam) - Nơi bảo tồn sinh thái biển và rạn san hô."
        ],
        specialties: [
            "<strong>Món sợi truyền thống:</strong> Mì Quảng (đậm đà với tôm thịt, ăn kèm bánh tráng nướng), Cao lầu Hội An (sợi mì vàng ươm dẻo dai với thịt xíu).",
            "<strong>Món biển & Nước dùng:</strong> Hải sản tươi sống, bún chả cá Quy Nhơn/Nha Trang (chả cá quết dẻo ngọt), bánh canh chả cá.",
            "<strong>Ăn vặt & Đặc sản khác:</strong> Nem nướng Nha Trang (cuốn bánh tráng chiên giòn, chấm tương đậu), bánh tráng cuốn thịt heo hai đầu da, cơm gà Hội An."
        ],
        festivals: [
            "<strong>Lễ hội Katê:</strong> Diễn ra vào tháng 7 Chăm lịch (khoảng tháng 9-10 DL), là lễ hội quan trọng nhất của đồng bào Chăm tưởng nhớ thần linh và anh hùng dân tộc.",
            "<strong>Lễ hội Tháp Bà Ponagar (Nha Trang):</strong> Tổ chức từ 20-23/3 Âm lịch, ghi nhớ công ơn Thiên Y A Na Thánh Mẫu (Mẹ Xứ Sở).",
            "<strong>Lễ hội Cầu Ngư:</strong> Lễ hội truyền thống của ngư dân Nam Trung Bộ cầu mong mưa thuận gió hòa, sóng yên biển lặng để ra khơi.",
            "<strong>Sự kiện quốc tế:</strong> Lễ hội pháo hoa quốc tế Đà Nẵng (DIFF)."
        ]
    },
    {
        id: 5,
        name: "Tây Nguyên",
        natural: [
            "<strong>Địa hình:</strong> Vùng duy nhất không giáp biển, cấu trúc bởi hệ thống các cao nguyên đất đỏ bazan xếp tầng rộng lớn, đồi núi trập trùng (độ cao 500m - 1500m).",
            "<strong>Cảnh quan sinh thái:</strong> Rừng nguyên sinh bao phủ diện tích lớn với đa dạng sinh học cao, hệ thống thác nước hùng vĩ (Thác Dray Nur, Dray Sap, Pongour), và các hồ trên núi lửa trong xanh (Biển Hồ T'Nưng, Hồ Lắk).",
            "<strong>Khí hậu:</strong> Mang khí hậu cận xích đạo phân hóa theo độ cao. Các vùng cao nguyên mang lại thời tiết mát mẻ quanh năm (ôn đới trong lòng nhiệt đới), đặc biệt tại Đà Lạt, Măng Đen."
        ],
        cultural: [
            "<strong>Văn hóa Cồng chiêng:</strong> Âm nhạc cồng chiêng không chỉ là nghệ thuật mà là phương tiện giao tiếp với thần linh (Yàng), gắn liền với vòng đời người và sinh hoạt cộng đồng của dân tộc bản địa (Ê đê, Gia Rai, Ba Na).",
            "<strong>Kiến trúc & Tín ngưỡng:</strong> Đặc trưng kiến trúc nhà rông vươn cao vút như lưỡi rìu, nhà dài của người Ê-đê, khu nhà mồ với các bức tượng gỗ điêu khắc dân dã.",
            "<strong>Đời sống bản địa:</strong> Truyền thống chế độ mẫu hệ (người Ê-đê), kho tàng sử thi truyền miệng đồ sộ (sử thi Đam San), nếp sống du canh du cư gắn liền với đại ngàn."
        ],
        examples: [
            "<strong>Thành phố Đà Lạt (Lâm Đồng):</strong> 'Xứ sở sương mù', 'Thành phố ngàn hoa', nổi tiếng với kiến trúc biệt thự Pháp cổ, Hồ Xuân Hương, Đỉnh Langbiang, Thung lũng Tình Yêu.",
            "<strong>Thành phố Buôn Ma Thuột (Đắk Lắk):</strong> Thủ phủ cà phê của Việt Nam, trung tâm văn hóa Tây Nguyên, Bảo tàng Thế giới Cà phê, Bản Đôn, Hồ Lắk.",
            "<strong>Pleiku (Gia Lai):</strong> Nổi bật với Biển Hồ T'Nưng (miệng núi lửa cổ, 'Đôi mắt Pleiku'), Biển Hồ Chè xanh ngắt, núi lửa Chư Đăng Ya.",
            "<strong>Khu du lịch sinh thái Măng Đen (Kon Tum):</strong> Được ví như 'Đà Lạt thứ 2' giữa đại ngàn với khí hậu lạnh giá, rừng thông và hệ thống thác hồ (Thác Pa Sỹ)."
        ],
        types: [
            "<strong>Du lịch sinh thái & thám hiểm:</strong> Băng rừng, vượt thác, cưỡi voi, thám hiểm các khu rừng nguyên sinh và vườn quốc gia (Yok Đôn, Chư Yang Sin).",
            "<strong>Du lịch văn hóa cộng đồng:</strong> Ngủ nhà rông, giao lưu uống rượu cần, xem biểu diễn múa xoang và đánh cồng chiêng bên lửa trại.",
            "<strong>Du lịch canh nông (Nông nghiệp):</strong> Tham quan quy trình sản xuất đồn điền cà phê, đồi chè, vườn hồ tiêu, hái dâu tây và hoa canh nông (Đà Lạt).",
            "<strong>Nghỉ dưỡng núi sương mù:</strong> Tận hưởng khí hậu ôn đới, săn mây, cắm trại (glamping) tại Đà Lạt."
        ],
        unesco: [
            "<strong>Di sản Văn hóa Phi vật thể của nhân loại:</strong> Không gian văn hóa Cồng chiêng Tây Nguyên (Được vinh danh bởi tính độc đáo về nhạc cụ và văn hóa tín ngưỡng).",
            "<strong>Khu dự trữ sinh quyển thế giới:</strong> Cao nguyên Langbiang (Lâm Đồng) và Khu dự trữ sinh quyển Kon Hà Nừng (Gia Lai)."
        ],
        specialties: [
            "<strong>Ẩm thực nướng đại ngàn:</strong> Gà nướng Bản Đôn (chấm muối é), bò nướng ống tre, heo đồng bào nướng xôi, thịt nai khô.",
            "<strong>Món truyền thống & thảo mộc:</strong> Cơm lam (nấu trong ống nứa dẻo thơm), gỏi lá rừng (Kon Tum), phở khô Gia Lai (phở hai tô).",
            "<strong>Đồ uống trứ danh:</strong> Cà phê nguyên chất Buôn Ma Thuột, rượu cần (uống chung từ một chóe), rượu vang Đà Lạt, các loại mứt trái cây."
        ],
        festivals: [
            "<strong>Lễ hội Cà phê Buôn Ma Thuột:</strong> Sự kiện quốc gia được tổ chức định kỳ để quảng bá thương hiệu cà phê Việt Nam và văn hóa Tây Nguyên.",
            "<strong>Lễ hội đua voi ở Bản Đôn:</strong> Lễ hội truyền thống thể hiện sự dũng mãnh và tài thuần dưỡng voi rừng của người M'Nông.",
            "<strong>Lễ hội truyền thống bản địa:</strong> Lễ cúng bến nước, Lễ hội đâm trâu (lễ tạ ơn thần linh), Lễ mừng lúa mới, Lễ bỏ mả."
        ]
    },
    {
        id: 6,
        name: "Đông Nam Bộ",
        natural: [
            "<strong>Địa hình & Khí hậu:</strong> Là vùng đất chuyển tiếp từ cao nguyên xuống đồng bằng, địa hình bằng phẳng. Khí hậu cận xích đạo nóng ẩm, chia 2 mùa mưa nắng rõ rệt, không có bão lớn.",
            "<strong>Hệ sinh thái:</strong> Sở hữu hệ sinh thái phong phú với rừng rậm nhiệt đới rụng lá, khu bảo tồn tự nhiên rộng lớn, và khu dự trữ sinh quyển rừng ngập mặn đan xen.",
            "<strong>Cảnh quan nước:</strong> Mạng lưới sông ngòi lưu lượng lớn (Sông Sài Gòn, Sông Đồng Nai), các hồ nhân tạo khổng lồ (Hồ Trị An, Hồ Dầu Tiếng), suối khoáng nóng (Bình Châu) và bờ biển đẹp (Vũng Tàu)."
        ],
        cultural: [
            "<strong>Văn hóa Đô thị & Hội nhập:</strong> Sự giao thoa văn hóa năng động, đa dạng, nơi kết hợp hài hòa giữa nhịp sống hiện đại, công nghiệp sầm uất bậc nhất và các giá trị truyền thống.",
            "<strong>Di tích Lịch sử Cách mạng:</strong> Nơi tập trung các di tích căn cứ địa cách mạng mang tính biểu tượng, minh chứng cho ý chí kiên cường trong hai cuộc kháng chiến.",
            "<strong>Kiến trúc Đô thị:</strong> Sở hữu các công trình kiến trúc thời thuộc địa Pháp được bảo tồn (Bưu điện, Nhà thờ Đức Bà), bên cạnh những tòa nhà chọc trời mang tầm vóc quốc tế (Landmark 81, Bitexco)."
        ],
        examples: [
            "<strong>TP. Hồ Chí Minh:</strong> 'Hòn ngọc Viễn Đông', đầu tàu kinh tế - văn hóa. Nổi bật với Chợ Bến Thành, Dinh Độc Lập, Phố đi bộ Nguyễn Huệ, Bảo tàng Chứng tích Chiến tranh.",
            "<strong>Địa đạo Củ Chi (TP. HCM):</strong> Kỳ quan quân sự ngầm dưới lòng đất dài hơn 200km, biểu tượng cho nghệ thuật chiến tranh du kích Việt Nam.",
            "<strong>Vũng Tàu & Côn Đảo (Bà Rịa - Vũng Tàu):</strong> Vũng Tàu là thiên đường nghỉ dưỡng cuối tuần; Côn Đảo mang vẻ đẹp hoang sơ bí ẩn cùng hệ thống Nhà tù Côn Đảo lịch sử.",
            "<strong>Tây Ninh:</strong> Nổi bật với Tòa Thánh Cao Đài (kiến trúc tôn giáo độc đáo) và Núi Bà Đen (nóc nhà Nam Bộ).",
            "<strong>Vườn quốc gia Nam Cát Tiên:</strong> Khu bảo tồn thiên nhiên rộng lớn giáp ranh Đồng Nai, Lâm Đồng, Bình Phước."
        ],
        types: [
            "<strong>Du lịch MICE:</strong> Tổ chức sự kiện quốc tế, hội nghị, hội thảo, triển lãm thương mại quy mô lớn.",
            "<strong>Du lịch Đô thị & Mua sắm:</strong> Tham quan thành phố (City tour), trải nghiệm vui chơi giải trí cao cấp, mua sắm (Shopping tours) và ẩm thực đa quốc gia.",
            "<strong>Du lịch tìm hiểu lịch sử - cách mạng:</strong> Tham quan Chiến khu D, Địa đạo Củ Chi, Nhà tù Côn Đảo.",
            "<strong>Du lịch nghỉ dưỡng cuối tuần (Staycation/Getaway):</strong> Tắm biển Vũng Tàu, Hồ Tràm, suối nước nóng Bình Châu."
        ],
        unesco: [
            "<strong>Khu dự trữ sinh quyển thế giới Cần Giờ (TP. HCM):</strong> Lá phổi xanh của thành phố, hệ sinh thái rừng ngập mặn được phục hồi kỳ tích sau chiến tranh.",
            "<strong>Khu dự trữ sinh quyển thế giới Đồng Nai:</strong> Bao gồm Vườn quốc gia Nam Cát Tiên, bảo tồn hệ sinh thái rừng nhiệt đới phong phú."
        ],
        specialties: [
            "<strong>Ẩm thực đường phố Sài Gòn:</strong> Cơm tấm sườn bì chả (huyền thoại), gỏi cuốn, bánh mì thịt, bột chiên, ốc các loại, hủ tiếu Nam Vang.",
            "<strong>Đặc sản địa phương:</strong> Bánh canh Trảng Bàng, bánh tráng phơi sương cuốn thịt heo (Tây Ninh), xôi chiên phồng (Đồng Nai), bưởi Tân Triều.",
            "<strong>Hải sản:</strong> Chợ hải sản đêm Vũng Tàu, lẩu cá đuối, bánh khọt Vũng Tàu, mứt hạt bàng Côn Đảo."
        ],
        festivals: [
            "<strong>Lễ hội Vía Bà Đen (Tây Ninh):</strong> Diễn ra vào dịp Rằm tháng Giêng (tháng 1 Âm lịch), thu hút hàng vạn khách hành hương đến Núi Bà Đen để cầu an, cầu lộc.",
            "<strong>Lễ hội Nghinh Ông:</strong> Diễn ra ở Cần Giờ (TP.HCM) và Vũng Tàu. Là phong tục thờ cúng cá Ông (cá Voi) của ngư dân cầu sóng yên biển lặng.",
            "<strong>Lễ hội Trái cây Nam Bộ:</strong> Thường tổ chức tại Suối Tiên (TP.HCM) vào dịp Tết Đoan Ngọ (tháng 5 Âm lịch) để tôn vinh trái cây đặc sản vùng miền."
        ]
    },
    {
        id: 7,
        name: "Đồng bằng sông Cửu Long",
        natural: [
            "<strong>Địa hình sông nước:</strong> Vùng châu thổ thấp, bằng phẳng. Cảnh quan bị chi phối bởi mạng lưới sông ngòi, kênh rạch chằng chịt, được bồi đắp bởi hệ thống sông Tiền và sông Hậu (sông Mekong).",
            "<strong>Sinh thái ngập nước & Miệt vườn:</strong> Đặc trưng bởi các miệt vườn cây ăn trái quanh năm trĩu quả, hệ sinh thái rừng ngập mặn/ngập phèn nguyên sinh (rừng tràm, rừng đước) và các sân chim tự nhiên lớn.",
            "<strong>Biển đảo phía Tây Nam:</strong> Vùng biển Kiên Giang, Cà Mau sở hữu cụm đảo rộng lớn tuyệt đẹp, nước biển ấm và rạn san hô phong phú."
        ],
        cultural: [
            "<strong>Văn hóa Chợ nổi:</strong> Phương thức sinh hoạt, giao thương độc đáo hoàn toàn trên mặt nước, nơi ghe thuyền tụ tập buôn bán nông sản với cây bẹo treo hàng thay biển hiệu.",
            "<strong>Nghệ thuật dân gian:</strong> Không gian diễn xướng Đờn ca tài tử réo rắt, mộc mạc, phóng khoáng mang đậm tính cách hào sảng, trọng nghĩa tình của người miền Tây.",
            "<strong>Giao thoa văn hóa tín ngưỡng:</strong> Sự hòa quyện văn hóa đặc sắc giữa 4 dân tộc Kinh, Hoa, Khmer, Chăm. Đặc biệt biểu hiện qua hàng ngàn ngôi chùa kiến trúc Khmer rực rỡ và đền miếu người Hoa."
        ],
        examples: [
            "<strong>Chợ nổi Cái Răng (Cần Thơ):</strong> Khu chợ nổi lớn nhất và sầm uất nhất miền Tây, biểu tượng cho văn hóa sông nước.",
            "<strong>Rừng tràm Trà Sư (An Giang):</strong> Khu rừng ngập nước tuyệt đẹp với thảm bèo xanh mướt phủ kín mặt nước; Vườn quốc gia Tràm Chim (Đồng Tháp) - quê hương sếu đầu đỏ.",
            "<strong>Đất Mũi Cà Mau:</strong> Điểm cực Nam của Tổ quốc, nơi có thể ngắm mặt trời mọc ở biển Đông và lặn ở biển Tây.",
            "<strong>Phú Quốc (Kiên Giang):</strong> 'Đảo ngọc' - thành phố biển đảo lớn nhất Việt Nam với Bãi Sao, bãi Dài, và khu vui chơi VinWonders, Safari.",
            "<strong>Xứ dừa Bến Tre:</strong> Tham quan các cồn (Long, Lân, Quy, Phụng) rợp bóng dừa nước."
        ],
        types: [
            "<strong>Du lịch sinh thái miệt vườn:</strong> Hái trái cây tại vườn, nghe đờn ca tài tử, trải nghiệm đi cầu khỉ, tát mương bắt cá.",
            "<strong>Du lịch trên sông:</strong> Đi ghe, xuồng ba lá len lỏi qua các kênh rạch chằng chịt rợp bóng dừa nước, đi chợ nổi lúc sáng sớm.",
            "<strong>Du lịch tâm linh & lễ hội:</strong> Hành hương Miếu Bà Chúa Xứ, tham quan hệ thống chùa Khmer (Sóc Trăng, Trà Vinh), chùa Hang, chùa Dơi.",
            "<strong>Du lịch nghỉ dưỡng biển đảo cao cấp:</strong> Lưu trú tại các Resort 5 sao và trải nghiệm cáp treo vượt biển tại Phú Quốc."
        ],
        unesco: [
            "<strong>Di sản Văn hóa Phi vật thể đại diện của nhân loại:</strong> Nghệ thuật Đờn ca tài tử Nam Bộ - âm nhạc thính phòng đặc trưng của người dân sông nước.",
            "<strong>Khu dự trữ sinh quyển thế giới:</strong> Khu dự trữ sinh quyển Mũi Cà Mau và Khu dự trữ sinh quyển Kiên Giang (bảo tồn đa dạng sinh học rừng ngập mặn và biển đảo)."
        ],
        specialties: [
            "<strong>Các loại Lẩu & Mắm:</strong> Lẩu mắm cá linh, mắm ruột, lẩu cá kèo lá giang, bông điên điển cá linh (đặc sản mùa nước nổi).",
            "<strong>Món nướng/chiên dân dã:</strong> Cá lóc nướng trui (nướng bằng rơm, cuốn bánh tráng rau rừng), chuột đồng nướng, bánh xèo miền Tây (đúc chảo siêu to).",
            "<strong>Món nước & Sợi:</strong> Bún nước lèo Sóc Trăng (nước dùng nấu từ mắm), hủ tiếu Mỹ Tho, bún mắm, bánh tằm bì.",
            "<strong>Đặc sản khác:</strong> Nước mắm Phú Quốc, kẹo dừa Bến Tre, trái cây nhiệt đới phong phú (sầu riêng, chôm chôm, măng cụt, bưởi Năm Roi)."
        ],
        festivals: [
            "<strong>Lễ hội Vía Bà Chúa Xứ Núi Sam (An Giang):</strong> Lễ hội tâm linh lớn nhất vùng ĐBSCL diễn ra vào tháng 4 Âm lịch, thu hút hàng triệu người cầu an, vay vốn làm ăn.",
            "<strong>Lễ hội Ok Om Bok (Lễ cúng Trăng):</strong> Lễ hội lớn của đồng bào Khmer diễn ra vào rằm tháng 10 Âm lịch, đi kèm với hoạt động đua ghe Ngo sôi động và cúng cốm dẹp.",
            "<strong>Lễ hội Đua bò Bảy Núi (An Giang):</strong> Lễ hội truyền thống độc đáo của người Khmer trong dịp lễ Đôn Ta (lễ tạ ơn ông bà).",
            "<strong>Lễ hội trái cây, bánh dân gian Nam Bộ (Cần Thơ):</strong> Trình diễn và thưởng thức hàng trăm loại bánh dân gian."
        ]
    }
];

const listToHtml = (arr) => {
    return "<ul style='margin-top: 5px; padding-left: 20px;'>" + arr.map(item => `<li style='margin-bottom: 12px;'>${item}</li>`).join("") + "</ul>";
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

        .card-content strong {
            color: #0f172a;
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

        .region-chips {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            justify-content: center;
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px dashed #cbd5e1;
        }

        .chip {
            padding: 8px 16px;
            background: #e2e8f0;
            color: #475569;
            border-radius: 9999px;
            text-decoration: none;
            font-size: 0.9rem;
            font-weight: 500;
            transition: all 0.2s;
        }

        .chip:hover {
            background: #cbd5e1;
            color: #1e293b;
        }

        .chip.active {
            background: var(--primary);
            color: white;
            box-shadow: 0 2px 4px rgba(79, 70, 229, 0.3);
        }

        /* Styling cho list */
        ul {
            list-style-type: none; 
            padding-left: 0;
        }
        ul li {
            position: relative;
            padding-left: 24px;
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
            font-size: 1.2em;
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
        
        <div class="region-chips">
            <span style="width: 100%; text-align: center; color: var(--text-muted); margin-bottom: 10px; font-weight: 600;">Chuyển nhanh đến vùng khác:</span>
            <a href="region_1.html" class="chip ${region.id === 1 ? 'active' : ''}">1. TD&MN phía Bắc</a>
            <a href="region_2.html" class="chip ${region.id === 2 ? 'active' : ''}">2. ĐB Sông Hồng</a>
            <a href="region_3.html" class="chip ${region.id === 3 ? 'active' : ''}">3. Bắc Trung Bộ</a>
            <a href="region_4.html" class="chip ${region.id === 4 ? 'active' : ''}">4. Nam Trung Bộ</a>
            <a href="region_5.html" class="chip ${region.id === 5 ? 'active' : ''}">5. Tây Nguyên</a>
            <a href="region_6.html" class="chip ${region.id === 6 ? 'active' : ''}">6. Đông Nam Bộ</a>
            <a href="region_7.html" class="chip ${region.id === 7 ? 'active' : ''}">7. ĐB Sông Cửu Long</a>
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
