import './BackgroundTemplate1.css'

function BackgroundTemplate1(){
  return(
    <div className="d-flex row col-12 layout" style={{
      color: 'whitesmoke', 
      margin: '0px',
      zIndex: '0'}}
      >
      <div className="d-flex" style={{
          minHeight: '35%',
          maxHeight: '35%',
          backgroundColor: '#212529', 
        }}
        >
      </div>

      <div className="d-flex" style={{
          minHeight: '65%',
          maxHeight: '65%',
          backgroundColor: '#e8e8e8'
        }}>
      </div>
    </div>
  );
}
export default BackgroundTemplate1;