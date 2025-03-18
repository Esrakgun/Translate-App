
// Burada Aksiyonumuzu hazırlıcaz..Ardından Aksiyonumuzu Tetiklicez ve Reducerı güncellicez.

import { createAsyncThunk } from "@reduxjs/toolkit";
import api from './../../utils/api';

// CreateAsyncthunk methodu asekron thunk aksiyonu olusturma metodu olarak geçer. Aksiyonunda (type ve payload) vardır benden bunları yazmamı ister..Slice'ın name-i ve aksiyonun ismini birleştirip bır type adı yazmıs oluyoruz "language/getLanguages" bunun gibi , ikinci kıısm d abır fonskıyon oluyor payload kısmı ..

export const getLanguages = createAsyncThunk("language/getLanguages", async () => {

    // Api'dan Dil Verilerini alıp:
    const res = await api.get("/getLanguages");


    // Aldığı VErileri Payload olarak belirle:

    return res.data.data.languages;

});



export const translateText = createAsyncThunk("translate/translateText",
    async (arg, { getState }) => {
        // Aksiyon içerisinde store'a abone olmaya yararıyor:
        const { translate } = getState();
        // console.log({translate});


        // Api'a gönderilecek olan parametreleri belirle:
        const params = new URLSearchParams();
        params.set('source_language', translate.sourceLang.value);
        params.set('target_language', translate.targetLang.value);
        params.set('text', translate.textToTranslate);

        // Api'a istek at:
        const res = await api.post("/translate", params);

        console.log(res.data.data.translatedText);


        // Aldığı çevrilmiş metni payload olarak belirle :
        // return "Payload";
        return res.data.data.translatedText;
    });