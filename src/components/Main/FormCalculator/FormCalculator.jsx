import Input from '../../../FormElements/FormInput';
import CustomSelectInput from '../../../FormElements/FormSelectInput';
import { inputs } from '../../../utils/constants';

export const FormCalculator = () => {
  return (
    <section className="flex justify-center items-center flex-col h-screen">
      <h1 className="text-5xl mb-12 font-medium text-white drop-shadow-2xl max-w-heading">Введите размеры ангара</h1>
      <form className=''>
        {inputs.measurements.map((input, index) => (
          <Input key={index} inputId={input.inputId} label={input.label} />
        ))}
        <div>
          {inputs.additionalInfo.map((input, index) => (
            <CustomSelectInput key={index} defaultValue={input.defaultValue} selectionOptions={input.selectionOptions} />
          ))}
        </div>
        <button type="submit">Рассчитать</button>
      </form>
    </section>
  );
};
