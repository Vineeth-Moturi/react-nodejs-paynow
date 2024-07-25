import './BackgroundTemplate1.css'

function BackgroundTemplate1(){
  return(
    <div className="d-flex row col-12 layout" style={{
      color: 'whitesmoke', 
      margin: '0px',
      zIndex: '0'}}
      >
      <div className="d-flex" style={{
          minHeight: '30%',
          maxHeight: '30%',
          backgroundColor: '#212529', 
        }}
        >
      </div>

      <div className="d-flex" style={{
          minHeight: '70%',
          maxHeight: '70%',
          backgroundColor: 'whitesmoke'
        }}>
      </div>
    </div>
  );
}
export default BackgroundTemplate1;