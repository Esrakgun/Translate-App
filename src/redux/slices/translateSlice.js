import { createSlice } from "@reduxjs/toolkit";
import { translateText } from "../actions";

const initialState = {
    sourceLang: {
        
            "value": "tr",
            "label": "Turkish"
        
    },
    targetLang: {
        
            "value": "en",
            "label": "English"
       
    },
    textToTranslate: "",
    translatedText: "",
    isLoading: false,
};

const TranslateSlice = createSlice({
    name: "language",
    initialState,
    // Sekron Aksiyonları tanımladık:
    reducers: {
        setSource: (state, action) => {
            state.sourceLang = action.payload;
        },
        setTarget: (state, action) => {
            state.targetLang = action.payload;
        },
        setText: (state, action) => {
            state.textToTranslate = action.payload;
        },

        swap: (state) => {
            const currSource = state.sourceLang;
            const currTarget = state.targetLang;
            const currText = state.textToTranslate;
            const currTranslated = state.translatedText;

            state.sourceLang = currTarget;
            state.targetLang = currSource;
            state.textToTranslate = currTranslated;
            state.translatedText = currText;
           
        },

   },
    //    Asekron Aksiyonları da burda :
    extraReducers: (builder) => {
        builder.addCase(translateText.pending, (state) => {
            state.isLoading = true;
            state.translatedText="";
        });


        builder.addCase(translateText.fulfilled, (state, { payload }) => {
            state.isLoading = false;
            state.translatedText = payload;
        });

        builder.addCase(translateText.rejected, (state, { payload }) => {
            state.isLoading = false;
            alert("Bir Sorun Oluştu..");
            alert(err.message);
        })

    },
});

export const { setSource, setTarget, setText, swap } = TranslateSlice.actions;

export default TranslateSlice.reducer;