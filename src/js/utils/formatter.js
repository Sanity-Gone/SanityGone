// use common JS format for libraries so they can be reused in the build scripts
module.exports = {
    slugify: (name) => name.toLowerCase().replace(' ', '-').replace(/[^a-z0-9-]/gmi, ''),
    slugifyStrict: (name) => name.toLowerCase().replace(/[^a-z0-9]/gmi, ''),
}