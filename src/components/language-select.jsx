// İmport Alanı:
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select'
import { setSource, setTarget, swap } from '../redux/slices/translateSlice';
import { translateText } from '../redux/actions';

// Verileri alamıyorum hocaya sor!!!
const LanguageSelect = () => {
  // Dispatch Kurulum Alanı:
  const dispatch = useDispatch();


  const { isLoading, languages } = useSelector(
    (store) => store.language);

  const { sourceLang, targetLang ,textToTranslate} = useSelector((store) => store.translate);


  // Languages dizisinin nesneler code ve name değerlerinden oluşuyordu ,React Select ise option'ların value ve label degerlerinde oluşsan nesneler olmasını istiyordu.Bizde languages dizisini dönüp react-Select formatına getirdik.
  const formatted = languages.map((item) => ({
    value: item.code,
    label: item.name,
  }));


  console.log(sourceLang);
  

  // console.log(languages);
  // console.log(formatted);

  //  React Select Alanı:
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ];

  return (
    <div className='flex gap-2 text-black'>
      <Select
        options={formatted.filter((i)=>i.value !==targetLang.value)}
        isLoading={isLoading}
        isDisabled={isLoading}
        onChange={(selected) => {
          dispatch(setSource(selected));
          console.log(selected);
        }}
        value={sourceLang}
        className='flex-1' />


      <button onClick={() => dispatch(swap())}
        className='bg-zinc-700 py-2 px-6 hover:bg-zinc-800 transition rounded text-white'>Değiş</button>


      <Select
       options={formatted.filter((i)=>i.value !==sourceLang.value)}
        isLoading={isLoading}
        isDisabled={isLoading}
        onChange={(selected) => {
          dispatch(setTarget(selected));
          // console.log(selected);

          if(textToTranslate){
            dispatch(translateText());
          }


        }}
        value={targetLang}
        className='flex-1' />

    </div>
  )
}

export default LanguageSelect;

