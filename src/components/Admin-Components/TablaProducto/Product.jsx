import { useState } from "react";
import { Header } from "./Header";
import { Tabla } from "./Tabla";
export const Product = () => {
  const [productos, setProductos] = useState([
    {
      id: 1,
      name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      description:
        "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      Quantity: 120,
      price: 109.95,
    },
    {
      id: 2,
      name: "Mens Casual Premium Slim Fit T-Shirts ",
      description:
        "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      Quantity: 259,
      price: 22.3,
    }
    // {
    //   id: 3,
    //   name: "Mens Cotton Jacket",
    //   description:
    //     "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    //   Quantity: 500,
    //   price: 55.99,
    // },
    // {
    //   id: 4,
    //   name: "Mens Casual Slim Fit",
    //   description:
    //     "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    //   Quantity: 430,
    //   price: 15.99,
    // },
    // {
    //   id: 5,
    //   name: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    //   description:
    //     "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    //   Quantity: 400,
    //   price: 695,
    // },
    // {
    //   id: 6,
    //   name: "Solid Gold Petite Micropave ",
    //   description:
    //     "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    //   Quantity: 70,
    //   price: 168,
    // },
    // {
    //   id: 7,
    //   name: "White Gold Plated Princess",
    //   description:
    //     "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    //   Quantity: 400,
    //   price: 9.99,
    // },
    // {
    //   id: 8,
    //   name: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    //   description:
    //     "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    //   Quantity: 100,
    //   price: 10.99,
    // },
    // {
    //   id: 9,
    //   name: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
    //   description:
    //     "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other opeQuantity systems; Compatibility may vary depending on user’s hardware configuration and opeQuantity system",
    //   Quantity: 203,
    //   price: 64,
    // },
    // {
    //   id: 10,
    //   name: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    //   description:
    //     "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive, OS and application).",
    //   Quantity: 470,
    //   price: 109,
    // },
    // {
    //   id: 11,
    //   name: "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    //   description:
    //     "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
    //   Quantity: 319,
    //   price: 109,
    // },
    // {
    //   id: 12,
    //   name: "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    //   description:
    //     "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
    //   Quantity: 400,
    //   price: 114,
    // },
    // {
    //   id: 13,
    //   name: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    //   description:
    //     "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
    //   Quantity: 250,
    //   price: 599,
    // },
    // {
    //   id: 14,
    //   name: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
    //   description:
    //     "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
    //   Quantity: 140,
    //   price: 999.99,
    // },
    // {
    //   id: 15,
    //   name: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    //   description:
    //     "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
    //   Quantity: 235,
    //   price: 56.99,
    // },
    // {
    //   id: 16,
    //   name: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    //   description:
    //     "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
    //   Quantity: 340,
    //   price: 29.95,
    // },
    // {
    //   id: 17,
    //   name: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    //   description:
    //     "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
    //   Quantity: 679,
    //   price: 39.99,
    // },
    // {
    //   id: 18,
    //   name: "MBJ Women's Solid Short Sleeve Boat Neck V ",
    //   description:
    //     "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
    //   Quantity: 130,
    //   price: 9.85,
    // },
    // {
    //   id: 19,
    //   name: "Opna Women's Short Sleeve Moisture",
    //   description:
    //     "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
    //   Quantity: 146,
    //   price: 7.95,
    // },
    // {
    //   id: 20,
    //   name: "DANVOUY Womens T Shirt Casual Cotton Short",
    //   description:
    //     "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
    //   Quantity: 145,
    //   price: 12.99,
    // },
  ]);
  const agregarProducto = (nuevoProducto) => {
    setProductos([...productos, nuevoProducto]);
  };
  const eliminarProducto = (id) => {
    const productosFiltrados = productos.findIndex((producto) => producto.id === id);
    if (productosFiltrados !== -1) {
      const nuevosProductos = [...productos]
      nuevosProductos.splice(productosFiltrados, 1);
      setProductos(nuevosProductos);
    }
  }
  const editarProducto = (id, nuevoDatosProducto) => {
    const indiceProducto = productos.findIndex((producto) => producto.id === id);
    if (indiceProducto !== -1) {
      const nuevosProductos = [...productos];
      nuevosProductos[indiceProducto] = { ...nuevosProductos[indiceProducto], ...nuevoDatosProducto };
      setProductos(nuevosProductos);
    } else {
      console.error(`No se encontró ningún producto con el id ${id}`);
    }
  };
  const vaciarProductos = () => {
    setProductos([]);
  }
  return (
    <div className="font-PrincipalFont w-[80%]">
      <Header agregarProducto={agregarProducto} productos={productos} vaciarProductos={vaciarProductos} />
      <Tabla
        productos={productos}
        eliminarProducto={eliminarProducto}
        editarProducto={editarProducto}
      />
    </div>
  );
};
