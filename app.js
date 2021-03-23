// to intall package.json    == npm init
// to install new packages   == npm install "package name"
// to install chalk          == npm i chalk
// to install nodemo         == npm i -g nodemon

const notes = require("./notes.js")
const chalk = require("chalk")
const yargs = require("yargs")

yargs.version("1.0")

yargs.command(
    {
        command: "add",
        describe: "Add new note",
        builder: {
            title:{
                describe: "Note title",
                demandOption: true, 
                type: "string"
            },
            body:{
                describe: "Note body",
                demandOption: true,
                type: "string"
            }
        },
        handler: function(argv){
            console.log(chalk.blue.bold("Adding a new note..."))
            title = argv.title
            body = argv.body
            notes.addNote(title, body)
        }
    }
)

yargs.command(
    {
        command : "remove",
        describe : "Remove note ",
        builder : {
            title : {
                describe : "Note title",
                demandOption : true,
                type : "string"
            }
        },
        handler : function(argv){
            console.log(chalk.blue.bold("Removing note.."))
            title = argv.title
            notes.removeNote(title)
        }
    }
)

yargs.command({
    command : "list",
    describe : "List notes",
    handler : function(){
        notes.listNotes()
    }
})

yargs.command({
    command : "read",
    describe : "Read a note",
    builder : {
        title : {
            describe : "Note title",
            demandOption : true,
            type : "string"
        }
    },
    handler : function(argv){
        console.log(chalk.blue.bold("Read note function"))
        title = argv.title
        notes.readNote(title)
    }
})

yargs.command({
    command : "alterTitle",
    describe : "Alter note",
    builder : {
        title : {
            describe : "Note old title",
            demandOption : true,
            type : "string"
        },
        newTitle : {
            describe : "Note new title",
            demandOption : true,
            type : "string"
        }
    },
    handler : function(argv){
        console.log(chalk.blue.bold("Function to alter note title "))
        title = argv.title
        newTitle = argv.newTitle
        notes.alterTitle(title,newTitle)
    }
})

yargs.parse()