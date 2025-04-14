
const InputField = ({ ...props }) => {
   // const handleKey = (e) => {
   //    if (e.keyCode === 13) e.preventDefault();
   // };

   return (
      <input
         {...props} 
         // onKeyDown={handleKey}
      />
   );
};



export default InputField;
