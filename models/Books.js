module.exports = (Schema, model) => {

  const BookSchema = new Schema({
    title: {
      type: String
    },
    authors: {
      type: [String]
    },
    description: {
      type: String
    },
    image: {
      type: String
    },
    link: {
      type: String
    }


  })
  return model('Book', BookSchema)

}