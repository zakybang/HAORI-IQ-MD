const { sticker1, sticker5 } = require('../lib/sticker')

let handler = async (m, { conn }) => {
    let stiker = false
    try {
        let q = m.quoted ? m.quoted : m
        let mime = (q.msg || q).mimetype || ''
        if (/webp/.test(mime)) {
            let img = await q.download()
            if (!img) throw `reply sticker with command s`
            stiker = await sticker5(img, false, packname, author)
        } else if (/image/.test(mime)) {
            let img = await q.download()
            if (!img) throw `reply image with command s`
            stiker = await sticker5(img, false, packname, author)
        } else if (/video/.test(mime)) {
            if ((q.msg || q).seconds > 11) return m.reply('maksimal 10 detik!')
            let img = await q.download()
            if (!img) throw `reply video with command s`
            stiker = await sticker5(img, false, packname, author)
        } else if (m.quoted.text) {
            if (isUrl(m.quoted.text)) stiker = await sticker(false, m.quoted.text, packname, author)
            else throw 'URL is not valid! end with jpg/gif/png'
        }
    } catch (e) {
        throw e
    }
    finally {
        if (stiker) {
            m.reply(stiker_wait)
            await conn.sendFile(m.chat, stiker, '', '', m)
        }
        else {

            throw 0
        }
    }
}
handler.help = ['sticker']
handler.tags = ['sticker']
handler.command = /^(stiker|s|sticker)$/i
const { sticker1, sticker5 } = require('../lib/sticker') 

  let fs = require('fs')

  let fetch = require('node-fetch')

 let handler = async (m, { conn }) => { 

 	const ftoko = {

key: {

			fromMe: false,

			participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})

		},

		message: {

			"productMessage": {

				"product": {

					"productImage":{

						"mimetype": "image/jpeg",

						"jpegThumbnail": fs.readFileSync('./furry.png'), //Gambarnye

					},

					"title": `Hai ${conn.getName(m.sender)}`, //Kasih namalu 

					"description": `Nih Stikernya Dari Haori 🌠`, 

					"currencyCode": "Rp",

					"priceAmount1000": "500000",

					"retailerId": `ppk`,

					"productImageCount": 999999

				},

				    "businessOwnerJid": `0@s.whatsapp.net`

		}

	}

}

     let stiker = false 

     try { 

         let q = m.quoted ? m.quoted : m 

         let mime = (q.msg || q).mimetype || '' 

         if (/webp/.test(mime)) { 

             let img = await q.download() 

             if (!img) throw `reply sticker with command s` 

             stiker = await sticker5(img, false, packname, author) 

         } else if (/image/.test(mime)) { 

             let img = await q.download() 

             if (!img) throw `reply image with command s` 

             stiker = await sticker5(img, false, packname, author) 

         } else if (/video/.test(mime)) { 

             if ((q.msg || q).seconds > 11) return m.reply('maksimal 10 detik!') 

             let img = await q.download() 

             if (!img) throw `reply video with command s` 

             stiker = await sticker5(img, false, packname, author) 

         } else if (m.quoted.text) { 

             if (isUrl(m.quoted.text)) stiker = await sticker(false, m.quoted.text, packname, author) 

             else throw 'URL is not valid! end with jpg/gif/png' 

         } 

     } catch (e) { 

         throw e 

     } 

     finally { 

         if (stiker) { 

             await conn.reply(m.chat, global.stiker_wait, m, {

  contextInfo: { mentionedJid: [m.sender],

    externalAdReply :{

    mediaUrl: linkig,

    mediaType: 2,

    description: deslink , 

    title: titlink,

    body: wm, //`${fileSizeH}`,

    thumbnail: await(await fetch('https://telegra.ph/file/6d5133583d5eb78f5fe74.jpg')).buffer(),

    sourceUrl: linkgc

     }}

  })

             await conn.sendFile(m.chat, stiker, '', '', ftoko) 

         } 

         else { 

  

             throw 0 

         } 

     } 

 } 

 handler.help = ['sticker'] 

 handler.tags = ['sticker'] 

 handler.command = /^(stiker|s|sticker)$/i 

  

 module.exports = handler 

  

 const isUrl = (text) => { 

     return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png|mp4)/, 'gi')) 

 }
module.exports = handler

const isUrl = (text) => {
    return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png|mp4)/, 'gi'))
}
