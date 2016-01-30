var searchIndex = {};
searchIndex['parsimonious'] = {"items":[[3,"MapStatefulParser","parsimonious","",null,null],[3,"MapGuardedParser","","",null,null],[3,"AndThenParser","","",null,null],[3,"OrElseGuardedParser","","",null,null],[3,"OrEmitParser","","",null,null],[3,"StarStatefulParser","","",null,null],[3,"PlusParser","","",null,null],[3,"StarParser","","",null,null],[3,"ImpossibleStatefulParser","","",null,null],[3,"CharacterStatefulParser","","",null,null],[3,"CharacterParser","","",null,null],[3,"CharacterGuardedParser","","",null,null],[3,"BufferedGuardedParser","","",null,null],[3,"BufferedStatefulParser","","",null,null],[3,"BoxableParser","","",null,null],[4,"ParseResult","","The result of a parse.",null,null],[13,"Done","","The parse is finished.",0,null],[13,"Continue","","The parse can continue.",0,null],[4,"GuardedParseResult","","The result of a guarded parse.",null,null],[13,"Empty","","The input was empty.",1,null],[13,"Abort","","The parser must backtrack.",1,null],[13,"Commit","","The parser has committed to parsing the input.",1,null],[4,"AndThenStatefulParser","","",null,null],[13,"InLhs","","",2,null],[13,"InRhs","","",2,null],[4,"OrElseStatefulParser","","",null,null],[13,"Lhs","","",3,null],[13,"Rhs","","",3,null],[4,"OrEmitStatefulParser","","",null,null],[13,"Unresolved","","",4,null],[13,"Resolved","","",4,null],[4,"Impossible","","",null,null],[4,"Str","","",null,null],[13,"Borrowed","","",5,null],[13,"Owned","","",5,null],[5,"ignore","","",null,null],[5,"character","","",null,{"inputs":[{"name":"f"}],"output":{"name":"characterparser"}}],[5,"character_guard","","",null,{"inputs":[{"name":"f"}],"output":{"name":"characterguardedparser"}}],[8,"StatefulParserOf","","A trait for stateful parsers.",null,null],[16,"Output","","The type of the data being produced by the parser.",6,null],[10,"parse","","Provides data to the parser.",6,{"inputs":[{"name":"statefulparserof"},{"name":"s"}],"output":{"name":"parseresult"}}],[10,"done","","Tells the parser that it will not receive any more data.",6,{"inputs":[{"name":"statefulparserof"}],"output":{"name":"output"}}],[8,"ParserOf","","A trait for stateless parsers.",null,null],[16,"Output","","The type of the data being produced by the parser.",7,null],[16,"State","","The type of the parser state.",7,null],[10,"init","","Create a stateful parser by initializing a stateless parser.",7,{"inputs":[{"name":"parserof"}],"output":{"name":"state"}}],[11,"boxable","","Make this parser boxable.",7,{"inputs":[{"name":"parserof"}],"output":{"name":"boxableparser"}}],[11,"and_then","","",7,{"inputs":[{"name":"parserof"},{"name":"p"}],"output":{"name":"andthenparser"}}],[8,"GuardedParserOf","","A trait for stateless guarded parsers.",null,null],[16,"Output","","The type of the data being produced by the parser.",8,null],[16,"State","","The type of the parser state.",8,null],[10,"parse","","Provides data to the parser.",8,{"inputs":[{"name":"guardedparserof"},{"name":"s"}],"output":{"name":"guardedparseresult"}}],[11,"or_else","","Choice between guarded parsers (returns a guarded parser).",8,{"inputs":[{"name":"guardedparserof"},{"name":"p"}],"output":{"name":"orelseguardedparser"}}],[11,"or_emit","","Gives a guarded parser a default value (returns a parser).",8,{"inputs":[{"name":"guardedparserof"},{"name":"f"}],"output":{"name":"oremitparser"}}],[11,"and_then","","Sequencing with a parser (returns a guarded parser).",8,{"inputs":[{"name":"guardedparserof"},{"name":"p"}],"output":{"name":"andthenparser"}}],[11,"plus","","Iterate one or more times (returns a guarded parser).",8,{"inputs":[{"name":"guardedparserof"},{"name":"f"}],"output":{"name":"plusparser"}}],[11,"star","","Iterate zero or more times (returns a parser).",8,{"inputs":[{"name":"guardedparserof"},{"name":"f"}],"output":{"name":"starparser"}}],[11,"map","","Apply a function to the result (returns a guarded parser).",8,{"inputs":[{"name":"guardedparserof"},{"name":"f"}],"output":{"name":"mapguardedparser"}}],[11,"buffer","","Replace the result with the input.",8,{"inputs":[{"name":"guardedparserof"}],"output":{"name":"bufferedguardedparser"}}],[8,"Consumer","","A trait for consumers of data, typically buffers.",null,null],[10,"accept","","Accepts data.",9,{"inputs":[{"name":"consumer"},{"name":"t"}],"output":null}],[8,"BoxableParserOf","","",null,null],[16,"Output","","",10,null],[10,"parse_boxable","","",10,{"inputs":[{"name":"boxableparserof"},{"name":"s"}],"output":{"name":"option"}}],[10,"done_boxable","","",10,{"inputs":[{"name":"boxableparserof"}],"output":{"name":"output"}}],[11,"fmt","","",11,{"inputs":[{"name":"mapstatefulparser"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",11,{"inputs":[{"name":"mapstatefulparser"}],"output":{"name":"self"}}],[11,"parse","","",11,{"inputs":[{"name":"mapstatefulparser"},{"name":"s"}],"output":{"name":"parseresult"}}],[11,"done","","",11,{"inputs":[{"name":"mapstatefulparser"}],"output":{"name":"output"}}],[11,"fmt","","",12,{"inputs":[{"name":"mapguardedparser"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",12,{"inputs":[{"name":"mapguardedparser"}],"output":{"name":"self"}}],[11,"parse","","",12,{"inputs":[{"name":"mapguardedparser"},{"name":"s"}],"output":{"name":"guardedparseresult"}}],[11,"fmt","","",13,{"inputs":[{"name":"andthenparser"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",13,{"inputs":[{"name":"andthenparser"}],"output":{"name":"andthenparser"}}],[11,"init","","",13,{"inputs":[{"name":"andthenparser"}],"output":{"name":"state"}}],[11,"parse","","",13,{"inputs":[{"name":"andthenparser"},{"name":"s"}],"output":{"name":"guardedparseresult"}}],[11,"fmt","","",2,{"inputs":[{"name":"andthenstatefulparser"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",2,{"inputs":[{"name":"andthenstatefulparser"}],"output":{"name":"andthenstatefulparser"}}],[11,"parse","","",2,{"inputs":[{"name":"andthenstatefulparser"},{"name":"s"}],"output":{"name":"parseresult"}}],[11,"done","","",2,{"inputs":[{"name":"andthenstatefulparser"}],"output":{"name":"output"}}],[11,"fmt","","",14,{"inputs":[{"name":"orelseguardedparser"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",14,{"inputs":[{"name":"orelseguardedparser"}],"output":{"name":"orelseguardedparser"}}],[11,"parse","","",14,{"inputs":[{"name":"orelseguardedparser"},{"name":"s"}],"output":{"name":"guardedparseresult"}}],[11,"fmt","","",3,{"inputs":[{"name":"orelsestatefulparser"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",3,{"inputs":[{"name":"orelsestatefulparser"}],"output":{"name":"orelsestatefulparser"}}],[11,"parse","","",3,{"inputs":[{"name":"orelsestatefulparser"},{"name":"s"}],"output":{"name":"parseresult"}}],[11,"done","","",3,{"inputs":[{"name":"orelsestatefulparser"}],"output":{"name":"output"}}],[11,"fmt","","",4,{"inputs":[{"name":"oremitstatefulparser"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",4,{"inputs":[{"name":"oremitstatefulparser"}],"output":{"name":"self"}}],[11,"parse","","",4,{"inputs":[{"name":"oremitstatefulparser"},{"name":"s"}],"output":{"name":"parseresult"}}],[11,"done","","",4,{"inputs":[{"name":"oremitstatefulparser"}],"output":{"name":"output"}}],[11,"clone","","",15,{"inputs":[{"name":"oremitparser"}],"output":{"name":"self"}}],[11,"init","","",15,{"inputs":[{"name":"oremitparser"}],"output":{"name":"state"}}],[11,"accept","collections::string","",16,{"inputs":[{"name":"string"},{"name":"string"}],"output":null}],[11,"accept","","",16,{"inputs":[{"name":"string"},{"name":"str"}],"output":null}],[11,"accept","","",16,{"inputs":[{"name":"string"},{"name":"char"}],"output":null}],[11,"accept","collections::vec","",17,null],[11,"accept","","",17,{"inputs":[{"name":"vec"},{"name":"t"}],"output":null}],[11,"fmt","parsimonious","",18,{"inputs":[{"name":"starstatefulparser"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",18,{"inputs":[{"name":"starstatefulparser"}],"output":{"name":"starstatefulparser"}}],[11,"parse","","",18,{"inputs":[{"name":"starstatefulparser"},{"name":"s"}],"output":{"name":"parseresult"}}],[11,"done","","",18,{"inputs":[{"name":"starstatefulparser"}],"output":{"name":"t"}}],[11,"fmt","","",19,{"inputs":[{"name":"plusparser"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",19,{"inputs":[{"name":"plusparser"}],"output":{"name":"self"}}],[11,"parse","","",19,{"inputs":[{"name":"plusparser"},{"name":"s"}],"output":{"name":"guardedparseresult"}}],[11,"fmt","","",20,{"inputs":[{"name":"starparser"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",20,{"inputs":[{"name":"starparser"}],"output":{"name":"self"}}],[11,"init","","",20,{"inputs":[{"name":"starparser"}],"output":{"name":"state"}}],[11,"fmt","","",21,{"inputs":[{"name":"impossible"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",21,{"inputs":[{"name":"impossible"}],"output":{"name":"impossible"}}],[11,"fmt","","",22,{"inputs":[{"name":"impossiblestatefulparser"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",22,{"inputs":[{"name":"impossiblestatefulparser"}],"output":{"name":"impossiblestatefulparser"}}],[11,"parse","","",22,{"inputs":[{"name":"impossiblestatefulparser"},{"name":"s"}],"output":{"name":"parseresult"}}],[11,"done","","",22,{"inputs":[{"name":"impossiblestatefulparser"}],"output":{"name":"t"}}],[11,"fmt","","",23,{"inputs":[{"name":"characterstatefulparser"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",23,{"inputs":[{"name":"characterstatefulparser"}],"output":{"name":"self"}}],[11,"parse","","",23,{"inputs":[{"name":"characterstatefulparser"},{"name":"str"}],"output":{"name":"parseresult"}}],[11,"done","","",23,{"inputs":[{"name":"characterstatefulparser"}],"output":{"name":"option"}}],[11,"fmt","","",24,{"inputs":[{"name":"characterparser"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",24,{"inputs":[{"name":"characterparser"}],"output":{"name":"self"}}],[11,"init","","",24,{"inputs":[{"name":"characterparser"}],"output":{"name":"state"}}],[11,"fmt","","",25,{"inputs":[{"name":"characterguardedparser"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",25,{"inputs":[{"name":"characterguardedparser"}],"output":{"name":"self"}}],[11,"parse","","",25,{"inputs":[{"name":"characterguardedparser"},{"name":"str"}],"output":{"name":"guardedparseresult"}}],[11,"hash","","",5,null],[11,"partial_cmp","","",5,{"inputs":[{"name":"str"},{"name":"str"}],"output":{"name":"option"}}],[11,"lt","","",5,{"inputs":[{"name":"str"},{"name":"str"}],"output":{"name":"bool"}}],[11,"le","","",5,{"inputs":[{"name":"str"},{"name":"str"}],"output":{"name":"bool"}}],[11,"gt","","",5,{"inputs":[{"name":"str"},{"name":"str"}],"output":{"name":"bool"}}],[11,"ge","","",5,{"inputs":[{"name":"str"},{"name":"str"}],"output":{"name":"bool"}}],[11,"cmp","","",5,{"inputs":[{"name":"str"},{"name":"str"}],"output":{"name":"ordering"}}],[11,"eq","","",5,{"inputs":[{"name":"str"},{"name":"str"}],"output":{"name":"bool"}}],[11,"ne","","",5,{"inputs":[{"name":"str"},{"name":"str"}],"output":{"name":"bool"}}],[11,"fmt","","",5,{"inputs":[{"name":"str"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",5,{"inputs":[{"name":"str"}],"output":{"name":"str"}}],[11,"fmt","","",26,{"inputs":[{"name":"bufferedguardedparser"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",26,{"inputs":[{"name":"bufferedguardedparser"}],"output":{"name":"bufferedguardedparser"}}],[11,"parse","","",26,{"inputs":[{"name":"bufferedguardedparser"},{"name":"str"}],"output":{"name":"guardedparseresult"}}],[11,"fmt","","",27,{"inputs":[{"name":"bufferedstatefulparser"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",27,{"inputs":[{"name":"bufferedstatefulparser"}],"output":{"name":"bufferedstatefulparser"}}],[11,"parse","","",27,{"inputs":[{"name":"bufferedstatefulparser"},{"name":"str"}],"output":{"name":"parseresult"}}],[11,"done","","",27,{"inputs":[{"name":"bufferedstatefulparser"}],"output":{"name":"output"}}],[11,"parse_boxable","","",28,{"inputs":[{"name":"boxableparser"},{"name":"s"}],"output":{"name":"option"}}],[11,"done_boxable","","",28,{"inputs":[{"name":"boxableparser"}],"output":{"name":"output"}}],[11,"parse","alloc::boxed","",29,{"inputs":[{"name":"box"},{"name":"s"}],"output":{"name":"parseresult"}}],[11,"done","","",29,{"inputs":[{"name":"box"}],"output":{"name":"output"}}]],"paths":[[4,"ParseResult"],[4,"GuardedParseResult"],[4,"AndThenStatefulParser"],[4,"OrElseStatefulParser"],[4,"OrEmitStatefulParser"],[4,"Str"],[8,"StatefulParserOf"],[8,"ParserOf"],[8,"GuardedParserOf"],[8,"Consumer"],[8,"BoxableParserOf"],[3,"MapStatefulParser"],[3,"MapGuardedParser"],[3,"AndThenParser"],[3,"OrElseGuardedParser"],[3,"OrEmitParser"],[3,"String"],[3,"Vec"],[3,"StarStatefulParser"],[3,"PlusParser"],[3,"StarParser"],[4,"Impossible"],[3,"ImpossibleStatefulParser"],[3,"CharacterStatefulParser"],[3,"CharacterParser"],[3,"CharacterGuardedParser"],[3,"BufferedGuardedParser"],[3,"BufferedStatefulParser"],[3,"BoxableParser"],[3,"Box"]]};
initSearch(searchIndex);