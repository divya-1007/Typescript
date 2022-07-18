import { Schema } from 'mongoose';

const AgentSchema = new Schema( {
  _id: {
    type: Schema.Types.ObjectId,
    auto: true
  },
  number: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
}, {
  timestamps: true, // Auto create createdAt & updatedAt
} );


export default {
  'name': 'Agent',
  'schema': AgentSchema
};