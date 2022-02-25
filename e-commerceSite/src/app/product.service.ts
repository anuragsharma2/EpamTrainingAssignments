import { Injectable } from '@angular/core';
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  products=[
    {id:1,productTitle:"AXE Men's Grooming Kit",rating:4,productCost:532,productCategory:"mens",productImages:["https://rukminim1.flixcart.com/image/416/416/klb78nk0/combo-kit/7/s/u/men-s-grooming-kit-adfp18a-axe-original-imagygpkbcunpuzg.jpeg?q=70"],productDescription:"Axe presents a brand-new innovation in the mens grooming range, the Axe grooming kit! Built to keep you ready on the go, this stylish, portable kit contains all the essentials a man on the move needs."},
    {id:2,productTitle:"NOVAGE Men SET",rating:3.5,productCost:4800,productCategory:"mens",productImages:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2TSYdRvupyeN8vLpzuOzWUQQKY9eQHO2ooq__qPWKlP4EOf7NYZrMypLpKuX6V55xyT4&usqp=CAU"],productDescription:"The NovAge Men Set is engineered specifically for male skin to fight signs of ageing and tiredness. Skin is left feeling energised, fresher, smoother and younger looking."},
    {id:3,productTitle:"Men's Cotton Check Shirts",rating:4.2,productCost:350,productCategory:"mens",productImages:["https://5.imimg.com/data5/YU/MT/NS/SELLER-3664875/mens-shirts-500x500.jpg"],productDescription:"men's cotton  casual check shirts full sleeve black and white check shirt casual wear"},
    {id:4,productTitle:"Cotton Polyester Blend Color Block Shirt Fabric ",rating:4.3,productCost:163,productCategory:"mens",productImages:["https://rukminim1.flixcart.com/image/800/960/kuof5ow0/fabric/d/z/8/no-2-35-m-unstitched-na-heart-fabfiza-original-imag7qymztgegz3m.jpeg?q=50","https://rukminim1.flixcart.com/image/800/960/kuof5ow0/fabric/k/0/u/no-2-35-m-unstitched-na-heart-fabfiza-original-imag7qym9gqgqffh.jpeg?q=50"],productDescription:"Type Shirt Fabric Sales Package 1 Shirt Fabric Ideal For Men Occasion Casual Fabric Care Dry clean only Style Code Break B Bottom Length NA Dupatta Length NA Top Length 2.35 m Color Black, Green Fabric Cotton Polyester Blend Pattern Color Block Stitching Type Unstitched Pattern/Print Type Digital Prints Trijal Fab Provided Best Quality Product."},
    {id:5,productTitle:"Slim Men Grey Jeans",rating:4.4,productCost:974,productCategory:"mens",productImages:["https://rukminim1.flixcart.com/image/800/960/kxqg2a80/jean/a/z/q/32-praw21jn0130a-provogue-original-imaga4jds5g7wrmu.jpeg?q=50"],productDescription:"Style Code PRAW21JN0130A Ideal For Men Suitable For Western Wear Pack Of 1 Pocket Type Coin Pocket, Curved Pocket, Patch Pocket Reversible No Sales Package 1 Jean Closure Button"},
    {id:6,productTitle:"PARK AVENUE Relaxed Men Grey Rayon Crepe Blend Trousers",rating:3.3,productCost:1439,productCategory:"mens",productImages:["https://5.imimg.com/data5/YU/MT/NS/SELLER-3664875/mens-shirts-500x500.jpg"],productDescription:"Fit Relaxed Occasion Formal Color Grey Pack of 1 Type Formal Trouser Suitable For Western Wear Belt Loops Yes Rise Midk"},
    {id:7,productTitle:"Men Cargos",rating:4.4,productCost:450,productCategory:"mens",productImages:["https://rukminim1.flixcart.com/image/800/960/kh80vww0-0/cargo/d/x/u/30-army-cargo-elitify-original-imafxa4xemhsvhjk.jpeg?q=50"],productDescription:"Fit Regular Color Multicolor Fabric Cotton Fabric Care Cotton Sales Package 1 Cargo Pattern Printed This classic cargo pant is constructed with durable materials built for long-lasting comfort and breathability. Made with a relaxed fit and straight leg, this cargo pant sits at the natural waist and features a relaxed fit seat and thigh."},
    {id:8,productTitle:"UNISEX LED WATCH-01 + STYLISH BLACK WAYFARER SUNGLASS-01 + BASEBALL ADJUSTABLE Cap ",rating:3.5,productCost:350,productCategory:"mens",productImages:["https://rukminim1.flixcart.com/image/800/960/kydb3ww0/cap/g/l/s/free-combo-pac-of-3-flexcy-original-imagamdefy7yhdfd.jpeg?q=50"],productDescription:"Fabric cotton Color Black Style code COMBO PAC OF 3 Occasion Casual, Formal, Lounge Wear, Sports"},
    {id:9,productTitle:"Men Argyle Mid-Calf/Crew  (Pack of 4)",rating:4.0,productCost:156,productCategory:"mens",productImages:["https://rukminim1.flixcart.com/image/800/960/ky3b0y80/sock/9/k/p/free-4-ws-cross-long-wildstuff-original-imagaenhaahg3tqg.jpeg?q=50"],productDescription:"These socks are manufactured by the automatic machines in the guidelines of proper managers and engineers which ensure that our customers get the superior quality of socks and would buy from us regularly. WILDSTUFF is a trusted brand from India which manufactures a lot of range of products from clothing and accessories. WILDSTUFF introduces you with the wide range of cotton socks for men and women made up with 7 quality checks in leadership of professionals. We take care of our customers to ensure that they get maximum satisfaction with our product."},
    {id:10,productTitle:"MENSOME Brass Tie & Cufflink  (Purple)",rating:4.6,productCost:945,productCategory:"mens",productImages:["https://rukminim1.flixcart.com/image/832/832/krxtrww0/tie/z/u/o/free-polka-dot-neck-tie-gift-set-with-pocket-square-and-lapel-original-imag5m55y68f4fbv.jpeg?q=70"],productDescription:"Model Name Tie Pocket Square Lapel Pin Set Style Code MNSM-MDFL17 Other Features 1 Neck Tie, 1 Pocket Square, 1 Lapel Pin, 1 Designer Box Sales Package 1 Neck tie, 1 Designer Gift Box, 1 Pocket square, 1 Flower brooch"},
    {id:11,productTitle:"Plain Fashion Tissue Silk Saree  (Pink)",rating:4.4,productCost:299,productCategory:"womens",productImages:["https://rukminim1.flixcart.com/image/800/960/kyq62kw0/sari/b/8/9/free-hf330-hinayat-fashion-unstitched-original-imagaw5bf3gwgyz4.jpeg?q=50"],productDescription:"Style Code HF330 Pattern Plain Pack of 1 Occasion Party & Festive, Casual Fabric Care Hand Wash Fabric Tissue Silk Type Fashion Blouse Piece Unstitched Sari Style Regular Sari Sari Length 5.5m Blouse Piece Length 0.8 m Weight 0.35 kg"},
    {id:12,productTitle:"Women Grey Hand-held Bag  (Pack of: 3)",rating:3.8,productCost:389,productCategory:"womens",productImages:["https://rukminim1.flixcart.com/image/800/960/kziqvm80/hand-messenger-bag/t/u/s/pu-leather-latest-handbags-for-women-s-ladies-combo-of-3-35-grey-original-imagbgq7qfxffug8.jpeg?q=50"],productDescription:"Model Name PU Leather Latest Handbags For Women's Ladies Combo Of 3 Number of Compartments 1 Capacity 5 L Material Leatherette Number of Pockets 1 Width 35 cm Height 35 cm Closure Zip Pack of 3 Color Grey"},
    {id:13,productTitle:"Women Kurta and Trousers Set Art Silk",rating:3.0,productCost:1499,productCategory:"womens",productImages:["https://rukminim1.flixcart.com/image/800/960/kltryq80/ethnic-set/f/i/9/xxl-vkbd112510227-vkbd112510228-vkbd112510229-varanga-original-imagyv8qgnfbdyfh.jpeg?q=50","https://rukminim1.flixcart.com/image/452/542/kltryq80/ethnic-set/g/t/0/xxl-vkbd112510227-vkbd112510228-vkbd112510229-varanga-original-imagyv8qcaqhtutz.jpeg?q=50"],productDescription:"Fabric Art Silk Type Kurta and Trousers Set Sales Package 1 Style Code VKBD112510227_VKBD112510228_VKBD112510229 Secondary color Gold Top fabric Art Silk Bottom fabric Silk Top type Kurta Bottom type Trouser Pattern Embroidered Color Purple Neck Round Neck Fabric care Hand Wash Other Details Magenta Zari And Gota Patti Embroidery Kurta With Trouser Magenta Zari And Gota Patti Embroidery Kurta With Trouser With Multi Color Silk Dupatta,"},
    {id:14,productTitle:"Regular Fit Women Maroon Cotton Blend Trousers",rating:3.5,productCost:532,productCategory:"womens",productImages:["https://rukminim1.flixcart.com/image/800/960/k6zda4w0/trouser/m/q/j/m-jkpat0115-jaipur-kurti-original-imafpbpcykthwyfk.jpeg?q=50"],productDescription:"The product might have slight shade, print and embroidery variation as all our products are hand dyed, printed and hand work. Mangalgiri and handloom south cotton came with natural slabs and weave irregularities.Jaipur Kurti Women's Solid Maroon cotton slub pants with bottom fold, pleats detailing on front, 2 side pockets, back elastic."},
    {id:15,productTitle:"Boots For Women  (Tan)",rating:4.3,productCost:849,productCategory:"womens",productImages:["https://rukminim1.flixcart.com/image/800/960/kh80vww0-0/shoe/n/t/z/ts47-026-8-trase-brown-original-imafxa3fzvhzj8ax.jpeg?q=50"],productDescription:"Color Tan Outer material Synthetic Leather Ideal for Women Occasion Casual Heel Pattern Embossed Closure Zip, Buckle Upper Pttern Textured"},
    {id:16,productTitle:"Barfi-02 Grey Casual sneakers for ladies ",rating:4.0,productCost:209,productCategory:"womens",productImages:["https://rukminim1.flixcart.com/image/800/960/k186fm80/shoe/4/9/9/barfi-02cgrey-5-asian-grey-original-imafkufkwjcgbttj.jpeg?q=50"],productDescription:"Barfi-02 Grey Casual sneakers for ladies | sports shoes for women without laces | Running shoes for girls stylish latest design new fashion | Slip on black shoes for jogging, walking, gym & party"},
    {id:17,productTitle:"ZULLA STAYLE Queen 2020 Analog Watch - For Women",rating:4.3,productCost:189,productCategory:"womens",productImages:["https://rukminim1.flixcart.com/image/800/960/watch/b/v/z/zulla-stayle-true-colors-original-imaegh3gqxpaghnb.jpeg?q=50"],productDescription:"Water Resistant No Display Type Analog Style Code ZULLA STAYLE Series Queen 2020 Occasion Party-Wedding Watch Type Wrist Watch Pack of 1 Sales Package 1 watch Shock Resistance No Calendar No Scratch Resistant No Mechanism Quartz Strap Color Gold Strap Material Metal Strap World Time No Dual Time No Strap Type Bracelet Strap Design Mesh Case/Bezel Material stainless steel case Water Resistance Depth 20 Novelty Features Gold & Diamond Sticked Power Source Battery Powered Power Reserve Indicator No Date Display No Compass No Clasp Type Buckle Alarm Clock No Box Material Paper Box Dial Color White Weight 0.3 g Warranty Period 6 Months"},
    {id:18,productTitle:"Pure Cotton Solid Women ['White'] Salwar",rating:4.0,productCost:178,productCategory:"womens",productImages:["https://rukminim1.flixcart.com/image/800/960/kd3f3bk0/patiala/p/s/b/xxl-women-girls-nakaash-original-imafu2qz3hmsgbvr.jpeg?q=50"],productDescription:"Cotton Salwar, Featuring a solid design with excellent finish, crafted from 100% cotton fabric this regular-fit salwar also assures ultimate comfort. This regular-fit salwar by Trendzmy is a must-have in your ethnic closet. Designed with perfection, it’s an ideal pick for Casual Wear to complete your look for the day.Brand : Trendzmy Material : Super Rich 100% Cotton Fit : As Expected 100% Salwar Lenth : 40 inches, Stiching : Full Interlock stiching, Occasion : Formal and Casual Wear,Closur Type : Drawstring (Pant Rope) Salwar Size : Free Size Type : Ethnic Wear , Pattern : Solid, In The Box : 1 Salwar, Wash Care : Wash Separately in Lukewarm Water Do Not Bleach It It is crafted from comfortable cotton Fabric. It is Styled With Elegant and Graceful Pleats To Be Won With All Type of Tops & Kurties This attractive Salwar will surely fetch you compliments for your rich sense of style. Disclaimer : The product colour may be it seams little bit different due to photography lighting and due to monitor colour setting For Quality Faith Trendzmy name is enough Our philosophy is Trust is Traditon."},
    {id:19,productTitle:"Boots For Women  (Black)",rating:4.2,productCost:300,productCategory:"womens",productImages:["https://rukminim1.flixcart.com/image/800/960/k3hmj680/shoe/a/j/h/jd-001-37-aasheez-black-original-imafmkvasw3wghg9.jpeg?q=50"],productDescription:"Color Black Outer material PU Ideal for Women Occasion Casual Weight 450 g (per single Shoe) - Weight of the product may vary depending on size. pack of 1 AASHEEZ CASUAL COMFORT WOMEN FOOTWEAR"},
    {id:20,productTitle:"Romantic 925 Sterling Silver Love Heart Endless",rating:4.4,productCost:1000,productCategory:"womens",productImages:["https://rukminim1.flixcart.com/image/800/960/k47cgi80/ring/5/p/u/adjustable-shivring08-ring-set-shiv-jagdamba-original-imafn5eysaqymmqn.jpeg?q=50"],productDescription:"Brand Shiv Jagdamba Model Name Romantic 925 Sterling Silver Love Heart Endless love Wedding Lovers Couple Rings For Valentine's Day Jewelry Model Number Shivring08 Type Ring Set Color Silver Ideal For Boys, Men, Girls, Women Collection Ethnic Occasion Wedding & Engagement, Love"},
    {id:21,productTitle:"Velcro Sports Sandals For Boys  (Red)",rating:4.5,productCost:259,productCategory:"kids",productImages:["https://rukminim1.flixcart.com/image/800/960/kql8sy80/sandal/r/s/q/10-combo-2127-10-kaneggye-red-orange-original-imag4kb8hypqydxh.jpeg?q=50"],productDescription:"Number of Pairs 1 Brand Kaneggye Style Code 2127-sportss-sandal Size 10 Brand Color Red Ideal For Boys Type Sports Sandals Closure Type Velcro Heel Type Flat Base Material PVC Strap Material Nylon Character Angry Birds Primary Color Red Sole Material PVC"},
    {id:22,productTitle:"Wishkey Remote Control Super High Speed Racing Car ",rating:4.4,productCost:674,productCategory:"kids",productImages:["https://rukminim1.flixcart.com/image/832/832/kvwpt3k0/remote-control-toy/e/8/h/remote-control-super-high-speed-racing-car-with-stylish-looks-original-imag8phprv3uatzh.jpeg?q=70"],productDescription:"Light up any child's face and make their day complete when presenting this as the ultimate birthday or Christmas gift!.Give your child the toy that will boost self-esteem and fine-tune hand-eye coordination skills. Watch him build confidence, and let him impress you with all the neat tricks he'll learn!.An ultra-durable build and easy-to-use controller makes the RC Beast a wonderful choice for kids of all ages.This complete set contains everything you need to start racing right out of the box! .Wishkey remote control high speed racing Car.Remote provide four direction support for forward, backward left turn and right turn.it has good speed to give super duper effect. Car is always kids first choice. It has a look of modern car with durable quality. Remote has a short range with wire for kids to play. Create memorable times beyond the vicinity of your home. Improve coordination in kids. Helping your little ones grow independent indulge in these powerful games and enjoy sheer thrill and action packed activity games. Please note that this product comes in different prints and colour of the product may vary according to the availability of the product.The pack includes 3 rechargeable batteries for the car.The requires 2 batteries, which are not included, you will have to buy them separately"},
    {id:23,productTitle:"WECAN FASHION Magnetic Educational Toys ",rating:4.1,productCost:287,productCategory:"kids",productImages:["https://rukminim1.flixcart.com/image/832/832/kesv0y80/board-game/b/p/j/magnetic-chess-board-with-folding-smooth-surface-black-and-white-original-imafvehagtzatcat.jpeg?q=70"],productDescription:"The chess set Made of durable HIPS plastic with Fine texture, gives you smooth hand-feel while lightweight and portable; well-crafted chess pieces make it much more deluxe. The chess board every individual pieces have a light magnetic attraction to the 64-square playing field; light magnetism would make it stable to play while not hard to move the piece. Open size of Chessboard is 9.84 x 9.84 x 0.78 Inches. This perfectly sized Chessboard is small enough to travel with. The magnetic chess set Foldable design - chess pieces can be put into the chessboard for easy storage. Novel style - suitable for home, company, school, journey, bus or picnic. All ages are available. Take the chess set outdoor at weekend, either for a picnic or rest in the park. Play the chess game with your family or friend, enjoy a quiet and happy weekend."},
    {id:24,productTitle:"Little Olive Scooter For Kids 3 Years Above 4 Level Height",rating:4.0,productCost:989,productCategory:"kids",productImages:["https://rukminim1.flixcart.com/image/832/832/ks6ef0w0/outdoor-toy/n/i/u/scooter-for-kids-3-years-above-4-level-height-pu-wheels-with-original-imag5t3ahqruxgth.jpeg?q=70"],productDescription:"Highest level of safety certification – Our scooters comply with EN71, IS, and BIS certifications. This makes it one of the safest products in the market. Innovative Design with Intelligent Turning - Eye catching design with florescent colors and easy to learn model. Its unique design allows little one to start riding it without even learning how to balance, which makes it safe for little one around 3 yrs. Child can control the turning and balance easily by physical inclination PU Wheels - PU Wheels for smooth ride. Scooter can be used indoors too as it will not leave any mark on tiles due to high quality PU Wheels. Smooth and Fast Ride – Used ABEC 7 Bearing for Fast Ride and Ultra Smooth Experience while riding. Wide deck - 3 Wheel scooter features streamlined new deck which is sturdy enough with weight capacity of 75 kgs and provides enough space to ride the scooter with ease. No need for a kick stand or for unbalanced riding. Wide deck and 3-wheel design make riding fun and easy for kids of any skill level. Simply hop on and start scooting"},
    {id:25,productTitle:"EL FIGO PINK TEDDY BOY  (Pink)",rating:4.2,productCost:314,productCategory:"kids",productImages:["https://rukminim1.flixcart.com/image/832/832/kmjhw280/doll-doll-house/n/u/a/pink-teddy-boy-el-figo-original-imagfeyqhxndkhhp.jpeg?q=70"],productDescription:"This teddy dress baby boy is perfect toy for kids and toddlers. It enhances their imagination and help them in role play. Kids will enjoy its company while bathing or playing."},
    {id:26,productTitle:"FABER-CASTELL School Set",rating:4.3,productCost:80,productCategory:"kids",productImages:["https://rukminim1.flixcart.com/image/832/832/k3670cw0/school-set/y/c/c/school-essentials-kit-faber-castell-original-imafmdf8czhafvfn.jpeg?q=70"],productDescription:"5 Writing Pencils || 5 Ballpoint Pens|| 1 Eraser|| 1 Textliner|| 1-15 cm Ruler|| 1 Sharpener|| 1 Multimarker Fine"},
    {id:27,productTitle:"Lace Running Shoes For Boys & Girls  (Black)",rating:4.1,productCost:699,productCategory:"kids",productImages:["https://rukminim1.flixcart.com/image/800/960/kplisnk0/shoe/y/o/q/9-2002-terfill-black-original-imag3sstzxwjgyy7.jpeg?q=50"],productDescription:"Number of Pairs 1 Brand TERFILL Style code camps-black Size 4 Brand color BLACK Ideal for Boys & Girls Type Sports Wear Subtype Running Shoes Primary color Black Closure Type Lace Outer material Mesh Sole material Airmix Insole material Sponge Inner lining CANVAS Removable Insole No Character Batman Care Instructions AFTER USE KEEP IN BOX."},
    {id:28,productTitle:"Multi-Function Stylish Sports Militaries",rating:3.9,productCost:280,productCategory:"kids",productImages:["https://rukminim1.flixcart.com/image/800/960/krz97rk0/watch/a/d/u/abx1017-gents-green-solitary-camouflage-pattern-new-generation-original-imag5n3muvcb3xtv.jpeg?q=50"],productDescription:"VKRDGC810 Multi-Function Stylish Sports Militaries New Arrival Silicon Strap Digital Pack of 2 Combo Men And Boys Hot And Cool Best Quality Evers New Year Fashion Sports Digital Stylish Lights New Generation Amazing Look Cool Style Digital Watch Digital Watch - For Boy"},
    {id:29,productTitle:"kluzie Extremely Smooth 3x3 Speed Magic Cube ",rating:4.6,productCost:130,productCategory:"kids",productImages:["https://rukminim1.flixcart.com/image/832/832/kjkbv680-0/puzzle/h/s/v/1-newest-3x3-speed-magic-cube-professional-magic-square-cube-original-imafz3tk6bxfzqfu.jpeg?q=70"],productDescription:"100% BRAND NEW speed cube for high stability smooth movement for faster performance and durability specially designed for masterminds .Develops your child's concentration, patience, problem solving, logical and hands on skills no of pieces 26.This revolutionary design allows not only for faster turning parts but also balances fantastic corner cutting with no pop technology."},
    {id:30,productTitle:"HATELLO Light and Sound Toys for Kids | Musical Toy | Light and Music ",rating:3.9,productCost:314,productCategory:"kids",productImages:["https://rukminim1.flixcart.com/image/832/832/k8ndrww0/remote-control-toy/7/h/r/light-and-sound-toys-for-kids-musical-toy-light-and-music-best-original-imafqmkmxuuujyyz.jpeg?q=70"],productDescription:"General Type Planes & Helicopters Rechargeable Yes Material Plastic Minimum Age 3 years Power Features Battery Type for Toy 3 x AA Batteries Product Dimensions Product Width 12 cm Product Height 15 cm Product Weight 100 g"},
    {id:31,productTitle:"OnePlus Bullets Wireless Z Bass Edition Bluetooth Headset  (Reverb Red, In the Ear)",rating:4.3,productCost:1999,productCategory:"electronics",productImages:["https://rukminim1.flixcart.com/image/832/832/kg8avm80-0/headphone/2/p/r/e304a-oneplus-original-imafwgkvchwhf63s.jpeg?q=70"],productDescription:"The Bullets Wireless Z Bass Edition will enhance the way you listen to music, with its convenient features such as the Magnetic Control. This pair of earphones supports Bluetooth (v5.0). Oh, and it offers a playback time of up to 17 hours when it is fully charged."},
    {id:32,productTitle:"SAMSUNG Galaxy S21 FE 5G (Lavender, 128 GB)  (8 GB RAM)",rating:4.1,productCost:59999,productCategory:"electronics",productImages:["https://rukminim1.flixcart.com/image/832/832/kzpw2vk0/mobile/u/o/q/galaxy-s21-fe-5g-lavender-8gb-128gb-storage-sm-g990elviinu-original-imagbnbdaj3tygup.jpeg?q=70"],productDescription:"1.Pro-grade Camera with AI Single Take, Portrait Mode, Night Mode and 30X Space zoom. Dual Recording: Film in both wide and selfie angles at the same time | 12MP F1.8 Main Camera (Dual Pixel AF & OIS) + 12MP UltraWide Camera (123° FOV) + 8MP Telephoto Camera (3x Optic Zoom, 30X Space Zoom, OIS) | 32 MP F2.2 Front Camera 2.5G Ready with Octa-core Exynos 2100 (5nm) Processor. Android 12 operating system. Dual Sim. 3.Iconic Contour Cut Design with 7.9 mm thickness. Gorilla Glass Victus and IP68 Water Resistant . 4.4500 mAh battery with Super Fast Charging & Fast Wireless Charging. Wireless PowerShare to charge your compatible devices using your phone. Samsung DeX connectivity. Stereo Speakers sound by AKG. Dolby Atmos."},
    {id:33,productTitle:"Redmi 9A (SeaBlue, 32 GB)  (2 GB RAM)",rating:4.3,productCost:7719,productCategory:"electronics",productImages:["https://rukminim1.flixcart.com/image/832/832/kesv0y80/mobile/w/g/r/mi-redmi-9a-b08696xb4b-original-imafve7pjpemhwk5.jpeg?q=70"],productDescription:"13MP rear camera with AI portrait, AI scene recognition, HDR, pro mode | 5MP front camera 16.58 centimeters (6.53 inch) HD+ multi-touch capacitive touchscreen with 1600 x 720 pixels resolution, 268 ppi pixel density and 20:9 aspect ratio Memory, Storage & SIM: 3GB RAM, 32GB internal memory expandable up to 512GB | Dual SIM (nano+nano) + Dedicated SD card slot Android v10 operating system with upto 2.0GHz clock speed Mediatek Helio G25 octa core processor 5000mAH lithium-polymer large battery with 10W wired charger in-box 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase"},
    {id:34,productTitle:"APPLE Watch Series 3 GPS - MTF32HN/A 42 mm Space Grey Aluminium Case with Black Sport Band  (Black Strap, Regular)",rating:4.6,productCost:23900,productCategory:"electronics",productImages:["https://rukminim1.flixcart.com/image/832/832/jmi22kw0/smartwatch/y/d/j/mtf32hn-a-apple-original-imaf9ec8ssmfcuxf.jpeg?q=70"],productDescription:"The Apple Watch Series 3 is a sleek accessory that's a must-have if you're all about staying fit. The watch features an enhanced Heart Rate app, and a built-in altimeter. Also carry and listen to your favourite songs on your wrist. Equipped with Siri, this smartwatch makes being active and staying connected enjoyable."},
    {id:35,productTitle:"Epson L3250 Multi-function WiFi Color Printer  (Black, Ink Bottle)",rating:4.4,productCost:15299,productCategory:"electronics",productImages:["https://rukminim1.flixcart.com/image/832/832/kwwfte80/printer/p/2/m/l3250-epson-original-imag9gz583ngrry2.jpeg?q=70"],productDescription:"Printing Method Inkjet Type Multi-function Model Name L3250 Printing Output Color Brand Epson Refill Type Ink Bottle Ideal Usage Home & Small Office Dimensions And Weight Height 38.7 cm Width 17.95 cm Weight 4.4 kg Depth 39.1 cm"},
    {id:36,productTitle:"acer Predator Helios 300 Core i7 11th Gen - (16 GB/1 TB HDD/512 GB SSD/Windows 10 Home/6 GB Graphics/NVIDIA GeForce RTX 3060/165 Hz)",rating:4.6,productCost:100990,productCategory:"electronics",productImages:["https://rukminim1.flixcart.com/image/832/832/ksgehzk0/computer/r/c/k/predator-helios-300-gaming-laptop-acer-original-imag6yjdmwdrksyn.jpeg?q=70"],productDescription:"To keep your gaming sessions cool and exciting, this laptop features three thermal solutions. Also, the new design of the 5th Gen AeroBlade 3D fan increases airflow, lowers noise, and optimises the cooling performance. This laptop also comes with CoolBoost technology that ensures that the fans are adjusted to keep important areas of the laptop continually cool."},
    {id:37,productTitle:"Nokia 139 cm (55 inch) Ultra HD (4K) LED Smart Android TV with Sound by JBL  (55CAUHDN)",rating:3.9,productCost:22999,productCategory:"electronics",productImages:["https://rukminim1.flixcart.com/image/832/832/k3xcdjk0/television/r/5/h/nokia-55cauhdn-original-imafmxw7qfxh6b7a.jpeg?q=70"],productDescription:"Bring home this Nokia Smart TV and transform your entertainment experience. With features such as Intelligent Dimming, DTS Trusurround, and Dolby Audio, get ready for a truly cinematic experience. What's more? With Google Assistant's voice command interface, finding your favourite TV shows and movies is a piece of cake."},
    {id:38,productTitle:"Canon EOS 3000D DSLR Camera 1 Camera Body, 18 - 55 mm Lens  (Black",rating:4.4,productCost:27999,productCategory:"electronics",productImages:["https://rukminim1.flixcart.com/image/832/832/jfbfde80/camera/n/r/n/canon-eos-eos-3000d-dslr-original-imaf3t5h9yuyc5zu.jpeg?q=70"],productDescription:"If you are a photography enthusiast, then the Canon EOS 3000D DSLR Camera is a must-have gadget. Featuring an 18 MP (APS-C) CMOS sensor and the DIGIC 4+ imaging processor, you can capture amazing photos of your subject at all times, even in low-light conditions. Moreover, the remote Live View function lets you control this camera remotely using your smartphone so you can capture amazing photos even from a distance."},
    {id:39,productTitle:"SONY SA-D40 80 W Bluetooth Home Theatre ",rating:4.4,productCost:8490,productCategory:"electronics",productImages:["https://rukminim1.flixcart.com/image/832/832/jvmpci80/speaker/home-audio-speaker/w/h/5/sony-sa-d40-original-imaffmj7yuzjzyhg.jpeg?q=70"],productDescription:"Experience a high-fidelity, thrilling, cinematic audio experience from the comfort of your couch by bringing home this Sony home audio speaker. Movies, videos, and music will get a new dimension, thanks to the 4.1 channel audio system. With Bluetooth connectivity, you can easily pair your device to this speaker, play your favorite tunes, and groove to the powerful sound."},
    {id:40,productTitle:"APPLE iPad (9th Gen) 64 GB ROM 10.2 inch with Wi-Fi Only (Space Grey)",rating:4.7,productCost:30900,productCategory:"electronics",productImages:["https://rukminim1.flixcart.com/image/832/832/ktop5e80/tablet/x/9/o/mk2k3hn-a-apple-original-imag6yy7xjjugz4w.jpeg?q=70"],productDescription:"Video Calling: FaceTime Video, Centre Stage, iPad to any FaceTime-enabled Device over Wi-Fi or Mobile Data, Audio Calling: FaceTime Audio, iPad to any FaceTime-enabled Device over Wi-Fi or Mobile Data, Stereo Speakers, Dual Microphones for Calls, Video Recording and Audio Recording, Digital Compass, iBeacon Micro-location"}

  ]
  cartProducts:Product[]=[];
  cartMap=new Map();
  cartTotal:number=0;
  getProductByName(pname:string,products:Product[]):Product[]{
    let gotProductByName=products.filter( 
      (product)=>{
        return product.productTitle.toUpperCase().includes(pname.toUpperCase());
      })
      return gotProductByName;
  }
  getProductByStartingPrice(productStartingPrice:number,products:Product[]){
    let gotProductByStartingPrice=products.filter(
      (product)=>{
        return product.productCost>=productStartingPrice;
      }
    )
    return gotProductByStartingPrice;
  }
  getProductByEndingPrice(productEndingPrice:number,products:Product[]){
    if(!productEndingPrice){
      return this.products;
    }
    let gotProductByEndingPrice=products.filter(
      (product)=>{
        return product.productCost<=productEndingPrice;
      }
    )
    return gotProductByEndingPrice;
  }
  getProductByPriceRange(productStartingPrice:number|'',productEndingPrice:number|'',products:Product[]){
    let gotProductsByPriceRange=products.filter(
      (product)=>{
        return product.productCost<=productEndingPrice && product.productCost>=productStartingPrice;
      }
    )
    return gotProductsByPriceRange;
  }
  getMensProducts(){
    let gotCategoryProducts=this.products.filter(
      (product)=>{
        return product.productCategory=="mens";
      }
    )
    return gotCategoryProducts;
  }
  getWomensProducts(){
    let gotCategoryProducts=this.products.filter(
      (product)=>{
        return product.productCategory=="womens";
      }
    )
    return gotCategoryProducts;
  }
  getKidsProducts(){
    let gotCategoryProducts=this.products.filter(
      (product)=>{
        return product.productCategory=="kids";
      }
    )
    return gotCategoryProducts;
  }
  getElectronicsProducts(){
    let gotCategoryProducts=this.products.filter(
      (product)=>{
        return product.productCategory=="electronics";
      }
    )
    return gotCategoryProducts;
  }
  defineCartQuantity(){ 
    for(let i of this.cartProducts){
       this.cartMap.set(i,1)
      }
    for(let i of this.cartProducts){
       this.cartMap.set(i,this.cartMap.get(i)+1)
      }
    for(let i of this.cartMap){
       this.cartMap.set(i[0],i[1]-1)
      }
    }
}

