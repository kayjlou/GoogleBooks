module.exports = (Schema, model) => {

  const BookSchema = new Schema({
    title: {
      type: String
    },
    description: {
      type: String
    },
    author: {
      type: String
    }


  })
  return model('Book', BookSchema)

}