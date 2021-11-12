initSidebarItems({"derive":[["AsChangeset","Implements `AsChangeset`"],["QueryId","Implements `QueryId`"]],"fn":[["debug_query","Takes a query `QueryFragment` expression as an argument and returns a type that implements `fmt::Display` and `fmt::Debug` to show the query."]],"mod":[["bind_collector","Types related to managing bind parameters during query construction."]],"struct":[["AstPass","The primary type used when walking a Diesel AST during query execution."],["BoxedLimitOffsetClause","A boxed variant of `LimitOffsetClause`"],["BoxedSqlQuery","See `SqlQuery::into_boxed`."],["DebugQuery","A struct that implements `fmt::Display` and `fmt::Debug` to show the SQL representation of a query."],["DeleteStatement","Represents a SQL `DELETE` statement."],["IncompleteInsertStatement","The structure returned by `insert_into`."],["InsertStatement","A fully constructed insert statement."],["LimitClause","A query node representing a limit clause"],["LimitOffsetClause","A helper query node that contains both limit and offset clauses"],["NoLimitClause","A query node indicating the absence of a limit clause"],["NoOffsetClause","A query node indicating the absence of an offset clause"],["OffsetClause","A query node representing an offset clause"],["Only","Represents a query with an `ONLY` clause."],["SqlQuery","The return value of `sql_query`."],["UpdateStatement","Represents a complete `UPDATE` statement."]],"trait":[["AsChangeset","Types which can be passed to `update.set`."],["AsQuery","Types that can be converted into a complete, typed SQL query."],["DecoratableTarget","Interface to add information to conflict targets. Designed to be open for further additions to conflict targets like constraints"],["IntoBoxedClause","A trait used to construct type erased boxed variant of the current query node"],["IntoBoxedSelectClause","An internal helper trait to convert different select clauses into their boxed counter part."],["IntoUpdateTarget","A type which can be passed to `update` or `delete`."],["Query","A complete SQL query with a return type."],["QueryBuilder","Constructs a SQL query from a Diesel AST."],["QueryFragment","An untyped fragment of SQL."],["QueryId","Uniquely identifies queries by their type for the purpose of prepared statement caching."],["SelectClauseExpression","Specialised variant of `Expression` for select clause types"],["SelectClauseQueryFragment","Specialised variant of `QueryFragment` for select clause types"],["SelectQuery","Indicates that a type is a `SELECT` statement."],["UndecoratedInsertRecord","Marker trait to indicate that no additional operations have been added to a record for insert."]],"type":[["BoxedDeleteStatement","A `DELETE` statement with a boxed `WHERE` clause"],["BoxedUpdateStatement","An `UPDATE` statement with a boxed `WHERE` clause."],["BuildQueryResult","A specialized Result type used with the query builder."]]});