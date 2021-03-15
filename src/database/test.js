const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {

    // inserir dados na tabela
    await saveOrphanage(db, {
        lat: "-16.1733128",
        lng: "-40.6895527",
        name: "Lar dos meninos",
        about: "Presta assistência a crianças de 06 a 15 anosque se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "33998335526",
        images: [
            "https://images.unsplash.com/photo-1604837394598-5b700b11f5e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080",

            "https://images.unsplash.com/source-404?fit=crop&fm=jpg&h=800&q=60&w=1200"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 18h até 8h",
        open_on_weekends: "0"
    })
        
    //consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    // // consultar somente 1 orphanato, pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
    console.log(orphanage)

    // deletar um dado da tabela
    // console.log(await db.run("DELETE FROM orphanages WHERE id = '6'"))
    // console.log(await db.run("DELETE FROM orphanages WHERE id = '7'"))
})