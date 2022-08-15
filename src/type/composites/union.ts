import * as ts from "typescript";

import { TypeDefinition } from "..";
import { toTypeNode } from "../utils";

/**
 * Describe a type which is one of many
 * options, for example a list of known strings.
 *
 * @example
 * t.type("Size", t.union(["small", "medium", "large"]));
 *
 * @param definitions An array of type definitions.
 */
export function union(definitions: Array<TypeDefinition>): ts.UnionTypeNode {
	return ts.factory.createUnionTypeNode(definitions.map(toTypeNode));
}
