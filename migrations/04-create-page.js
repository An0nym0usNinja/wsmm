module.exports = function (migration) {

    const page = migration
        .createContentType('page')
        .name('Page')
        .description('A page on the site');
        
    page.createField('title')
        .name('Title')
        .type('Symbol')
        .required(true)
        .localized(true);

    page.createField('slug')
        .name('Slug')
        .type('Symbol')
        .required(true)
        .localized(true);

    page.createField('content')
        .name('Content')
        .type('Text')
        .required(true)
        .localized(true);
        
}