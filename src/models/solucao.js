const mongoose = require('../database/connection');

//definindo schema de solucao
const SolucaoSchema = new mongoose.Schema({
    descricao:{
        required: true
    },
    createBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    createAt: {
        type: Date,
        default: Date.now
    },
    visualizacoes: {
        type: Number,
        default: 0
    },
    avalicoes:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Avaliacao'
    }]
});

//definindo que 'Solucao' segue o model 'SolucaoSchema'
const Solucao = mongoose.model('Solucao', SolucaoSchema);

module.exports = Solucao;