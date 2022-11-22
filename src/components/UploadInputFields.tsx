type InputProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
  title: string;
  desc: string;
  quest: string;
  index: number;
};
export const InputFields = (props: InputProps) => {
  const { title, desc, quest, index, onChange, onFileChange } = props;

  return (
    <div className='input-container' key={index}>
      <div className='input-label-container'>
        <label htmlFor='title'>
          <input
            className='input-field'
            type='text'
            name='title'
            placeholder='title'
            onChange={(e) => onChange(e, index)}
            value={title}
          ></input>
        </label>
      </div>
      <div className='input-label-container'>
        <label htmlFor='description'>
          <input
            className='input-field'
            type='text'
            name='description'
            placeholder='description'
            onChange={(e) => onChange(e, index)}
            value={desc}
          ></input>
        </label>
      </div>
      <div className='input-label-container'>
        <label htmlFor='question'>
          <input
            className='input-field'
            type='text'
            name='question'
            placeholder='question'
            onChange={(e) => onChange(e, index)}
            value={quest}
          ></input>
        </label>
      </div>
      <div className='input-label-container'>
        <label htmlFor='file'>
          <input
            className='input-field'
            type='file'
            name='file'
            onChange={(e) => onFileChange(e, index)}
          ></input>
        </label>
      </div>
    </div>
  );
};
