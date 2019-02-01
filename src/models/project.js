const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a schema
const projectSchmea = Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    reuiqred: true
  },
  thumbnails: [String],
  tags: [String],
  period: {
    type: String,
  },
  skills: [String],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  favoriteCount: {
    type: Number,
    default: 0,
  },
});

projectSchmea.methods = {
  toJSON() {
    return {
      _id: this._id,
      name: this.name,
      description: this.description,
      thumbnails: this.thumbnails,
      tags: this.tags,
      period: this.period,
      skills: this.skills,
      user: this.user,
      favoriteCount: this,favoriteCount,
    };
  }
}



// Create a model
const Project = mongoose.model('Project', projectSchema);

// Export the model
module.exports = Project;
