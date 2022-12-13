type InputProps = {
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>,
    index: number
  ) => void;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
  title: string;
  desc: string;
  quest: string;
  index: number;
  arr: Array<any>;
  yesVal: string;
  noVal: string;
  // lastVid: boolean;
};
export const InputFields = (props: InputProps) => {
  const {
    title,
    desc,
    quest,
    index,
    arr,
    yesVal,
    noVal,
    onChange,
    onFileChange,
    // lastVid,
  } = props;

  // console.log(lastVid);

  return (
    <div className='input-container'>
      <div className='input-label-container'>
        <label htmlFor='videoUrlTitle'>
          <input
            className='input-field'
            type='text'
            name='videoUrlTitle'
            placeholder='title'
            onChange={(e) => onChange(e, index)}
            value={title}
          ></input>
        </label>
      </div>
      <div className='input-label-container'>
        <label htmlFor='videoUrlDesc'>
          <input
            className='input-field'
            type='text'
            name='videoUrlDesc'
            placeholder='description'
            onChange={(e) => onChange(e, index)}
            value={desc}
          ></input>
        </label>
      </div>
      <div className='input-label-container'>
        <label htmlFor='optionsQuestion'>
          <input
            className='input-field'
            type='text'
            name='optionsQuestion'
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
      <div className='selection-container'>
        <label htmlFor='yesValue'>
          <select
            name='yesValue'
            id='select_yes'
            onChange={(e) => onChange(e, index)}
            value={yesVal}
          >
            {arr.map((el) => {
              return <option key={el}>{el}</option>;
            })}
            <option value='end'>end</option>
          </select>
        </label>
        <label htmlFor='noValue'>
          <select
            name='noValue'
            id='select_no'
            onChange={(e) => onChange(e, index)}
            value={noVal}
          >
            {arr.map((el) => {
              return <option key={el}>{el}</option>;
            })}
            <option value='end'>end</option>
          </select>
        </label>
      </div>
    </div>
  );
};
