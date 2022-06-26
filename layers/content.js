module.exports = {
    metadataTemplate: (tokenId, attributes) => ({
        image: '<%IMAGE_URL%>',
        name: `NFT #${tokenId}`,
        attributes: attributes,
    }),
    layers: [
        // {
        //     name: "Background",
        //     probability: 1.0,
        //     options: [
        //         {
        //             name: "pink",
        //             file: "background/bg-1.PNG",
        //             weight: 1
        //         },
        //         {
        //             name: "red",
        //             file: "background/bg-2.PNG",
        //             weight: 1
        //         },
        //         {
        //             name: "blue",
        //             file: "background/bg-3.PNG",
        //             weight: 1
        //         },
        //         {
        //             name: "green",
        //             file: "background/bg-4.PNG", 
        //             weight: 1
        //         },
        //         {
        //             name: "purple",
        //             file: "background/bg-5.PNG",
        //             weight: 1
        //         }
        //     ]
        // },
        {
            name: "Body",
            probability: 1.0,
            options: [
                {
                    name: "purple",
                    file: "body/Body-1.PNG",
                    weight: 1
                },
                {
                    name: "orange",
                    file: "body/Body-2.PNG",
                    weight: 1
                },
                {
                    name: "red",
                    file: "body/Body-3.PNG",
                    weight: 1
                },
                {
                    name: "green",
                    file: "body/Body-4.PNG",
                    weight: 1
                },
                {
                    name: "blue",
                    file: "body/Body-5.PNG",
                    weight: 1
                }
            ]
        },
        {
            name: "Clothing",
            probability: 1.0,
            options: [
                {
                    name: "sweater",
                    file: "clothes/Cloth-1.PNG",
                    weight: 1
                },
                {
                    name: "tie",
                    file: "clothes/Cloth-2.PNG",
                    weight: 0.4
                },
                {
                    name: "gilette",
                    file: "clothes/Cloth-3.PNG",
                    weight: 1
                },
                {
                    name: "toga",
                    file: "clothes/Cloth-4.PNG",
                    weight: 1
                },
                {
                    name: "tank-top",
                    file: "clothes/Cloth-5.PNG",
                    weight: 1
                },
            ]
        },
        {
            name: "Eyes",
            probability: 1,
            options: [
                {
                    name: "manga",
                    file: "eyes/Eye-1.PNG",
                    weight: 1
                },
                {
                    name: "dark",
                    file: "eyes/Eye-2.PNG",
                    weight: 0.25
                },
                {
                    name: "cute",
                    file: "eyes/Eye-3.PNG",
                    weight: 1
                },
                {
                    name: "confused",
                    file: "eyes/Eye-4.PNG",
                    weight: 1
                },
                {
                    name: "lazy",
                    file: "eyes/Eye-5.PNG",
                    weight: 1
                },
                {
                    name: "cartoon",
                    file: "eyes/Eye-6-r.PNG",
                    weight: 1
                },
                {
                    name: "blind monk",
                    file: "eyes/Eye-7-r.PNG",
                    weight: .1
                },
                {
                    name: "smooth",
                    file: "eyes/Eye-8-r.PNG",
                    weight: .6
                },
                {
                    name: "superhero",
                    file: "eyes/Eye-9-r.PNG",
                    weight: .3
                },
                {
                    name: "vanilla",
                    file: "eyes/Eye-10-r.PNG",
                    weight: .2
                },
            ]
        },
        {
            name: "Mouth",
            probability: 1,
            options: [
                {
                    name: "Pervy",
                    file: "mouth/Mond-1.PNG",
                    weight: 1
                },
                {
                    name: "Angry",
                    file: "mouth/Mond-2.PNG",
                    weight: 1
                },
                {
                    name: "Sick",
                    file: "mouth/Mond-3.PNG",
                    weight: 1
                },
                {
                    name: "Confused",
                    file: "mouth/Mond-4.PNG",
                    weight: 1
                },
                {
                    name: "Full",
                    file: "mouth/Mond-5.PNG",
                    weight: 1
                },
                {
                    name: "Money Mouth",
                    file: "mouth/Mond-6-r.PNG",
                    weight: .2
                },
                {
                    name: "Tongue",
                    file: "mouth/Mond-7-r.PNG",
                    weight: .4
                },
                {
                    name: "Band-aid",
                    file: "mouth/Mond-8-r.PNG",
                    weight: .3
                },
                {
                    name: "Stitched",
                    file: "mouth/Mond-9-r.PNG",
                    weight: .2
                },
            ]
        },
    ]
}