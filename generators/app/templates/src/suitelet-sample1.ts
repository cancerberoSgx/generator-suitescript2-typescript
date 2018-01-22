/**
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 */

import { EntryPoints } from 'N/types'
import { load } from 'N/record'
import * as Search from 'N/search'

import { otherone } from './otherone'

export let onRequest: EntryPoints.Suitelet.onRequest = ctx => {
  const folder = load({ type: 'folder', id: 36464 })
  const allfields = folder.getFields().join(', ')
  ctx.response.write(`<br>All fields: ${allfields} !!!`)
  ctx.response.write(`<br>otherone:` + otherone())
}
