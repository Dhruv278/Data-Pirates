exports.index=(req,res)=>{
    res.status(200).render('main.ejs')
}
exports.event=(req,res)=>{
    res.status(200).render('event')
}