export default [...Array(30)].map((item, index) => ({
  id: index + 1,
  value: `value${index + 1}`,
}))
