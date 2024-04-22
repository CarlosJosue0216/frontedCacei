
const Banner = ({alerta}) => {
  return (
    <div>
        <h1 className={`${alerta?.typeAlert ? 'bg-green-400' : 'bg-red-500'} p-3 text-center rounded-lg font-bold text-xl text-white capitalize`}> {alerta?.msg} </h1>
    </div>
  )
}

export default Banner